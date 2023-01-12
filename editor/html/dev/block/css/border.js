/**
 * 层叠样式表(css)边框标签
 * 1个(待补充)
 * 文档×
 */

Blockly.Blocks["css_Border_Color"] = {
     init: function () {
          this.appendValueInput("value")
               .setCheck(null)
               .appendField("设置边框颜色");
          this.setInputsInline(false);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_Border_Color"] = function (block) {
     var value_value = Blockly.JavaScript.valueToCode(
          block,
          "value",
          Blockly.JavaScript.ORDER_ATOMIC
     );
     var code = `border-color: ${value_value};\n`;
     return code;
};

Blockly.Blocks["css_Rounded_Corners"] = {
     init: function () {
          this.appendValueInput("value")
               .setCheck(null)
               .appendField("设置边框圆角");
          this.setInputsInline(false);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_Rounded_Corners"] = function (block) {
     var value_value = Blockly.JavaScript.valueToCode(
          block,
          "value",
          Blockly.JavaScript.ORDER_ATOMIC
     );
     var code = `border-radius: ${value_value};\n`;
     return code;
};

Blockly.Blocks["css_Height_Frame"] = {
     init: function () {
          this.appendValueInput("input")
               .setCheck(null)
               .appendField("设置边框大小");
          this.setInputsInline(false);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_Height_Frame"] = function (block) {
     var text_input = Blockly.JavaScript.valueToCode(
          block,
          "input",
          Blockly.JavaScript.ORDER_ATOMIC
     );
     var code = `border-width: ${text_input};\n`;
     return code;
};

Blockly.Blocks["css_Border_Style"] = {
     init: function () {
          this.appendDummyInput()
               .appendField("设置边框样式")
               .appendField(
                    new Blockly.FieldDropdown([
                         ["无边框", "none"],
                         ["点线边框", "dotted"],
                         ["实线边框", "solid"],
                         ["两个边框", "double"],
                         ["凹槽边框", "groove"],
                         ["垄状边框", "ridge"],
                         ["嵌入边框", "inset"],
                         ["外凸边框", "outset"],
                         ["隐藏边框", "hidden"],
                         ["混合边框", "mix"],
                    ]),
                    "Drop down menu"
               );
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_Border_Style"] = function (block) {
     var dropdown_drop_down_menu = block.getFieldValue("Drop down menu");
     var code = `border-style: ${dropdown_drop_down_menu};\n`;
     return code;
};
