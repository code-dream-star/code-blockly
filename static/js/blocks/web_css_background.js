/**
 * 层叠样式表(css)背景标签
 * 6个(待补充)
 * 文档×
 */

Blockly.Blocks["web_css_Background_Color"] = {
    init: function () {
        this.appendValueInput("COLOR")
            .setCheck('"RGB"')
            .appendField("设置背景颜色");
        this.setColour(color.css);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["web_css_Background_Color"] = function (block) {
    var color = Blockly.JavaScript.valueToCode(
        block,
        "COLOR",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `background-color: ${color};\n`;
    return code;
};

Blockly.Blocks["web_css_Background_Image"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置背景图片 URL")
            .appendField(new Blockly.FieldTextInput(""), "URL");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["web_css_Background_Image"] = function (block) {
    var url = block.getFieldValue("URL");
    var code = `background-image: url(${url});\n`;
    return code;
};

Blockly.Blocks["web_css_Background_Image_Style"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置背景图片")
            .appendField(
                new Blockly.FieldDropdown([
                    ["水平平铺和垂直平铺", "repeat"],
                    ["水平平铺", "repeat-x"],
                    ["垂直平铺", "repeat-y"],
                    ["图像不平铺", "no-repeat"],
                ]),
                "drop-down menu"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["web_css_Background_Image_Style"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var code = `background-repeat: ${dropdown_drop_down_menu};\n`;
    return code;
};


Blockly.Blocks['web_css_background_repetition'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置背景图片")
            .appendField(new Blockly.FieldDropdown([["重复", "repeat"], ["不重复", "non-repetition"]]), "Drop-down-menu");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['web_css_background_repetition'] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue('Drop-down-menu');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['background_starting_position'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置背景图片的起始位置")
            .appendField(new Blockly.FieldTextInput("default"), "input");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['background_starting_position'] = function (block) {
    var text_input = block.getFieldValue('input');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['background_starting_position'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置背景图片")
            .appendField(new Blockly.FieldDropdown([["随着页面的滚动而滚动", "page"], ["不会随着页面的滚动而滚动", "No"], ["随着元素内容的滚动而滚动", "content"]]), "Drop-down-menu");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['background_starting_position'] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue('Drop-down-menu');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};