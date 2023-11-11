/**
 * 文本(text)标签
 * 6个
 * 文档✓
 */

Blockly.Blocks["text_p"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("创建段落文本  ")
        this.appendStatementInput("statements")
            .setCheck(null)
            .appendField("配置:");
        this.appendStatementInput("content")
            .setCheck(null)
            .appendField("内容:")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.text);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["text_p"] = function (block) {
    var statements = Blockly.JavaScript.statementToCode(
        block,
        "statements"
    );
    var text_content = Blockly.JavaScript.statementToCode(
        block,
        "content"
    );
    var code = `<p${statements}>\n${text_content}</p>\n`;
    return code;
};


Blockly.Blocks["text_title"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("创建")
            .appendField(
                new Blockly.FieldDropdown([
                    ["一级", "1"],
                    ["二级", "2"],
                    ["三级", "3"],
                    ["四级", "4"],
                    ["五级", "5"],
                    ["六级", "6"],
                ]),
                "title_desc"
            )
            .appendField("标题")
        this.appendStatementInput("statements")
            .setCheck(null)
            .appendField("配置:");
        this.appendStatementInput("content")
            .setCheck(null)
            .appendField("内容:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.text);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["text_title"] = function (block) {
    var text_id = block.getFieldValue("ID");
    var dropdown_title_desc = block.getFieldValue("title_desc");
    var text_title_more = Blockly.JavaScript.statementToCode(
        block,
        "content"
    );
    var statements = Blockly.JavaScript.statementToCode(
        block,
        "statements"
    );
    var code = `<h${dropdown_title_desc}${statements}>\n${text_title_more}</h${dropdown_title_desc}>\n`;
    return code;
};


Blockly.Blocks["text_a"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("创建超链接文本")
            .appendField("链接")
            .appendField(
                new Blockly.FieldTextInput("https://code-dream-star.github.io"),
                "link"
            );
        this.appendStatementInput("statements")
            .setCheck(null)
            .appendField("配置:");
        this.appendStatementInput("content")
            .setCheck(null)
            .appendField("内容:")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.text);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["text_a"] = function (block) {
    var text_content = Blockly.JavaScript.statementToCode(
        block,
        "content"
    );;
    var text_link = block.getFieldValue("link");
    var statements = Blockly.JavaScript.statementToCode(
        block,
        "statements"
    );
    var code = `<a href="${text_link}"${statements}>\n${text_content}</a>\n`;
    return code;
};


Blockly.Blocks["text_br"] = {
    init: function () {
        this.appendDummyInput().appendField("换行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.text);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["text_br"] = function (block) {
    var code = "<br>\n";
    return code;
};


Blockly.Blocks["text_annotation"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("注释")
            .appendField(
                new Blockly.FieldTextInput("这只是一个注释"),
                "annotation"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.text);
        this.setTooltip("这只是一个注释");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["text_annotation"] = function (block) {
    var text_annotation = block.getFieldValue("annotation");
    var code = `<!-- ${text_annotation} -->\n`;
    return code;
};

Blockly.Blocks['text_chuntext'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("纯文本")
            .appendField(new Blockly.FieldTextInput("text"), "text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.text);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['text_chuntext'] = function (block) {
    var text_text = block.getFieldValue('text');
    return text_text + "\n";
};



Blockly.Blocks['text_hr'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("分割线");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.text);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['text_hr'] = function (block) {
    var code = '<hr>\n';
    return code;
};