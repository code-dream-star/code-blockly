/**
 * 属性(attribute)标签
 * 3个
 * 文档✓
 */

Blockly.Blocks['attribute_id'] = {
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

  Blockly.JavaScript['attribute_id'] = function(block) {
    let text_id = block.getFieldValue('ID');
    let code = ` id="${text_id}"`;
    return code;
  };


  Blockly.Blocks['attribute_width'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("设置宽度为：")
          .appendField(new Blockly.FieldTextInput("0"), "num")
          .appendField(
            new Blockly.FieldDropdown([
                ["px", "px"],
                ["mm", "mm"],
                ["in", "in"],
                ["cm", "cm"],
                ["pc", "pc"],
                ["pt", "pt"],
                ["em", "em"],
                ["ex", "ex"],
                ["ch", "ch"],
                ["rem", "rem"],
                ["vw", "vw"],
                ["vh", "vh"],
                ["vmin", "vmin"],
                ["vmax", "vmax"],
                ["%", "%"],
            ]),
            "unit"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.attribute);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['attribute_width'] = function(block) {
    let text_num = block.getFieldValue('num');
    let unit = block.getFieldValue('unit');
    let code = ` width="${text_num}${unit}"`;
    return code;
  };


  Blockly.Blocks['attribute_height'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("设置高度为：")
          .appendField(new Blockly.FieldTextInput("0"), "num")
          .appendField(
            new Blockly.FieldDropdown([
                ["px", "px"],
                ["mm", "mm"],
                ["in", "in"],
                ["cm", "cm"],
                ["pc", "pc"],
                ["pt", "pt"],
                ["em", "em"],
                ["ex", "ex"],
                ["ch", "ch"],
                ["rem", "rem"],
                ["vw", "vw"],
                ["vh", "vh"],
                ["vmin", "vmin"],
                ["vmax", "vmax"],
                ["%", "%"],
            ]),
            "unit"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.attribute);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['attribute_height'] = function(block) {
    let text_num = block.getFieldValue('num');
    let unit = block.getFieldValue('unit');
    let code = ` height="${text_num}${unit}"`;
    return code;
  };