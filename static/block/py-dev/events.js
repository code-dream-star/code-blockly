/**
 * 事件(events)标签
 * 7个
 * 文档×
 */
Blockly.Blocks['events_print'] = {
    init: function () {
        this.appendValueInput("print_text")
            .setCheck(null)
            .appendField("打印");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.events);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['events_print'] = function (block) {
    var value = Blockly.Python.valueToCode(block, 'print_text', Blockly.Python.ORDER_ATOMIC);
    var code = `print(${value})\n`;
    return code;
};


Blockly.Blocks['events_comment'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("注释")
            .appendField(new Blockly.FieldTextInput("这是一段注释"), "comment");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#C1C1C1");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['events_comment'] = function (block) {
    var comment = block.getFieldValue('comment');
    var code = `# ${comment}\n`;
    return code;
};


Blockly.Blocks['events_import'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("导入")
            .appendField(new Blockly.FieldTextInput(""), "library");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.events);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['events_import'] = function (block) {
    var library = block.getFieldValue('library');
    var code = `import ${library}\n`;
    return code;
};


Blockly.Blocks['events_import_library_as'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("导入")
            .appendField(new Blockly.FieldTextInput(""), "library")
            .appendField("为")
            .appendField(new Blockly.FieldVariable(null), "library_as");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.events);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['events_import_library_as'] = function (block) {
    var library = block.getFieldValue('library');
    var library_as = workspace.variableMap.getVariableById(block.getFieldValue('library_as')).name;
    var code = `import ${library} as ${library_as}`;
    return code;
};


Blockly.Blocks['events_from_import'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("从")
            .appendField(new Blockly.FieldTextInput(""), "library")
            .appendField("导入")
            .appendField(new Blockly.FieldTextInput(""), "import_class");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.events);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['events_from_import'] = function (block) {
    var library = block.getFieldValue('library');
    var import_class = block.getFieldValue('import_class');
    var code = `from ${library} import ${import_class}`;
    return code;
};


Blockly.Blocks['events_input'] = {
    init: function () {
        this.appendValueInput("print_text")
            .setCheck(null)
            .appendField("打印");
        this.appendDummyInput()
            .appendField("并获得输入");
        this.setOutput(true, "String");
        this.setColour(color.events);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['events_input'] = function (block) {
    var print_text = Blockly.Python.valueToCode(block, 'print_text', Blockly.Python.ORDER_ATOMIC);
    var code = `input(${print_text})`;
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['events_input_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获得输入");
        this.setOutput(true, "String");
        this.setColour(color.events);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['events_input_get'] = function (block) {
    var code = `input()`;
    return [code, Blockly.Python.ORDER_NONE];
};
