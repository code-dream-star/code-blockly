/**
 * 层叠样式表(css)列表标签
 * 1个(待补充)
 * 文档×
 */

Blockly.Blocks["css_List_Style"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置列表样式")
            .appendField(
                new Blockly.FieldDropdown([
                    ["没有标记", "none"],
                    ["默认实心圆", "disc"],
                    ["实心方块", "square"],
                    ["空心圆", "circle"],
                    ["数字", "decima"],
                    ["0开头的数字标记", "decimal-leading-zero"],
                    ["小写罗马数字", "lower-roman"],
                    ["大写罗马数字", "upper-roman"],
                    ["小写英文字母", "lower-alph"],
                    ["大写英文字母", "upper-alpha"],
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

Blockly.JavaScript["css_List_Style"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("Drop down menu");
    var code = `list-style: ${dropdown_drop_down_menu};\n`;
    return code;
};
