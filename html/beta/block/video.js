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
    var text_link = block.getFieldValue("link");
    var width = block.getFieldValue("width");
    var height = block.getFieldValue("height");
    var statements_statements = Blockly.JavaScript.statementToCode(
      block,
      "statements"
    );
    var code = `<img src="${text_link}" alt="${alt}" width="${width}" height="${height}" ${statements}>\n`;
    return code;
  };