/**
 * 层叠样式表(css)外边距标签
 * 1个(待补充)
 * 文档×
 */

Blockly.Blocks["css_Boxlog"] = {
     init: function () {
          this.appendValueInput("input")
               .appendField("设置")
               .appendField(
                    new Blockly.FieldDropdown([
                         ["外", "margin"],
                         ["内", "padding"],
                    ]),
                    "Drop-down-menu"
               )
               .appendField("边距的")
               .appendField(
                    new Blockly.FieldDropdown([
                         ["上", "top"],
                         ["下", "bottom"],
                         ["左", "left"],
                         ["右", "right"],
                    ]),
                    "wwwee"
               )
               .appendField("宽度为");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_Boxlog"] = function (block) {
     var dropdown_drop_down_menu = block.getFieldValue("Drop-down-menu");
     var dropdown_wwwee = block.getFieldValue("wwwee");
     var text_input = Blockly.JavaScript.valueToCode(
          block,
          "input",
          Blockly.JavaScript.ORDER_ATOMIC
     );
     var code = `${dropdown_drop_down_menu}-${dropdown_wwwee}: ${text_input};\n`;
     return code;
};
