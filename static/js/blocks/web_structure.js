/**
 * 构造(define)标签
 * 3个
 * 文档✓
 */

Blockly.Blocks["web_define_web_pages"] = {
    init: function () {
        this.appendDummyInput().appendField("定义网页");
        this.appendStatementInput("blocks").setCheck(null);
        this.setColour(color.structure);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.JavaScript["define_web_pages"] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, "blocks");
    var code = `<!DOCTYPE html>\n<html>\n${statements_name}\n</html>`;
    return code;
};


Blockly.Blocks["web_define_web_pages_head"] = {
    init: function () {
        this.appendDummyInput().appendField("头部框架");
        this.appendStatementInput("blocks").setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.structure);
        this.setTooltip("头部框架");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["web_define_web_pages_head"] = function (block) {
    var statements_blocks = Blockly.JavaScript.statementToCode(block, "blocks");
    var code = `<head>\n${statements_blocks}</head>\n`;
    return code;
};


Blockly.Blocks["web_define_web_pages_body"] = {
    init: function () {
        this.appendDummyInput().appendField("身体框架");
        this.appendStatementInput("blocks").setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.structure);
        this.setTooltip("身体框架");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["web_define_web_pages_body"] = function (block) {
    var statements_blocks = Blockly.JavaScript.statementToCode(block, "blocks");
    var code = `<body>\n${statements_blocks}</body>`;
    return code;
};


