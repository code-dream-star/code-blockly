/**
 * 正则表达式(regexp)标签
 * 4个
 * 文档×
 */


Blockly.Msg["regexp_create_1"] = "建造正则表达式";
Blockly.Msg["regexp_create_2"] = "全局匹配";
Blockly.Msg["regexp_create_3"] = "行模式";
Blockly.Msg["regexp_create_4"] = "多行";
Blockly.Msg["regexp_create_5"] = "单行";
Blockly.Msg["regexp_create_6"] = "无";
Blockly.Msg["regexp_create_7"] = "不区分大小写";
Blockly.Msg["regexp_create_8"] = "建造一个正则表达式";
Blockly.Msg["regexp_test_1"] = "判断是否相符";
Blockly.Msg["regexp_test_2"] = "正则表达式";
Blockly.Msg["regexp_test_3"] = "字符串";
Blockly.Msg["regexp_test_4"] = "判断一个字符串是否符合正则表达式的要求";
Blockly.Msg["regexp_execone"] = "查找单个字符";
Blockly.Msg["regexp_exec"] = "查找多个字符";
Blockly.Msg["regexp_exec_1"] = "正则表达式";
Blockly.Msg["regexp_exec_2"] = "字符串";
Blockly.Msg["regexp_execone_t"] = "使用正则表达式模式对字符串执行搜索，并返回单个包含搜索结果。";
Blockly.Msg["regexp_exec_t"] = "使用正则表达式模式对字符串执行搜索，并返回所有包含搜索结果的数组。";

Blockly.Blocks['regexp_create'] = {
     init: function () {
          this.appendValueInput("text")
               .setCheck("String")
               .appendField(Blockly.Msg["regexp_create_1"]);
          this.appendDummyInput()
               .appendField(Blockly.Msg["regexp_create_2"])
               .appendField(new Blockly.FieldCheckbox("TRUE"), "g")
               .appendField(Blockly.Msg["regexp_create_3"])
               .appendField(new Blockly.FieldDropdown([
                    [Blockly.Msg["regexp_create_4"], "m"],
                    [Blockly.Msg["regexp_create_5"], "s"],
                    [Blockly.Msg["regexp_create_6"], ""]
               ]), "y");
          this.appendDummyInput()
               .appendField(Blockly.Msg["regexp_create_7"])
               .appendField(new Blockly.FieldCheckbox("FALSE"), "i");
          this.setInputsInline(false);
          this.setOutput(true, null);
          this.setColour(color.regexp);
          this.setTooltip(Blockly.Msg["regexp_create_8"]);
          this.setHelpUrl("");
     }
};
Blockly.JavaScript['regexp_create'] = function (block) {
     var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
     var checkbox_g = block.getFieldValue('g') == 'TRUE';
     var dropdown_y = block.getFieldValue('y');
     var checkbox_i = block.getFieldValue('i') == 'TRUE';
     var code = `new RegExp(${value_text || `"(?:)"`}, "${checkbox_g ? "g" : ""}${checkbox_i ? "i" : ""}${dropdown_y}")`;
     return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['regexp_test'] = {
     init: function () {
          this.appendDummyInput()
               .appendField(Blockly.Msg["regexp_test_1"]);
          this.appendValueInput("text")
               .setCheck("RegExp")
               .appendField(Blockly.Msg["regexp_test_2"]);
          this.appendValueInput("st")
               .setCheck("String")
               .appendField(Blockly.Msg["regexp_test_3"]);
          this.setInputsInline(true);
          this.setOutput(true, "Boolean");
          this.setColour(color.regexp);
          this.setTooltip(Blockly.Msg["regexp_test_4"]);
          this.setHelpUrl("");
     }
};

Blockly.JavaScript['regexp_test'] = function (block) {
     var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
     var value_st = Blockly.JavaScript.valueToCode(block, 'st', Blockly.JavaScript.ORDER_ATOMIC);
     var code = `${value_text || `/(?:)/`}.test(${value_st})`;
     return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['regexp_execone'] = {
     init: function () {
          this.appendDummyInput()
               .appendField(Blockly.Msg["regexp_execone"]);
          this.appendValueInput("text")
               .setCheck("RegExp")
               .appendField(Blockly.Msg["regexp_exec_1"]);
          this.appendValueInput("st")
               .setCheck("String")
               .appendField(Blockly.Msg["regexp_exec_2"]);
          this.setInputsInline(true);
          this.setOutput(true, "String");
          this.setColour(color.regexp);
          this.setTooltip(Blockly.Msg["regexp_execone_t"]);
          this.setHelpUrl("");
     }
};
Blockly.JavaScript['regexp_execone'] = function (block) {
     var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
     var value_st = Blockly.JavaScript.valueToCode(block, 'st', Blockly.JavaScript.ORDER_ATOMIC);
     var code = `(${value_text || `/(?:)/`}.exec(${value_st}) || [null, ""])[1] || ""`;
     return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['regexp_exec'] = {
     init: function () {
          this.appendDummyInput()
               .appendField(Blockly.Msg["regexp_exec"]);
          this.appendValueInput("text")
               .setCheck("RegExp")
               .appendField(Blockly.Msg["regexp_exec_1"]);
          this.appendValueInput("st")
               .setCheck("String")
               .appendField(Blockly.Msg["regexp_exec_2"]);
          this.setInputsInline(true);
          this.setOutput(true, "Array");
          this.setColour(color.regexp);
          this.setTooltip(Blockly.Msg["regexp_exec_t"]);
          this.setHelpUrl("");
     }
};

Blockly.JavaScript['regexp_exec'] = function (block) {
     var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
     var value_st = Blockly.JavaScript.valueToCode(block, 'st', Blockly.JavaScript.ORDER_ATOMIC);
     var code = `(${value_text || `/(?:)/`}.exec(${value_st}) || []).slice(1)`;
     return [code, Blockly.JavaScript.ORDER_NONE];
};