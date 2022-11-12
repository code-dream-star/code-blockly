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