/**
 * 嵌入(embed)标签
 * 3个
 * 文档✓
 */

Blockly.Blocks["script"] = {
    init: function () {
        this.appendDummyInput().appendField("嵌入javascript代码");
        this.appendStatementInput("CODE").setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.embed);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["script"] = function (block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, "CODE");
    var code = `<script>\n${statements_code}</script>\n`;
    return code;
};

Blockly.Blocks["style"] = {
    init: function () {
        this.appendDummyInput().appendField("嵌入css样式");
        this.appendStatementInput("CODE").setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.embed);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["style"] = function (block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, "CODE");
    var code = `<style>\n${statements_code}</style>\n`;
    return code;
};


Blockly.Blocks['embed_css'] = {
    init: function () {
        this.appendStatementInput("style")
            .setCheck(null)
            .appendField("嵌入内部样式");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.embed);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['embed_css'] = function (block) {
    var statements = Blockly.JavaScript.statementToCode(block, 'style');
    var code = `style="${statements}" `;
    return code;
};

Blockly.Blocks["iframe"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("嵌入网页 链接：")
            .appendField(
                new Blockly.FieldTextInput("https://code-dream-star.github.io"),
                "url"
            );
        this.appendDummyInput()
            .appendField("长")
            .appendField(new Blockly.FieldTextInput("200px"), "width")
            .appendField("宽")
            .appendField(new Blockly.FieldTextInput("300px"), "height");
        this.appendStatementInput("statements")
            .setCheck(null)
            .appendField("配置：");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.embed);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};


Blockly.JavaScript["iframe"] = function (block) {
    var url = block.getFieldValue("url");
    var w = block.getFieldValue("width");
    var h = block.getFieldValue("height");
    var statements = Blockly.JavaScript.statementToCode(block, "statements");
    var code = `<iframe src="${url}" width="${w}" height="${h}"${statements}></iframe>`;
    return code;
};