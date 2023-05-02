/**
 * 层叠样式表(css)基础标签
 * 4个(已分类)
 * 文档×
 */
Blockly.Blocks["css_Create"] = {
     init: function () {
          this.appendDummyInput()
               .appendField("创建css样式：")
               .appendField(new Blockly.FieldTextInput("css"), "NAME");
          this.appendStatementInput("statements").setCheck(null);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_Create"] = function (block) {
     var text_name = block.getFieldValue("NAME");
     var statements = Blockly.JavaScript.statementToCode(block, "statements");
     var code = `.${text_name} {
    ${statements}
  }\n`;
     return code;
};

Blockly.Blocks["css_Color"] = {
     init: function () {
          this.appendDummyInput().appendField(
               new Blockly.FieldColour("#2ec7e7"),
               "color"
          );
          this.setOutput(true, '"RGB"');
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_Color"] = function (block) {
     var colour_color = block.getFieldValue("color");
     var code = `${colour_color}`;
     return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["css_Color_RGB"] = {
     init: function () {
          this.appendDummyInput()
               .appendField("R")
               .appendField(new Blockly.FieldTextInput("255"), "red");
          this.appendDummyInput()
               .appendField("G")
               .appendField(new Blockly.FieldTextInput("255"), "green");
          this.appendDummyInput()
               .appendField("B")
               .appendField(new Blockly.FieldTextInput("255"), "blue");
          this.setOutput(true, '"RGB"');
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_Color_RGB"] = function (block) {
     var red = block.getFieldValue("red");
     var green = block.getFieldValue("green");
     var blue = block.getFieldValue("blue");
     var code = `rgb(${red}, ${green}, ${blue})`;
     return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["css_Color_16"] = {
     init: function () {
          this.appendDummyInput()
               .appendField("16进制")
               .appendField(new Blockly.FieldTextInput("#22272e"), "color");
          this.setOutput(true, '"RGB"');
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
     onchange: function () {
          /**@type {string} */
          var color = this.getFieldValue("color");
          if(!color.startsWith("#")){
               color="#"+color;
          }
          const temp =color.slice(1);
          if(temp.length<3){
               color=color+"0".repeat(3-temp.length);
          }
          if(color.length==6||color.length==8){
               color=color+"0";
          }
          if(isNaN(Number(temp))){
               color="#000000";
          }
          this.setFieldValue(color,"color");
     },
};

Blockly.JavaScript["css_Color_16"] = function (block) {
     var color = block.getFieldValue("color");
     var code = `${color}`;
     return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["css_Unit"] = {
     init: function () {
          this.appendDummyInput()
               .appendField(new Blockly.FieldNumber(0), "NAME")
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
          this.setOutput(true, null);
          this.setColour(color.css);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_Unit"] = function (block) {
     var N = block.getFieldValue("NAME");
     var U = block.getFieldValue("unit");
     var code = N + U;
     return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["css_height"] = {
     init: function () {
          this.appendValueInput("NAME")
               .setCheck(null)
               .appendField("设置高度为:");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_height"] = function (block) {
     var value_name = Blockly.JavaScript.valueToCode(
          block,
          "NAME",
          Blockly.JavaScript.ORDER_ATOMIC
     );
     // TODO: Assemble JavaScript into code variable.
     var code = "...;\n";
     return code;
};

Blockly.Blocks["css_width"] = {
     init: function () {
          this.appendValueInput("NAME")
               .setCheck(null)
               .appendField("设置宽度为:");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["css_width"] = function (block) {
     var value_name = Blockly.JavaScript.valueToCode(
          block,
          "NAME",
          Blockly.JavaScript.ORDER_ATOMIC
     );
     // TODO: Assemble JavaScript into code variable.
     var code = "...;\n";
     return code;
};
