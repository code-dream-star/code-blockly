/**
 * 文本(text)标签
 * ？个
 * 文档×
 */
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
    var code = `<input type="${dropdown_drop_down_menu}" value="${text_value}" ${dropdown_drop_down_menu == "radio" ? `name="${text_classification}" ` : ""}${statements_attribute}>\n`;
    return code;
};


Blockly.Blocks['form_select_down_menu'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[表单功能]")
            .appendField("创建下拉选择框");
        this.appendDummyInput()
            .appendField("可多选")
            .appendField(new Blockly.FieldCheckbox("FLASE"), "multiple")
            .appendField("显示个数")
            .appendField(new Blockly.FieldNumber(1, 1, Infinity, 1), "size");
        this.appendDummyInput()
            .appendField("禁用")
            .appendField(new Blockly.FieldCheckbox("FLASE"), "disabled")
        this.appendStatementInput("attribute")
            .setCheck(null)
            .appendField("配置");
        this.appendStatementInput("content")
            .setCheck(null)
            .appendField("选项内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.form);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['form_select_down_menu'] = function (block) {
    var checkbox_multiple = block.getFieldValue('multiple') == 'TRUE';
    var number_size = block.getFieldValue('size');
    var checkbox_disabled = block.getFieldValue('disabled') == 'TRUE';
    var statements_attribute = Blockly.JavaScript.statementToCode(block, 'attribute');
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code =
        `<select${checkbox_multiple ? " multiple" : ""}${checkbox_disabled ? " disabled" : ""} size="${number_size}"${statements_attribute}>\n${statements_content}</select>\n`;
    return code;
};


Blockly.Blocks['form_select_down_menu_optgroup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[下拉选择框功能]")
            .appendField("建造分组");
        this.appendDummyInput()
            .appendField("分组名")
            .appendField(new Blockly.FieldTextInput("群组"), "name");
        this.appendStatementInput("insertion")
            .setCheck(null)
            .appendField("内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.form);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['form_select_down_menu_optgroup'] = function (block) {
    var text_name = block.getFieldValue('name');
    var statements_insertion = Blockly.JavaScript.statementToCode(block, 'insertion');
    var code = `<optgroup label="${text_name}">\n${statements_insertion}</optgroup>\n`;
    return code;
};

Blockly.Blocks['form_select_down_menu_option'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[下拉选择框功能]")
            .appendField("建造选项");
        this.appendDummyInput()
            .appendField("内容")
            .appendField(new Blockly.FieldTextInput("文本"), "text")
            .appendField("默认选择")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "selected");
        this.appendDummyInput()
            .appendField("对应值")
            .appendField(new Blockly.FieldTextInput("text"), "value")
            .appendField("禁用")
            .appendField(new Blockly.FieldCheckbox("FLASE"), "disabled");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.form);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['form_select_down_menu_option'] = function (block) {
    var text_text = block.getFieldValue('text');
    var checkbox_selected = block.getFieldValue('selected') == 'TRUE';
    var text_value = block.getFieldValue('value');
    var checkbox_disabled = block.getFieldValue('disabled') == 'TRUE';
    var text_font_family_ = block.getFieldValue('font-family ');
    var code = `<option${checkbox_selected ? " selected" : ""}${checkbox_disabled ? " disabled" : ""} value="${text_value}">${text_text}</option>\n`;
    return code;
};