// 积木颜色
const color = {
  head: "#51b6d6",
  other: "#97E0FF",
  form: "#a099fb",
  //-----
  js_console: "#e68a4f",
  js_number:"#feae8a",
  js_var:"#ffbb55",
  //-----
  css: "#0053fc",
  image: "#9933ff",
  text: "#ef9b43",
  template: "#19c6f5",
  构造: "#6DACFF",
};
Object.assign(window, { color });
Blockly.BlockSvg.START_HAT = true;


// 构造
Blockly.Blocks["define_web_pages"] = {
  init: function () {
    this.appendDummyInput().appendField("定义网页");
    this.appendStatementInput("blocks").setCheck(null);
    this.setNextStatement(true, null);
    this.setColour(color.构造);
    this.setTooltip("头部配置");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["define_web_pages"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "blocks");
  var code = `<!DOCTYPE html>\n<html>\n${statements_name}\n</html>`;
  return code;
};


Blockly.Blocks["define_web_pages_head"] = {
  init: function () {
    this.appendDummyInput().appendField("头部配置");
    this.appendStatementInput("blocks").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.构造);
    this.setTooltip("头部配置");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["define_web_pages_head"] = function (block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, "blocks");
  var code = `<head>\n${statements_blocks}</head>\n`;
  return code;
};


Blockly.Blocks["define_web_pages_body"] = {
  init: function () {
    this.appendDummyInput().appendField("身体配置");
    this.appendStatementInput("blocks").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.构造);
    this.setTooltip("身体配置");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["define_web_pages_body"] = function (block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, "blocks");
  var code = `<body>\n${statements_blocks}</body>`;
  return code;
};



// head
Blockly.Blocks["head_title"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("设置网页标题为")
      .appendField(new Blockly.FieldTextInput("Document"), "title");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.head);
    this.setTooltip("可以设置网页顶部标题");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["head_title"] = function (block) {
  var text_title = block.getFieldValue("title");
  var code = `<title>${text_title}</title>\n`;
  return code;
};


Blockly.Blocks["head_charset"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("使用字符编码")
      .appendField(new Blockly.FieldTextInput("utf-8"), "CODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.head);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["head_charset"] = function (block) {
  var text_code = block.getFieldValue("CODE");
  var code = `<meta charset="${text_code}">\n`;
  return code;
};


Blockly.Blocks["head_link"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("引入")
      .appendField(
        new Blockly.FieldDropdown([
          ["顶部图标", "icon"],
          ["css配置", "css"],
          ["javascript脚本", "js"],
        ]),
        "LINK_TYPE"
      )
      .appendField("链接")
      .appendField(
        new Blockly.FieldTextInput("https://yuzifu.top/codemao.svg"),
        "LINK"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.head);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["head_link"] = function (block) {
  var dropdown_link_type = block.getFieldValue("LINK_TYPE");
  var text_link = block.getFieldValue("LINK");
  if (dropdown_link_type == "icon") {
    var code = `<link rel="shortcut icon" href="${text_link}" type="image/x-icon" />`;
  } else if (dropdown_link_type == "css") {
    var code = `<link rel="stylesheet" href="${text_link}" type="text/css">`;
  } else {
    var code = `<script src="${text_link}"></script>`;
  }
  return code + "\n";
};



// 文本
Blockly.Blocks["body_p"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("创建段落文本  ")
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("id"), "ID");
    this.appendDummyInput()
      .appendField("内容:")
      .appendField(new Blockly.FieldTextInput("内容"), "content");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.text);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["body_p"] = function (block) {
  var text_id = block.getFieldValue("ID");
  var text_content = block.getFieldValue("content");
  var statements_name = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `<p id="${text_id}">${text_content}</p>\n`;
  return code;
};


Blockly.Blocks["body_title"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("创建")
      .appendField(
        new Blockly.FieldDropdown([
          ["一号", "1"],
          ["二号", "2"],
          ["三号", "3"],
          ["四号", "4"],
          ["五号", "5"],
          ["六号", "6"],
        ]),
        "title_desc"
      )
      .appendField("标题")
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("id"), "ID")
      .appendField("内容:")
      .appendField(new Blockly.FieldTextInput("内容"), "content");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.text);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["body_title"] = function (block) {
  var text_id = block.getFieldValue("ID");
  var dropdown_title_desc = block.getFieldValue("title_desc");
  var text_title_more = block.getFieldValue("content");
  var statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `<h${dropdown_title_desc} id="${text_id}" style="${statements}">${text_title_more}</h${dropdown_title_desc}>\n`;
  return code;
};


Blockly.Blocks["body_a"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("创建超链接文本")
      .appendField(new Blockly.FieldTextInput("GitHub"), "content")
      .appendField("  链接")
      .appendField(
        new Blockly.FieldTextInput("https://github.com"),
        "link"
      );
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("id"), "ID")
      .appendField("内容:")
      .appendField(new Blockly.FieldTextInput("内容"), "content");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.text);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["body_a"] = function (block) {
  var text_id = block.getFieldValue("ID");
  var text_content = block.getFieldValue("content");
  var text_link = block.getFieldValue("link");
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `<a href="${text_link}" id="${text_id}">${text_content}</a>\n`;
  return code;
};


