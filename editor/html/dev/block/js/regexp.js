/**
 * 正则表达式
 *
 */
Blockly.Blocks["regexp_create"] = {
     init: function () {
          this.appendValueInput("NAME")
               .setCheck("String")
               .appendField("创建一个正则表达式对象");
          this.setOutput(true, "RegExp");
          this.setColour(color.regexp);
          this.setTooltip("");
          this.setHelpUrl("");
     },
};

Blockly.JavaScript["regexp_create"] = function (block) {
     var value_name = Blockly.JavaScript.valueToCode(
          block,
          "NAME",
          Blockly.JavaScript.ORDER_ATOMIC
     );
     // TODO: Assemble JavaScript into code variable.
     var code = `new RegExp(${value_name})`;
     // TODO: Change ORDER_NONE to the correct strength.
     return [code, Blockly.JavaScript.ORDER_NONE];
};
