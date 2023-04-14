/**
 * 层叠样式表(css)链接标签
 * 1个(待补充)
 * 文档×
 */

Blockly.Blocks["css_Link"] = {
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
        this.appendStatementInput("content")
            .setCheck(null)
            .appendField("内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.css);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.JavaScript["css_Link"] = function (block) {
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