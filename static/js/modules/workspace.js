CodeBlocklyLoader.onload(function () {
    const config = CodeBlocklyLoader.assign({}, (CodeBlockly.config.workspace || {}));

    const exports = Object.create(null);

    // =========== 自定义工具箱类别 ===========
    exports.ToolboxCategory = class extends Blockly.ToolboxCategory {
        constructor(categoryDef, toolbox, opt_parent) {
            super(categoryDef, toolbox, opt_parent);
            this._iconID = categoryDef.icon;
        };

        // 添加图标
        createIconDom_() {
            return $("<iconpark-icon>").attr({
                name: this._iconID,
                width: 25,
                height: 25,
            })[0];
        }
    }

    // 向 Blockly 注册
    Blockly.registry.register(
        Blockly.registry.Type.TOOLBOX_ITEM,
        Blockly.ToolboxCategory.registrationName,
        exports.ToolboxCategory, true
    );

    // =========== 注册工作区 ===========
    const blocklyWorkspace = exports.core = Blockly.inject(".workspace", {
        toolbox: CodeBlockly.toolboxConfig, // xml位置
        ...config.blockly // 配置
    });

    // =========== 自定义主题 ===========
    const { blockColor } = CodeBlockly.utils.blockly;

    exports.theme = Blockly.Theme.defineTheme("BlocklyTheme", {
        base: Blockly.Themes.Classic,
        blockStyles: { // 积木颜色
            loop_blocks: { colourPrimary: blockColor["loop"] }, // 循环（归于控制）
            math_blocks: { colourPrimary: blockColor["math"] }, // 数字
            logic_blocks: { colourPrimary: blockColor["math"] }, // 逻辑（其中如果积木归于 控制，并跟随loop_blocks ，其他的都在 数学里
            text_blocks: { colourPrimary: blockColor["math"] }, // 字符串
            procedure_blocks: { colourPrimary: blockColor["procedure"] }, // 函数
            function_blocks: { colourPrimary: blockColor["function"] }, // 还是函数
            variable_blocks: { colourPrimary: blockColor["varible"] }, // 变量
            list_blocks: { colourPrimary: blockColor["list"] }, // 列表
            colour_blocks: { colourPrimary: blockColor["colour"] },
        },
        componentStyles: {
            workspaceBackgroundColour: "#0000", // 工作区背景色
            toolboxBackgroundColour: "var(--cds-design-color-fill-107)", // 积木区背景色
            flyoutBackgroundColour: "var(--cds-design-color-fill-107)", // 积木盒弹出页背景色
            scrollbarColour: "#ccc", // 滚动条颜色
            flyoutForegroundColour: "var(--cds-design-color-text-104)",
        },
        startHats: true // 显示帽子
    });

    blocklyWorkspace.setTheme(exports.theme); // 设置主题

    // =========== 事件处理 ===========
    blocklyWorkspace.addChangeListener(function (event) {
        CodeBlockly.emit("workspace_change", event);

        // 积木盒开/关特效
        if (event.type == "toolbox_item_select") {
            const flyout = $(blocklyWorkspace.getToolbox().getFlyout().svgGroup_); // Flyout元素
            flyout.css("--display", "1");
            if (event.newItem != null && event.oldItem == null) {
                // 如果是打开
                flyout.css("transform", `translate(${$(".blocklyToolboxDiv").width()}px, 0px)`);
            } else if (event.newItem == null && event.oldItem != null) {
                // 如果是关闭
                flyout.css("transform", `translate(-${flyout.width() + 1}px, 0px)`);
            }
        }

        // 当有积木开始拖动
        if (event.type == "drag" && !!event.isStart) {
            $(".toolbox-trash").addClass(["show", "blocklyDragging"]);
            $(".injectionDiv ").addClass("blocklyDragging");
        }

        // 当有积木结束拖动
        if (event.type == "drag" && !event.isStart) {
            $(".toolbox-trash").removeClass(["show", "blocklyDragging"]);
            $(".injectionDiv ").removeClass("blocklyDragging");
        }
    });

    // =========== 设置 如果...否则... 积木的颜色 ===========
    const { changeBlockStyle } = CodeBlockly.utils.blockly;
    changeBlockStyle("controls_if", "loop_blocks");
    changeBlockStyle("controls_if_if", "loop_blocks");
    changeBlockStyle("controls_if_else", "loop_blocks");
    changeBlockStyle("controls_if_elseif", "loop_blocks");

    // =========== 自适应 ===========
    const { resizeWorkspace } = CodeBlockly.utils.blockly;

    let selfAdaTemp = "";
    exports.checkResize = function () {
        let temp = `${$(".workspace").width()}-${$(".workspace").height()}`;
        if (temp != selfAdaTemp) { // 判断 这次长和宽是否于上次的不一样
            selfAdaTemp = temp;
            resizeWorkspace(); // 重新自适应工作区
        }

        requestAnimationFrame(exports.checkResize);
    }
    exports.checkResize();

    // =========== 缩放 ===========
    const { toolbar } = CodeBlockly;
    exports.nowScale = blocklyWorkspace.scale * 100; // 当前缩放百分比，用于准备动画
    blocklyWorkspace._scale = blocklyWorkspace.scale;

    Object.defineProperty(blocklyWorkspace, 'scale', { // 监听 scale（用于动画）
        get: function () {
            return this._scale;
        },
        set: function (newValue) {
            resizeWorkspace(); // 重新自适应工作区
            this._scale = newValue;
            toolbar.setItemText("toolbar-size", String(~~(blocklyWorkspace.scale * 100)) + "%"); // 更新工具栏中的缩放百分比文字
        }
    });

    exports.scaleChangeAni = function () { // 缩放动画
        exports.nowScale = Math.max( // 将缩放限制在指定范围内
            config.blockly.zoom.minScale * 100,
            Math.min(
                exports.nowScale,
                config.blockly.zoom.maxScale * 100
            )
        );

        $(blocklyWorkspace).stop().animate({ // jq 动画，stop是要结束上次的正在播放的缩放动画（这样视觉好一点
            scale: (exports.nowScale / 100)
        }, 'fast', function () {
            blocklyWorkspace.scale = (exports.nowScale / 100); // 动画结束后也要设置一下，不然可能会有缩放没到位的现象
        });
    }

    CodeBlockly.on("workspace_change", function () {
        toolbar.setItemText("toolbar-size", String(~~(blocklyWorkspace.scale * 100)) + "%"); // 工具区变化后也设置一遍
    });

    CodeBlockly.on("toolbar_click", function (id) { // 工具栏按钮被点击
        switch (id) {
            case "toolbar-zoom-out": // 缩小
                exports.nowScale -= 20
                exports.scaleChangeAni()
                break;
            case "toolbar-size": // 还原100%
                exports.nowScale = 100
                exports.scaleChangeAni()
                break;
            case "toolbar-zoom-in": // 放大
                exports.nowScale += 20
                exports.scaleChangeAni()
                break;
        }
    });

    // =========== 右键菜单 ===========
    Blockly.ContextMenuRegistry.registry.unregister("blockHelp"); // 取消注册帮助菜单

    exports.blockToImage = function (block, useBg = false) {
        // 将积木扔进缓存处理
        var blockPath = $(block.svgGroup_.cloneNode(true));

        // 去掉偏移
        blockPath.attr("transform", "translate(1,1)");

        // 获取边距
        var bbox = block.svgGroup_.getBBox();
        bbox.width += 2;
        bbox.height += 2;

        // 建造svg
        var svg = $(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" >`);
        svg.append(blockPath);
        svg.attr({
            "width": bbox.width,
            "height": bbox.height,
            "viewBox": `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
        });

        // 将工作区里的所有defs移到svg里
        $(".blocklySvg defs").map((_, e) => e.cloneNode(true)).appendTo(svg);

        // 样式处理
        svg.find(".blocklySelected>.blocklyPath[filter]").remove();
        svg.find(".blocklyText")
            .attr("fill", "#fff")
            .css("font", `bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif`);

        svg
            .find(".blocklyNonEditableText>rect:not(.blocklyDropdownRect), .blocklyEditableText>rect:not(.blocklyDropdownRect)")
            .attr("fill", "#fff");
        svg
            .find(".blocklyNonEditableText>text, .blocklyEditableText>text, .blocklyNonEditableText>g>text, .blocklyEditableText>g>text")
            .attr("fill", "#575E75");
        svg.find(".blocklyDropdownText")
            .attr("fill", "#fff");
        svg.find(".blocklyIconSymbol")
            .attr("fill", "#fff");
        svg.find(".blocklyIconShape")
            .attr({
                "fill": "#00f",
                "stroke": "#fff",
                "stroke-width": "1px"
            });
        svg.find(".blocklyIconGroup, .blocklyIconGroupReadonly")
            .css({
                "opacity": ".6"
            });

        svg.find(".blocklyDisabled>.blocklyPath")
            .attr({
                "fill-opacity": "0.5",
                "stroke-opacity": "0.5",
            })
        svg.find(".blocklyDisabled>.blocklyOutlinePath")
            .attr("fill", "url(#" + $(`*[id*="blocklyDisabledPattern"]`).attr("id") + ")");

        // svg转dataURL
        return CodeBlockly.utils.image.svgToImage(svg[0], useBg, bbox.width, bbox.height)
    }

    // 注册积木图片菜单
    Blockly.ContextMenuRegistry.registry.register({
        displayText() {
            return '生成积木图片';
        },
        preconditionFn({ block }) {
            if (!block.svgGroup_) return 'hidden';
            return 'enabled';
        },
        callback({ block }) {
            let image = null;
            exports.blockToImage(block, false).then((ru) => {
                image = ru;

                CodeBlockly.dialog.fire({
                    imageUrl: image.dataurl,
                    imageAlt: "积木图片",
                    confirmButtonText: `下载`,
                    showCancelButton: true,
                    cancelButtonText: `复制`,
                    html: ` `
                }).then((result) => {
                    if (result.dismiss == "backdrop") return;
                    if (result.isConfirmed) {
                        CodeBlockly.utils.file.saveURL("blockly.png", image.dataurl);
                    } else {
                        CodeBlockly.utils.clipboard.copy([
                            new ClipboardItem({
                                [image.blob.type]: image.blob,
                            }),
                        ]).then(value => {
                            if (value) CodeBlockly.dialog.fire("复制成功", "", "success")
                            else CodeBlockly.dialog.fire("复制失败", "", "error")
                        });
                    }
                });

                $(`<label><input id="block-image-dialog-input" type="checkbox"> 填充背景(白色)</label>
                `).appendTo(".swal2-html-container").find("input").on("input", function () {
                    exports.blockToImage(block, $(this).prop("checked")).then(v => {
                        image = v;
                        $(".swal2-image").attr("src", image.dataurl);
                    });
                });
            });
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
        id: 'blockImage',
        weight: 7,
    });

    // 导出模块
    CodeBlockly.workspace = exports;
});