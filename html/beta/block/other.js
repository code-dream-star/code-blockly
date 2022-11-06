Blockly.Blocks['script'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("嵌入javascript代码");
      this.appendStatementInput("CODE")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.embed);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['script'] = function (block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    var code = `<script>\n${statements_code}</script>\n`;
    return code;
  };
  
  
  Blockly.Blocks['style'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("嵌入css代码");
      this.appendStatementInput("CODE")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.embed);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['style'] = function (block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
    var code = `<style>\n${statements_code}</style>\n`;
    return code;
  };