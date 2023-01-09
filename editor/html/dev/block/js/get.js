/**
 * 获取(get)标签
 * 1个
 * 文档×
 */
Blockly.Blocks['docment_get_id'] = {
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

Blockly.JavaScript['js_get_id'] = function (block) {
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
    var code = 'window.location.'+ dropdownmenu;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

