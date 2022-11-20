Blockly.Blocks['body_id'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("设置ID为：")
          .appendField(new Blockly.FieldTextInput("ID"), "ID");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.attribute);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['body_id'] = function(block) {
    var text_id = block.getFieldValue('ID');
    var code = ` id="${text_id}"`;
    return code;
  };


  Blockly.Blocks['body_width'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("设置宽度为：")
          .appendField(new Blockly.FieldTextInput("0"), "num");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.attribute);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['body_width'] = function(block) {
    var text_num = block.getFieldValue('num');
    var code = ` width="${text_num}"`;
    return code;
  };


  Blockly.Blocks['body_height'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("设置高度为：")
          .appendField(new Blockly.FieldTextInput("0"), "num");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.attribute);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['body_height'] = function(block) {
    var text_num = block.getFieldValue('num');
    var code = ` height="${text_num}"`;
    return code;
  };