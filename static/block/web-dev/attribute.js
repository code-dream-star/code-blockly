/**
 * 属性(attribute)标签
 * 3个
 * 文档✓
 */

Blockly.Blocks['attribute_id'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置ID为：")
            .appendField(new Blockly.FieldTextInput("ID"), "ID");
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour(color.attribute)
        this.setTooltip("")
        this.setHelpUrl("")
    }
};

Blockly.JavaScript['attribute_id'] = function (block) {
    var id = block.getFieldValue('ID');
    var code = ` id="${id}"`;
    return code;
};


Blockly.Blocks['attribute_class'] = {
    init: function () {
        this.appendStatementInput("statements")
            .appendField("添加CSS样式：")
            .setCheck(null)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour(color.attribute)
        this.setTooltip("")
        this.setHelpUrl("")
    }
};

Blockly.JavaScript['attribute_class'] = function (block) {
    var statements = block.getFieldValue('statements');
    var code = ` class="${statements}"`;
    return code;
};


Blockly.Blocks['attribute_css'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("CSS样式")
          .appendField(new Blockly.FieldTextInput("css"), "css");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.attribute);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['attribute_css'] = function(block) {
    var css = block.getFieldValue('css');
    var code = `${css} `;
    return code;
  };


Blockly.Blocks['attribute_width'] = {
    init: function () {
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

Blockly.JavaScript['attribute_width'] = function (block) {
    var text_num = block.getFieldValue('num');
    var unit = block.getFieldValue('unit');
    var code = ` width="${text_num}${unit}"`;
    return code;
};


Blockly.Blocks['attribute_height'] = {
    init: function () {
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

Blockly.JavaScript['attribute_height'] = function (block) {
    var text_num = block.getFieldValue('num');
    var unit = block.getFieldValue('unit');
    var code = ` height="${text_num}${unit}"`;
    return code;
};