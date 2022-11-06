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
            );
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
    var form_text = Blockly.JavaScript.statementToCode(block, "form_text");
    var code = `<fieldset>\n<legend>${text_title}</legend>\n${form_text}\n</fieldset>`;
    return code;
};

Blockly.Blocks["form_text_box"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[表单功能] 创建")
            .appendField(
                new Blockly.FieldDropdown([
                    ["输入框", "text"],
                    ["密码框", "password"],
                ]),
                "drop-down menu"
            );
        this.appendDummyInput()
            .appendField("提示语")
            .appendField(new Blockly.FieldTextInput("请输入"), "placeholder");
        this.appendDummyInput()
            .appendField("默认值")
            .appendField(new Blockly.FieldTextInput("text"), "value");
        this.appendStatementInput("attribute")
            .setCheck(null)
            .appendField("配置");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.form);
        this.setTooltip("");
        this.setHelpUrl("");
    },
}; 

Blockly.JavaScript["form_text_box"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var text_value = block.getFieldValue("value");
    var text_placeholder = block.getFieldValue("placeholder");
    var statements_attribute = Blockly.JavaScript.statementToCode(
        block,
        "attribute"
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `<input type="${dropdown_drop_down_menu}" value="${text_value}" placeholder="${text_placeholder}" ${statements_attribute}>\n`;
    return code;
};

Blockly.Blocks["form_select_box"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[表单功能] 创建")
            .appendField(
                new Blockly.FieldDropdown([
                    ["单选框", "radio"],
                    ["复选框", "checkbox"],
                ]),
                "drop-down menu"
            );
        this.appendDummyInput()
            .appendField("返回值")
            .appendField(new Blockly.FieldTextInput("返回值"), "value");
        this.appendDummyInput("name")
            .appendField("分类")
            .appendField(
                new Blockly.FieldTextInput("radioid"),
                "classification"
            );
        this.appendStatementInput("attribute")
            .setCheck(null)
            .appendField("配置");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.form);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function (block) {
        var dropdown_drop_down_menu = this.getFieldValue("drop-down menu");
        if (dropdown_drop_down_menu == "radio") {
            if (!this.getInput("name")) {
                this.removeInput("attribute");
                this.appendDummyInput("name")
                    .appendField("分类")
                    .appendField(
                        new Blockly.FieldTextInput("radioid"),
                        "classification"
                    );
                    this.appendStatementInput("attribute").setCheck(null).appendField("配置");
            }
        } else {
            if (this.getInput("name")) {
                this.removeInput("name");
            }
        }
    },
};

Blockly.JavaScript["form_select_box"] = function (block) {
    var dropdown_drop_down_menu = block.getFieldValue("drop-down menu");
    var text_classification = block.getFieldValue("classification");
    var text_value = block.getFieldValue("value");
    var statements_attribute = Blockly.JavaScript.statementToCode(
        block,
        "attribute"
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `<input type="${dropdown_drop_down_menu}" value="${text_value}" ${dropdown_drop_down_menu=="radio"?`name="${text_classification}" `:""}${statements_attribute}>\n`;
    return code;
};
