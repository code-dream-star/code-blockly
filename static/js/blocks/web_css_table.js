/**
 * 层叠样式表(css)表格标签
 * 3个(待补充)
 * 文档×
 */


Blockly.Blocks['web_css_table_border_fold'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("边框")
          .appendField(new Blockly.FieldDropdown([["折叠","fold"], ["不折叠","unfolding"]]), "Drop-down menu");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['web_css_table_border_fold'] = function(block) {
    var dropdown_drop_down_menu = block.getFieldValue('Drop-down menu');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.Blocks['web_css_table_border_fold'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("表格文字垂直对齐")
          .appendField(new Blockly.FieldDropdown([["顶部","top"], ["中间","middle"], ["底部","bottom"]]), "Drop-down menu");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['web_css_table_border_fold'] = function(block) {
    var dropdown_drop_down_menu = block.getFieldValue('Drop-down menu');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.Blocks['web_css_table_color'] = {
    init: function() {
      this.appendValueInput("input")
          .setCheck(null)
          .appendField("表格颜色");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['web_css_table_color'] = function(block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  