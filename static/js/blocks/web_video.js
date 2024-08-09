/**
 * 媒体(video)标签
 * 3个
 * 文档✓
 */

Blockly.Blocks["web_video_image"] = {
    init: function () {
        this.appendDummyInput().appendField("创建图片");
        this.appendDummyInput()
            .appendField("链接")
            .appendField(
                new Blockly.FieldTextInput(
                    "https://yuzifu.top/codemao.svg"
                ),
                "link"
            );
        this.appendDummyInput()
            .appendField("长")
            .appendField(new Blockly.FieldTextInput("100px"), "width")
            .appendField("宽")
            .appendField(new Blockly.FieldTextInput("100px"), "height");
        this.appendDummyInput()
            .appendField("图片描述:")
            .appendField(new Blockly.FieldTextInput("alt"), "alt");
        this.appendStatementInput("statements")
            .setCheck(null)
            .appendField("配置:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.video);
        this.setTooltip("建造一张图片，可以自行设定长宽");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["web_video_image"] = function (block) {
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

Blockly.Blocks["video"] = {
    init: function () {
        this.appendDummyInput().appendField("创建视频");
        this.appendDummyInput()
            .appendField("自动播放")
            .appendField(new Blockly.FieldCheckbox(true), "autoplay")
            .appendField("显示播放控件")
            .appendField(new Blockly.FieldCheckbox(true), "controls")
            .appendField("循环")
            .appendField(new Blockly.FieldCheckbox(false), "loop");
        this.appendStatementInput("video")
            .setCheck(null)
            .appendField("视频选项");
        this.appendStatementInput("attribute")
            .setCheck(null)
            .appendField("配置");
        this.appendDummyInput()
            .appendField("不支持文本提示")
            .appendField(
                new Blockly.FieldTextInput("您的浏览器不支持 video 标签。"),
                "text"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.video);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["video"] = function (block) {
    var video = Blockly.JavaScript.statementToCode(block, "video");
    var attribute = Blockly.JavaScript.statementToCode(block, "attribute");
    var text = Blockly.JavaScript.statementToCode(block, "text");
    var autoplay = block.getFieldValue('autoplay') == 'TRUE';
    var controls = block.getFieldValue('controls') == 'TRUE';
    var loop = block.getFieldValue('loop') == 'TRUE';
    var code = `<video ${attribute} ${autoplay ? "autoplay " : ""}${loop ? "loop " : ""}${controls ? "controls " : ""}>
    ${video}
    ${text}
  </video>\n`;
    return code;
};

Blockly.Blocks["web_video_source"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("创建视频，链接")
            .appendField(new Blockly.FieldTextInput("default"), "url")
            .appendField("类型")
            .appendField(
                new Blockly.FieldDropdown([
                    ["mp4", "video/mp4"],
                    ["ogg", "video/ogg"],
                    ["webm", "video/webm"],
                ]),
                "type"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.video);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["web_video_source"] = function (block) {
    var url = block.getFieldValue("url");
    var type = block.getFieldValue("type");
    var code = `<source src="${url}" type="${type}">\n`;
    return code;
};
