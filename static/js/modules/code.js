CodeBlocklyLoader.onload(function () {
    const { sidebar, toolbar, dialog, utils: { clipboard } } = CodeBlockly;
    const code = Object.create(null);

    code.config = CodeBlocklyLoader.assign({
        header: "",
        "blocklyLanguage": "JavaScript",
        "highlightLanguage": "JavaScript"
    }, (CodeBlockly.config.code || {}));

    code.header = code.config.header
        .replaceAll("{{ origin }}", location.origin);

    code.generatingCode = function () {
        return code.header + Blockly[code.config.blocklyLanguage].workspaceToCode(CodeBlockly.workspace.core);
    }

    code.generatingViewHTML = function () {
        return hljs
            .highlight(
                code.generatingCode(),
                { language: code.config.highlightLanguage }
            )
            .value.split("\n")
            .join("<br>");
    }

    code.open = function () {
        sidebar.open();
        toolbar.setItemActive("toolbar-code", true);
        sidebar.switchPage("sidebar-code");
    }

    code.close = function () {
        sidebar.close();
        toolbar.setItemActive("toolbar-code", false);
    }

    code.getOpeningStatus = function () {
        return sidebar.status;
    }

    code.copyCode = function () {
        return clipboard.copyText(code.generatingCode());
    }

    let selfCloseing = false;
    CodeBlockly.on("workspace_change", function (event) {
        $("#code").html(code.generatingViewHTML());

        // 积木盒开/关 时，自动隐藏代码框
        if (event.type == "toolbox_item_select" && !!CodeBlockly.settings.get("code-self-closing")) {
            if (event.newItem != null && event.oldItem == null) {
                if (!selfCloseing) if (code.getOpeningStatus()) selfCloseing = true;
                code.close();
            } else if (event.newItem == null && event.oldItem != null) {
                if (!selfCloseing) return;
                code.open();
            }
        }
    });

    CodeBlockly.on("toolbar_click", function (id) {
        if (id == "toolbar-code") {
            selfCloseing = false;
            if (code.getOpeningStatus()) code.close();
            else code.open();
        }
    });

    $("#sidebar-code .code-copy").on("click", function () {
        code.copyCode().then((value) => {
            if (value) dialog.fire("复制成功", "", "success")
            else dialog.fire("复制失败", "请手动复制", "error")
        })
    });

    // 导出模块
    CodeBlockly.code = code;
});