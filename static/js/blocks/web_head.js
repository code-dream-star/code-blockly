/**
 * 头部(head)标签
 * 6个
 * 文档×
 */

Blockly.Blocks["web_head_title"] = {
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

Blockly.JavaScript["web_head_title"] = function (block) {
    var text_title = block.getFieldValue("title");
    var code = `<title>${text_title}</title>\n`;
    return code;
};

Blockly.Blocks["web_head_charset"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("使用字符编码")
            .appendField(
                new Blockly.FieldDropdown([
                    ["UTF-8（默认）", "utf-8"],
                    ["GBK（中文简体）", "GBK"],
                    ["Big5（中文繁体）", "Big5"],
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

Blockly.JavaScript["web_head_charset"] = function (block) {
    var text_code = block.getFieldValue("CODE");
    var code = `<meta charset="${text_code}">\n`;
    return code;
};

Blockly.Blocks["web_head_link"] = {
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

Blockly.JavaScript["web_head_link"] = function (block) {
    var D = block.getFieldValue("LINK_TYPE");
    var T = block.getFieldValue("LINK");
    var code = `<${D == "js" ? "script" : `link ref="${D == "css" ? "stylesheet" : "shortcut icon"}"`} ${D == "js" ? "src" : "href"}="${T}"></${D == "js" ? "script" : `link`}>`
    return code + "\n";
};


Blockly.Blocks['web_head_keywords'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置网站关键词")
            .appendField(new Blockly.FieldTextInput("default"), "keywords");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.head);
        this.setTooltip("用,隔开");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['web_head_keywords'] = function (block) {
    var keywords = block.getFieldValue('keywords');
    var code = `<meta name="Keywords" content="${keywords}"/>\n`;
    return code;
};


Blockly.Blocks['web_head_description'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置网站简介")
            .appendField(new Blockly.FieldTextInput("这是一个网页"), "description");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.head);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['web_head_description'] = function (block) {
    var description = block.getFieldValue('description');
    var code = `<meta name="description" content="${description}">\n`;
    return code;
};


Blockly.Blocks['web_head_author'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置网页作者为")
            .appendField(new Blockly.FieldTextInput("default"), "author");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.head);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['web_head_author'] = function (block) {
    var author = block.getFieldValue('author');
    var code = `<meta name="author" content="${author}">\n`;
    return code;
};