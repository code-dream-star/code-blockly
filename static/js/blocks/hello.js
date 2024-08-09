Blockly.Blocks['hello_code_blockly'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Hello! Code Blockly!");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#3662EC");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['hello_code_blockly'] = function (block) {
    var code = `console.log('Hello, Code Blockly!');\n`;
    return code;
};