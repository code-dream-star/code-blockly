/**
 * 浏览器(window)标签
 * 4个
 * 文档×
 */
Blockly.Blocks['window_open'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("打开网页")
            .appendField(new Blockly.FieldTextInput("https://code-dream-star.github.io"), "URL");
        this.appendDummyInput()
            .appendField("target属性")
            .appendField(new Blockly.FieldDropdown([
                ["URL加载到一个新的窗口", "_blank"],
                ["URL加载到父框架", "_parent"],
                ["URL替换当前页面", "_self"],
                ["URL替换任何可加载的框架集", "_top"]
            ]), "target");
        this.appendDummyInput()
            .appendField("窗口名称")
            .appendField(new Blockly.FieldTextInput("Code"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.window);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['window_open'] = function (block) {
    var url = block.getFieldValue('URL');
    var target = block.getFieldValue('target');
    var name = block.getFieldValue('NAME');
    var code = `window.open("${url}",${target},${name})\n`;
    return code;
};


Blockly.Blocks['window_close'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("关闭当前网页");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.window);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['window_close'] = function (block) {
    var code = `window.close()\n`;
    return code;
};


Blockly.Blocks['window_open_return'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("打开网页")
            .appendField(new Blockly.FieldTextInput("https://code-dream-star.github.io"), "URL");
        this.appendDummyInput()
            .appendField("target属性")
            .appendField(new Blockly.FieldDropdown([
                ["URL加载到一个新的窗口", "_blank"],
                ["URL加载到父框架", "_parent"],
                ["URL替换当前页面", "_self"],
                ["URL替换任何可加载的框架集", "_top"]
            ]), "target");
        this.appendDummyInput()
            .appendField("窗口名称")
            .appendField(new Blockly.FieldTextInput("Code"), "NAME");
        this.setOutput(true, null);
        this.setColour(color.window);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['window_open_return'] = function (block) {
    var url = block.getFieldValue('URL');
    var target = block.getFieldValue('target');
    var name = block.getFieldValue('NAME');
    var code = [`window.open("${url}",${target},${name})\n`, Blockly.JavaScript.ORDER_NONE];
    return code;
};


Blockly.Blocks['window_close_return'] = {
    init: function () {
        this.appendValueInput("web_site")
            .setCheck("Object")
            .appendField("关闭网页");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.window);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['window_close_return'] = function (block) {
    var web_site = Blockly.JavaScript.valueToCode(block, 'web_site', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${web_site}.close()\n`;
    return code;
};


Blockly.Blocks['window_history_back'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("返回上一页");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.window);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['window_history_back'] = function (block) {
    var code = `window.history.back()\n`;
    return code;
};


Blockly.Blocks['window_history_back'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("返回上一页");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.window);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['window_history_back'] = function (block) {
    var code = `window.history.back()\n`;
    return code;
};


Blockly.Blocks['window_location_reload'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("重新加载网页");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.window);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['window_location_reload'] = function (block) {
    var code = `window.location.reload();\n`;
    return code;
};