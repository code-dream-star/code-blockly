//css积木
Blockly.Blocks["css_create"] = {
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

Blockly.JavaScript["css_create"] = function (block) {
    var text_name = block.getFieldValue("NAME");
    var statements = Blockly.JavaScript.statementToCode(block, "statements");
    var code = `.${text_name} {
    ${statements}
  }\n`;
    return code;
};

Blockly.Blocks["css_color"] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldColour("#2ec7e7"),
            "color"
        );
        this.setOutput(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_color"] = function (block) {
    var colour_color = block.getFieldValue("color");
    var code = `${colour_color}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["css_color_rgb"] = {
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
        this.setOutput(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_color_rgb"] = function (block) {
    var red = block.getFieldValue("red");
    var green = block.getFieldValue("green");
    var blue = block.getFieldValue("blue");
    var code = `rgb(${red}, ${green}, ${blue})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks["css_background_color"] = {
    init: function () {
        this.appendValueInput("color")
            .setCheck("String")
            .appendField("设置背景颜色");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_background_color"] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(
        block,
        "color",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `background: ${value_name};\n`;
    return code;
};

Blockly.Blocks["css_background_image"] = {
    init: function () {
        this.appendValueInput("url")
            .setCheck("String")
            .appendField("设置背景图片   URL");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_background_image"] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(
        block,
        "NAME",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = "...;\n";
    return code;
};

Blockly.Blocks["css_Background_Image_Style"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置背景图片")
            .appendField(
                new Blockly.FieldDropdown([
                    ["水平平铺和垂直平铺", "Horizontal and vertical tiling"],
                    ["水平平铺", "level of tile"],
                    ["垂直平铺", "Vertical flat out"],
                    ["图像不平铺", "image is not tiled"],
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

Blockly.JavaScript["css_Background_Image_Style"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var code = "...;\n";
    return code;
};

Blockly.Blocks["css_Text_alignment"] = {
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

Blockly.JavaScript["css_Text_alignment"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var code = "...;\n";
    return code;
};

Blockly.Blocks["css_Setting_Text_Embellishments"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置文本")
            .appendField(
                new Blockly.FieldDropdown([
                    ["中划线", "line-through"],
                    ["下划线", "underline"],
                    ["去掉线 ", "none"],
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

Blockly.JavaScript["css_Setting_Text_Embellishments"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var code = "...;\n";
    return code;
};

Blockly.Blocks["css_Setting_Text_rientation"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置文本方向")
            .appendField(
                new Blockly.FieldDropdown([
                    ["从左到右", "left"],
                    ["从右到左", "right"],
                    ["从父元素继承 direction 属性的值", "inheritance"],
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

Blockly.JavaScript["css_Setting_Text_rientation"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var code = "...;\n";
    return code;
};

Blockly.Blocks["css_indentation_of_text"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(" 文本缩进  ")
            .appendField(new Blockly.FieldNumber(0, 0), "digital")
            .appendField(
                new Blockly.FieldDropdown([
                    ["cm", "cm"],
                    ["mm", "mm"],
                    ["in", "in"],
                    ["px", "px"],
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
                "menu"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_indentation_of_text"] = function (block) {
    var number_digital = block.getFieldValue("digital");
    var dropdown_menu = block.getFieldValue("menu");
    // TODO: Assemble JavaScript into code variable.
    var code = "...;\n";
    return code;
};

Blockly.Blocks["css_font_style"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("字体的样式")
            .appendField(
                new Blockly.FieldDropdown([
                    ["正常", "normal"],
                    ["斜体", "italics"],
                    ["倾斜的文字", "Slanted text"],
                ]),
                "Drop down menu"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_font_style"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("Drop down menu");
    // TODO: Assemble JavaScript into code variable.
    var code = "...;\n";
    return code;
};

Blockly.Blocks["css_Font_size"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("字体大小")
            .appendField(
                new Blockly.FieldNumber(0, -Infinity, Infinity, 16),
                "NAME"
            )
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
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_Font_size"] = function (block) {
    var number_name = block.getFieldValue("NAME");
    var dropdown_unit = block.getFieldValue("unit");
    // TODO: Assemble JavaScript into code variable.
    var code = "...;\n";
    return code;
};

Blockly.Blocks["css_link"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("当超链接")
            .appendField(new Blockly.FieldTextInput("default"), "input")
            .appendField("是")
            .appendField(
                new Blockly.FieldDropdown([
                    ["还没", "link"],
                    ["已经", "normal"],
                ]),
                "Drop down menu"
            )
            .appendField("被访问过");
        this.appendStatementInput("content").setCheck(null).appendField("内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_link"] = function (block) {
    var text_input = block.getFieldValue("input");
    var dropdown_drop_down_menu = block.getFieldValue("Drop down menu");
    var statements_content = Blockly.JavaScript.statementToCode(
        block,
        "content"
    );
    // TODO: Assemble JavaScript into code variable.
    var code = "...;\n";
    return code;
};

Blockly.Blocks["css_list_style"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置列表样式")
            .appendField(
                new Blockly.FieldDropdown([
                    ["没有标记", "none"],
                    ["默认实心圆", "disc"],
                    ["实心方块", "square"],
                    ["空心圆", "circle "],
                    ["数字", "decima"],
                    ["0开头的数字标记", "decimal-leading-zero"],
                    ["小写罗马数字", "lower-roman"],
                    ["大写罗马数字", "upper-roman"],
                    [" 小写英文字母", "lower-alph"],
                    ["大写英文字母", "upper-alpha"],
                ]),
                "Drop down menu"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_list_style"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("Drop down menu");
    // TODO: Assemble JavaScript into code variable.
    var code = "...;\n";
    return code;
};


Blockly.Blocks['css_unit'] = {
    init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField(new Blockly.FieldDropdown(
            [
                ["px","px"], 
                ["mm","mm"], 
                ["in","in"],
                 ["cm","cm"], 
                 ["pc","pc"], 
                 ["pt","pt"], 
                 ["em","em"], 
                 ["ex","ex"], 
                 ["ch","ch"], 
                 ["rem","rem"],
                  ["vw","vw"],
                   ["vh","vh"],
                    ["vmin","vmin"],
                     ["vmax","vmax"], 
                     ["%","%"]
                    ]
                    ), "unit");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.JavaScript['css_unit'] = function(block) {
    var number_name = block.getFieldValue('NAME');
    var dropdown_unit = block.getFieldValue('unit');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['css_table_width'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("表格")
          .appendField(new Blockly.FieldDropdown([["宽度","OPTIONNAME"], ["高度","OPTIONNAME"]]), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['css_table_width'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};