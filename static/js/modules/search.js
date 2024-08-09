CodeBlocklyLoader.onload(function () {
    const search = Object.create(null);

    search._blocks = {};
    search._otherKeywords = { // 积木其他关键词
        "math_arithmetic": "加减乘除+-*/×÷算式数学运算",
        "math_constant": "圆周率无限",
    };

    search.init = function () {
        // 建造虚拟工作区
        var blocklyDiv = $("<div>").appendTo("body");
        var testWorkspace = Blockly.inject(blocklyDiv[0], {
            readonly: true
        });

        // 遍历工具箱所有类别
        var xml = $(CodeBlockly.toolboxConfig);
        for (let category_ of xml.children()) {
            let category = $(category_);
            let blocks = [];

            // 遍历类别中所有积木
            for (let block_ of category.children()) {
                let block = $(block_);
                let blockObj = {};

                // 如果是积木
                if (block.is("block")) {
                    // 根据 xml 建造积木，并获取积木类
                    let blockInfo = Blockly.Xml.domToBlock(block_, testWorkspace);

                    // 获取svg
                    let svgRoot = blockInfo.getSvgRoot();

                    // 获取积木中的所有文字
                    let keyworks = $(`<span>${svgRoot.outerHTML}</span>`).text();

                    // 把工具提示也加上去
                    let tooltip = "";
                    if (typeof blockInfo.tooltip == "function") tooltip = blockInfo.tooltip();
                    else tooltip = blockInfo.tooltip;
                    keyworks += tooltip;

                    // 添加其他信息
                    // keyworks += category.attr("name"); // 积木盒名称
                    keyworks += search._otherKeywords[blockInfo.type] || ""; // 积木其他关键词

                    // 处理关键词
                    keyworks = keyworks.replaceAll("▾", ""); // 去掉▾
                    keyworks = keyworks.toLocaleLowerCase(); // 转换为小写字母
                    // keyworks = (keyworks.match(/[a-zA-Z0-9\u4e00-\u9fa5]+/g) || []).join(""); // 去掉符号

                    if (blockObj.keyworks) blockObj.keyworks += keyworks;
                    else blockObj.keyworks = keyworks;

                    blockObj.type = blockInfo.type;
                    blockObj.info = blockInfo.toCopyData().saveInfo;

                    blocks.push(blockObj);
                }
            };

            search._blocks[category.attr("name")] = blocks;
        };

        // 加载完后，销毁工作区
        testWorkspace.dispose();
        blocklyDiv.remove();
    }

    search.searchContent = [];
    search.searchText = "";
    search.searchDiv = $(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"))
        .attr({
            transform: "translate(0, 0)",
            display: "block",
            style: "overflow: visible;",
            class: "toolbox-search",
            height: "60"
        });
    search.searchInput = $("<input type='search' placeholder='搜索积木'>").appendTo(search.searchDiv);

    search.update = function () {
        const workspace = CodeBlockly.workspace.core;
        const flyout = workspace.getToolbox().getFlyout();

        flyout.show([{
            kind: "LABEL",
            text: "　".repeat(16)
        }, {
            kind: "LABEL",
            text: ""
        }].concat(search.searchContent));

        search.searchDiv.insertBefore($(".blocklyFlyout>.blocklyWorkspace>.blocklyBlockCanvas>*").first()).show();
        $(".blocklyFlyout>.blocklyWorkspace>.blocklyBlockCanvas>.blocklyFlyoutLabel:lt(2)").hide();
        search.searchDiv.attr("width", flyout.getWidth())
    }

    search.searchInput.on("input", function () {
        search.searchText = search.searchInput.val().toLocaleLowerCase();
        search.searchContent = [];

        if (search.searchText) {
            for (let category in search._blocks) {
                let addLabel = false;
                for (let block of search._blocks[category]) {
                    if (block.keyworks.indexOf(search.searchText) > -1) {
                        if (!addLabel) {
                            search.searchContent.push({
                                kind: "LABEL",
                                text: category
                            });
                            addLabel = true;
                        }
                        search.searchContent.push({
                            kind: "BLOCK",
                            ...block.info
                        });
                    }
                }
            }
            if (!search.searchContent.length) {
                search.searchContent.push({
                    kind: "LABEL",
                    text: "没找到任何结果！"
                });
            }
        }

        search.update();
    });

    CodeBlockly.on("workspace_change", function (event) {
        if (event.type == "toolbox_item_select") {
            if (event.newItem === "搜索") {
                if (!Object.keys(search._blocks).length) search.init();
                search.update();
            } else {
                if (!(event.oldItem == "搜索" && event.newItem == null)) {
                    $(".blocklyFlyout>.blocklyWorkspace>.blocklyBlockCanvas").find(".toolbox-search").hide();
                }
            }
        }
    });


    // 导出模块
    CodeBlockly.search = search;
})