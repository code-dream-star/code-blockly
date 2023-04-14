//js console
Blockly.Blocks['js_console_clear'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("清除控制台信息");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.console);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['js_console_clear'] = function (block) {
    var code = `console.clear();\n`;
    return code;
  };
  
  
  Blockly.Blocks['js_console_log'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("控制台输出")
        .appendField(new Blockly.FieldTextInput("芜湖！程序跑起来啦！"), "log");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.console);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['js_console_log'] = function (block) {
    var text_log = block.getFieldValue('log');
    var code = `console.log('${text_log}');\n`;
    return code;
  };
  
  
  Blockly.Blocks['js_console_warn'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("控制台警告")
        .appendField(new Blockly.FieldTextInput("警告！"), "warn");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.console);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['js_console_warn'] = function (block) {
    var text_warn = block.getFieldValue('warn');
    var code = `console.warn('${text_warn}');\n`;
    return code;
  };
  
  
  Blockly.Blocks['js_console_error'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("控制台报错")
        .appendField(new Blockly.FieldTextInput("叮~您有一个新的bug"), "error");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.console);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['js_console_error'] = function (block) {
    var text_error = block.getFieldValue('error');
    var code = `console.error('${text_error}');\n`;
    return code;
  };