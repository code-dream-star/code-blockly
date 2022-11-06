// 文本
Blockly.Blocks["body_p"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("创建段落文本  ")
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField("内容:")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.text);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["body_p"] = function (block) {
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var text_content = Blockly.JavaScript.statementToCode(
    block,
    "content"
  );
  var code = `<p${statements_statements}>\n${text_content}</p>\n`;
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
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField("内容:");
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
  var text_title_more = Blockly.JavaScript.statementToCode(
    block,
    "content"
  );
  var statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `<h${dropdown_title_desc} ${statements}>\n${text_title_more}</h${dropdown_title_desc}>\n`;
  return code;
};


Blockly.Blocks["body_a"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("创建超链接文本")
      .appendField("  链接")
      .appendField(
        new Blockly.FieldTextInput("https://github.com"),
        "link"
      );
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("配置:");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField("内容:")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.text);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["body_a"] = function (block) {
  var text_content = Blockly.JavaScript.statementToCode(
    block,
    "content"
  );;
  var text_link = block.getFieldValue("link");
  var statements_statements = Blockly.JavaScript.statementToCode(
    block,
    "statements"
  );
  var code = `<a href="${text_link}"${statements_statements}>\n${text_content}</a>\n`;
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

Blockly.Blocks['body_chuntext'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("纯文本")
      .appendField(new Blockly.FieldTextInput("text"), "text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color.text);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.JavaScript['body_chuntext'] = function (block) {
  var text_text = block.getFieldValue('text');
  return text_text;
};