Blockly.Blocks["video_image"] = {
  init: function () {
    this.appendDummyInput().appendField("创建图片");
    this.appendDummyInput()
      .appendField("链接")
      .appendField(
        new Blockly.FieldTextInput("https://yuzifu.top/codemao.svg"),
        "link"
      );
    this.appendDummyInput()
      .appendField("长")
      .appendField(new Blockly.FieldTextInput("100"), "width")
      .appendField("宽")
      .appendField(new Blockly.FieldTextInput("100"), "height");
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("id"), "ID")
      .appendField("图片描述:")
      .appendField(new Blockly.FieldTextInput("alt"), "alt");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.image);
    this.setTooltip("建造一张图片，可以自行设定长宽");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["video_image"] = function (block) {
  var alt = block.getFieldValue("alt");
  var text_id = block.getFieldValue("ID");
  var text_link = block.getFieldValue("link");
  var width = block.getFieldValue("width");
  var height = block.getFieldValue("height");
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `<img src="${text_link}" alt="${alt}" width="${width}" height="${height}" id="${text_id}">\n`;
  return code;
};


Blockly.Blocks["body_br"] = {
  init: function () {
    this.appendDummyInput().appendField("换行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.text);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["body_br"] = function (block) {
  var code = "<br>\n";
  return code;
};


Blockly.Blocks["body_annotation"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("注释")
      .appendField(
        new Blockly.FieldTextInput("这只是一个注释"),
        "annotation"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.text);
    this.setTooltip("这只是一个注释");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["body_annotation"] = function (block) {
  var text_annotation = block.getFieldValue("annotation");
  var code = `<!--${text_annotation}-->\n`;
  return code;
};



//form表单
Blockly.Blocks["create_a_form"] = {
  init: function () {
    this.appendDummyInput().appendField("创建表单");
    this.appendStatementInput("form-content")
      .setCheck(null)
      .appendField("表单内容:");
    this.appendStatementInput("attribute")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.form);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["create_a_form"] = function (block) {
  var statements_form_content = Blockly.JavaScript.statementToCode(
    block,
    "form-content"
  );
  var statements_attribute = Blockly.JavaScript.statementToCode(
    block,
    "attribute"
  );
  var code = `<form>\n${statements_form_content}\n</form>\n`;
  return code;
};


Blockly.Blocks["form_submit_button"] = {
  init: function () {
    this.appendDummyInput().appendField("创建提交按钮");
    this.appendDummyInput()
      .appendField("按钮名称")
      .appendField(
        new Blockly.FieldTextInput("Submit"),
        "submit_button_name"
      )
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.form);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["form_submit_button"] = function (block) {
  var text_text = block.getFieldValue("submit_button_name");
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `<input type="submit" value="${text_text}">\n`;
  return code;
};


Blockly.Blocks["form_radio_button"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[表单功能] 创建单选按钮")
    this.appendDummyInput()
      .appendField("选项分类")
      .appendField(new Blockly.FieldTextInput("choose"), "type")
      .appendField("选项内容")
      .appendField(new Blockly.FieldTextInput("Code"), "text")
    this.appendDummyInput()
      .appendField("选项返回值")
      .appendField(new Blockly.FieldTextInput("abc"), "value");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.form);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["form_radio_button"] = function (block) {
  var text = block.getFieldValue("text");
  var type = block.getFieldValue("type");
  var value = block.getFieldValue("value");
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `<input type="radio" name="${type}" value="${value}">${text}<br>\n`;
  return code;
};


Blockly.Blocks["form_check_box"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[表单功能] 创建复选框")
    this.appendDummyInput()
      .appendField("选项分类")
      .appendField(new Blockly.FieldTextInput("choose"), "type")
      .appendField("选项内容")
      .appendField(new Blockly.FieldTextInput("Code"), "text")
    this.appendDummyInput()
      .appendField("选项返回值")
      .appendField(new Blockly.FieldTextInput("abc"), "value");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.form);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["form_check_box"] = function (block) {
  var text = block.getFieldValue("text");
  var type = block.getFieldValue("type");
  var value = block.getFieldValue("value");
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `<input type="checkbox" name="${type}" value="${value}">${text}<br>\n`;
  return code;
};


Blockly.Blocks["form_password_box"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[表单功能] 创建密码框 ")
      .appendField("内容")
      .appendField(new Blockly.FieldTextInput("default"), "text");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.form);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["form_password_box"] = function (block) {
  var text = block.getFieldValue("text");
  var id = block.getFieldValue("id");
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `${text}<input type="password" id="${id}">`;
  return code;
};


Blockly.Blocks["form_text_box"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[表单功能] 创建文本框 ")
      .appendField("内容")
      .appendField(new Blockly.FieldTextInput("default"), "text");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.form);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["form_text_box"] = function (block) {
  var text_text = block.getFieldValue("text");
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = "...;\n";
  return code;
};


Blockly.Blocks["form_bounding_box"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[表单功能] 创建表单外框")
      .appendField("标题")
      .appendField(new Blockly.FieldTextInput("default"), "title");
    this.appendStatementInput("form_text")
      .setCheck(null)
      .appendField("表单内容:");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.form);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["form_bounding_box"] = function (block) {
  var text_title = block.getFieldValue("title");
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var form_text = Blockly.JavaScript.statementToCode(
    block,
    "form_text"
  );
  var code = `<fieldset>\n<legend>${text_title}</legend>\n${form_text}\n</fieldset>`;
  return code;
};

// Blockly.Blocks["form_drop_down_list"] = {
//   init: function () {
//     this.appendDummyInput().appendField("[表单功能]  创建下拉选项列表");
//     this.appendStatementInput(" list items")
//       .setCheck(null)
//       .appendField("列表项:");
//     this.appendStatementInput("statements")
//       .setCheck(null)
//       .appendField("配置:");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(color.form);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// Blockly.JavaScript["form_drop_down_list"] = function (block) {
//   var statements__list_items = Blockly.JavaScript.statementToCode(
//     block,
//     " list items"
//   );
//   var statements_statements = Blockly.JavaScript.statementToCode(
//     block,
//     "statements"
//   );
//   var code = "...;\n";
//   return code;
// };



//other
Blockly.Blocks['script'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("嵌入javascript代码");
    this.appendStatementInput("CODE")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.other);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['script'] = function (block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  var code = `<script>\n${statements_code}</script>\n`;
  return code;
};


Blockly.Blocks['style'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("嵌入css代码");
    this.appendStatementInput("CODE")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.other);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['style'] = function (block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  var code = `<style>\n${statements_code}</style>\n`;
  return code;
};



//js console
Blockly.Blocks['js_console_clear'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("清除控制台信息");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.js_console);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['js_console_clear'] = function (block) {
  var code = `console.clear();\n`;
  return code;
};


Blockly.Blocks['js_console_log'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("控制台输出")
      .appendField(new Blockly.FieldTextInput("开始运行"), "log");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.js_console);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['js_console_log'] = function (block) {
  var text_log = block.getFieldValue('log');
  var code = `console.log('${text_log}');\n`;
  return code;
};


Blockly.Blocks['js_console_warn'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("控制台警告")
      .appendField(new Blockly.FieldTextInput("警告！"), "warn");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.js_console);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['js_console_warn'] = function (block) {
  var text_warn = block.getFieldValue('warn');
  var code = `console.warn('${text_warn}');\n`;
  return code;
};


Blockly.Blocks['js_console_error'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("控制台报错")
      .appendField(new Blockly.FieldTextInput("报错！错误！停止！"), "error");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.js_console);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['js_console_error'] = function (block) {
  var text_error = block.getFieldValue('error');
  var code = `console.error('${text_error}');\n`;
  return code;
};



//js number
Blockly.Blocks['js_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "num");
    this.setOutput(true, "Number");
    this.setColour(color.js_number);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['js_num'] = function(block) {
  var number_num = block.getFieldValue('num');
  var code = `${number_num}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['js_calculation'] = {
  init: function() {
    this.appendValueInput("former")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["×","*"], ["÷","/"]]), "calculation");
    this.appendValueInput("latter")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(color.js_number);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['js_calculation'] = function(block) {
  var value_former = Blockly.JavaScript.valueToCode(block, 'former', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_calculation = block.getFieldValue('calculation');
  var value_latter = Blockly.JavaScript.valueToCode(block, 'latter', Blockly.JavaScript.ORDER_ATOMIC);
  if(dropdown_calculation == "×"){
    dropdown_calculation = "*"
  }
  if(dropdown_calculation == "÷"){
    dropdown_calculation = "/"
  }
  var code = `${value_former} ${dropdown_calculation} ${value_latter}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['js_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("在");
    this.appendValueInput("former")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("到");
    this.appendValueInput("latter")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("间随机整数");
    this.setOutput(true, null);
    this.setColour(color.js_number);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['js_random'] = function(block) {
  var value_former = Blockly.JavaScript.valueToCode(block, 'former', Blockly.JavaScript.ORDER_ATOMIC);
  var value_latter = Blockly.JavaScript.valueToCode(block, 'latter', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `parseInt(Math.random()*(${value_latter}-${value_former}+1)+${value_former})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['js_random_real'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("在");
    this.appendValueInput("former")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("到");
    this.appendValueInput("latter")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("间随机小数（浮点数）");
    this.setOutput(true, null);
    this.setColour(color.js_number);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['js_random_real'] = function(block) {
  var value_former = Blockly.JavaScript.valueToCode(block, 'former', Blockly.JavaScript.ORDER_ATOMIC);
  var value_latter = Blockly.JavaScript.valueToCode(block, 'latter', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `Math.random()*(${value_latter}-${value_former})+${value_former}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};