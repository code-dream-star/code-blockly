// head
Blockly.Blocks["head_title"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置网页标题为")
            .appendField(new Blockly.FieldTextInput("Document"), "title");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.head);
        this.setTooltip("可以设置网页顶部标题");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["head_title"] = function (block) {
    var text_title = block.getFieldValue("title");
    var code = `<title>${text_title}</title>\n`;
    return code;
};

Blockly.Blocks["head_charset"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("使用字符编码")
            .appendField(
                new Blockly.FieldDropdown([
                  ["UTF-8", "utf-8"],
                  ["中文简体", "GBK"],
                  ["中文繁体", "Big5"],
                ]),
                "CODE"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.head);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["head_charset"] = function (block) {
    var text_code = block.getFieldValue("CODE");
    var code = `<meta charset="${text_code}">\n`;
    return code;
};

Blockly.Blocks["head_link"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("引入")
            .appendField(
                new Blockly.FieldDropdown([
                    ["顶部图标", "icon"],
                    ["css配置", "css"],
                    ["javascript脚本", "js"],
                ]),
                "LINK_TYPE"
            )
            .appendField("链接")
            .appendField(
                new Blockly.FieldTextInput("https://yuzifu.top/codemao.svg"),
                "LINK"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.head);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["head_link"] = function (block) {
    var dropdown_link_type = block.getFieldValue("LINK_TYPE");
    var text_link = block.getFieldValue("LINK");
    if (dropdown_link_type == "icon") {
        var code = `<link rel="shortcut icon" href="${text_link}" />`;
    } else if (dropdown_link_type == "css") {
        var code = `<link rel="stylesheet" href="${text_link}" type="text/css" />`;
    } else {
        var code = `<script src="${text_link}"></script>`;
    }
    return code + "\n";
};
