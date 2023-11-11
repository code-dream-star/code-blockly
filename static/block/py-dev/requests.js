/**
 * requests标签
 * 2个
 * 文档×
 */

Blockly.Blocks['requests_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("GET请求：URL")
            .appendField(new Blockly.FieldTextInput("code-dream-star.github.io"), "URL");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.requests);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['requests_get'] = function (block) {
    var url = block.getFieldValue('URL');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};


Blockly.Blocks['requests_post'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("POST请求：URL")
            .appendField(new Blockly.FieldTextInput("code-dream-star.github.io"), "URL");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.requests);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['requests_post'] = function (block) {
    var text_url = block.getFieldValue('URL');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};