/**
 * 层叠样式表(css)文本标签
 * 6个
 * 文档×
 */
Blockly.Blocks['web_css_Font_Size'] = {
    init: function () {
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("字体大小为");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['web_css_Font_Size'] = function (block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `font-size: ${value_value};\n`;
    return code;
};


Blockly.Blocks["web_css_Font_Style"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("字体的样式")
            .appendField(
                new Blockly.FieldDropdown([
                    ["正常", "normal"],
                    ["斜体", "italic"],
                    ["倾斜的文字", "oblique"],
                ]),
                "menu"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["web_css_Font_Style"] = function (block) {
    var menu = block.getFieldValue("menu");
    var code = `font-style: ${menu};\n`;
    return code;
};

Blockly.Blocks['web_css_Font_Series'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("字体系列");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("添加字体");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['web_css_Font_Series'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['web_css_Add_Font'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("添加字体")
            .appendField(new Blockly.FieldTextInput("字体名称"), "input");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['web_css_Add_Font'] = function (block) {
    var text_input = block.getFieldValue('input');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks["web_css_Text_Alignment"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置文本对齐方式")
            .appendField(
                new Blockly.FieldDropdown([
                    ["左对齐", "left"],
                    ["右对齐", "right"],
                    ["居中对齐", "center"],
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

Blockly.JavaScript["web_css_Text_Alignment"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var code = `text-align: ${dropdown_drop_down_menu};\n`;
    return code;
};

Blockly.Blocks["web_css_Setting_Text_Embellishments"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置文本")
            .appendField(
                new Blockly.FieldDropdown([
                    ["无划线", "none"],
                    ["中划线", "line-through"],
                    ["下划线", "underline"],
                    ["上划线", "overline"],
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

Blockly.JavaScript["web_css_Setting_Text_Embellishments"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var code = `text-decoration: ${dropdown_drop_down_menu};\n`;
    return code;
};

Blockly.Blocks["web_css_Setting_Text_Rientation"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置文本方向")
            .appendField(
                new Blockly.FieldDropdown([
                    ["从左到右", "ltr"],
                    ["从右到左", "rtl"],
                    ["从父元素继承 direction 属性的值", "inherit"],
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

Blockly.JavaScript["web_css_Setting_Text_Rientation"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var code = `direction: ${dropdown_drop_down_menu};\n`;
    return code;
};

Blockly.Blocks['web_css_Indentation_Of_Text'] = {
    init: function () {
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("文本缩进");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['web_css_Indentation_Of_Text'] = function (block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `text-indent: ${value_value};\n`;
    return code;
};

