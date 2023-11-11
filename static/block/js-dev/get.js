/**
 * 获取(get)标签
 * 3个
 * 文档×
 */
Blockly.Blocks['document_get_id'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取html元素ID")
            .appendField(new Blockly.FieldTextInput("ID"), "input");
        this.setOutput(true, null);
        this.setColour(color.get);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['document_get_id'] = function (block) {
    var id = block.getFieldValue('input');
    var code = `document.getElementById(${id});\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['window_get_location_href'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取网页")
            .appendField(
                new Blockly.FieldDropdown([
                    ["链接", "href"],
                    ["hash", "hash"],
                    ["主机+端口", "host"],
                    ["主机名", "hostname"],
                    ["起端", "origin"],
                    ["路径", "pathname"],
                    ["端口", "port"],
                    ["主机协议", "protocol"],
                    ["搜索内容", "search"],
                ]),
                "menu"
            );
        this.setOutput(true, null);
        this.setColour(color.get);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['window_get_location_href'] = function (block) {
    var dropdownmenu = block.getFieldValue("menu");
    var code = 'window.location.' + dropdownmenu;
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['get_date'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取")
            .appendField(new Blockly.FieldDropdown([
                ["当前时间", "new Date()"],
                ["当前年份", "new Date().getFullYear()"],
                ["当前日", "new Date().getDate()"],
                ["当前星期", "new Date().getDay()"],
                ["当前小时", "new Date().getHours()"],
                ["当前分钟", "new Date().getMinutes()"],
                ["当前秒", "new Date().getSeconds()"],
                ["当前毫秒", "new Date().getMilliseconds()"],
                ["从1970.1.1开始的毫秒数", "new Date().getTime()"]
            ]), "DATE");
        this.setOutput(true, null);
        this.setColour(color.get);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['get_date'] = function (block) {
    var get_date = block.getFieldValue('DATE');
    var code = `${get_date}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};