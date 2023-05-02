/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Blocks for Blockly's Block Factory application.
 * @author fraser@google.com (Neil Fraser)
 */

/**
 * Xiaohong XeLa formatting document
 * Xiaohong XeLa Chinese document
 * Xiaohong XeLa modify many places
 */

'use strict';

Blockly.Blocks['factory_base'] = {
    // Base of new block.
    init: function () {
        this.setColour(120);
        this.appendDummyInput()
            .appendField('积木类型')
            .appendField(new Blockly.FieldTextInput('block_type'), 'NAME');
        this.appendStatementInput('INPUTS')
            .setCheck('Input')
            .appendField('');
        var dropdown = new Blockly.FieldDropdown([
            ['自动', 'AUTO'],
            ['外部', 'EXT'],
            ['内部', 'INT']
        ]);
        this.appendDummyInput()
            .appendField(dropdown, 'INLINE')
            .appendField("输入");
        dropdown = new Blockly.FieldDropdown([
            ['不连接', 'NONE'],
            ['← 向左输出', 'LEFT'],
            ['↕ 顶部+底部连接', 'BOTH'],
            ['↑ 顶部连接', 'TOP'],
            ['↓ 底部连接', 'BOTTOM']
        ],
            function (option) {
                this.getSourceBlock().updateShape_(option);
                // Connect a shadow block to this new input.
                this.getSourceBlock().spawnOutputShadow_(option);
            });
        this.appendDummyInput()
            .appendField(dropdown, 'CONNECTIONS');
        this.appendValueInput('TOOLTIP')
            .setCheck('String')
            .appendField('提示');
        this.appendValueInput('HELPURL')
            .setCheck('String')
            .appendField('帮助网址');
        this.appendValueInput('COLOUR')
            .setCheck('Colour')
            .appendField('颜色');
        this.setTooltip('通过插入构建自定义积木\n此处的字段、输入和其他积木。');
        this.setHelpUrl(
            'https://blockly.tortorse.com/guides/create-custom-blocks/overview.html');
    },
    mutationToDom: function () {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('connections', this.getFieldValue('CONNECTIONS'));
        return container;
    },
    domToMutation: function (xmlElement) {
        var connections = xmlElement.getAttribute('connections');
        this.updateShape_(connections);
    },
    spawnOutputShadow_: function (option) {
        // Helper method for deciding which type of outputs this block needs
        // to attach shadow blocks to.
        switch (option) {
            case 'LEFT':
                this.connectOutputShadow_('OUTPUTTYPE');
                break;
            case 'TOP':
                this.connectOutputShadow_('TOPTYPE');
                break;
            case 'BOTTOM':
                this.connectOutputShadow_('BOTTOMTYPE');
                break;
            case 'BOTH':
                this.connectOutputShadow_('TOPTYPE');
                this.connectOutputShadow_('BOTTOMTYPE');
                break;
        }
    },
    connectOutputShadow_: function (outputType) {
        // Helper method to create & connect shadow block.
        var type = this.workspace.newBlock('type_null');
        type.setShadow(true);
        type.outputConnection.connect(this.getInput(outputType).connection);
        type.initSvg();
        if (this.rendered) {
            type.render();
        }
    },
    updateShape_: function (option) {
        var outputExists = this.getInput('OUTPUTTYPE');
        var topExists = this.getInput('TOPTYPE');
        var bottomExists = this.getInput('BOTTOMTYPE');
        if (option == 'LEFT') {
            if (!outputExists) {
                this.addTypeInput_('OUTPUTTYPE', '输出类型');
            }
        } else if (outputExists) {
            this.removeInput('OUTPUTTYPE');
        }
        if (option == 'TOP' || option == 'BOTH') {
            if (!topExists) {
                this.addTypeInput_('TOPTYPE', '顶部类型');
            }
        } else if (topExists) {
            this.removeInput('TOPTYPE');
        }
        if (option == 'BOTTOM' || option == 'BOTH') {
            if (!bottomExists) {
                this.addTypeInput_('BOTTOMTYPE', '底部类型');
            }
        } else if (bottomExists) {
            this.removeInput('BOTTOMTYPE');
        }
    },
    addTypeInput_: function (name, label) {
        this.appendValueInput(name)
            .setCheck('Type')
            .appendField(label);
        this.moveInputBefore(name, 'COLOUR');
    }
};

var FIELD_MESSAGE = '对齐方向 %1 %2 ';
var FIELD_ARGS = [{
    "type": "field_dropdown",
    "name": "ALIGN",
    "options": [
        ['居左', 'LEFT'],
        ['居右', 'RIGHT'],
        ['居中', 'CENTRE']
    ],
},
{
    "type": "input_statement",
    "name": "FIELDS",
    "check": "Field"
}
];

var TYPE_MESSAGE = '输入类型 %1';
var TYPE_ARGS = [{
    "type": "input_value",
    "name": "TYPE",
    "check": "Type",
    "align": "RIGHT"
}];

Blockly.Blocks['input_value'] = {
    // Value input.
    init: function () {
        this.jsonInit({
            "message0": "值输入 %1 %2",
            "args0": [{
                "type": "field_input",
                "name": "INPUTNAME",
                "text": "NAME"
            },
            {
                "type": "input_dummy"
            }
            ],
            "message1": FIELD_MESSAGE,
            "args1": FIELD_ARGS,
            "message2": TYPE_MESSAGE,
            "args2": TYPE_ARGS,
            "previousStatement": "Input",
            "nextStatement": "Input",
            "colour": 210,
            "tooltip": "用于水平连接的值套接字。",
            "helpUrl": "https://blockly.tortorse.com/guides/create-custom-blocks/define-blocks.html#%E5%9D%97%E8%BE%93%E5%85%A5"
        });
    },
    onchange: function () {
        inputNameCheck(this);
    }
};

Blockly.Blocks['input_statement'] = {
    // Statement input.
    init: function () {
        this.jsonInit({
            "message0": "语句输入 %1 %2",
            "args0": [{
                "type": "field_input",
                "name": "INPUTNAME",
                "text": "NAME"
            },
            {
                "type": "input_dummy"
            },
            ],
            "message1": FIELD_MESSAGE,
            "args1": FIELD_ARGS,
            "message2": TYPE_MESSAGE,
            "args2": TYPE_ARGS,
            "previousStatement": "Input",
            "nextStatement": "Input",
            "colour": 210,
            "tooltip": "用于封闭垂直积木的声明输入。",
            "helpUrl": "https://blockly.tortorse.com/guides/create-custom-blocks/define-blocks.html#%E5%9D%97%E8%BE%93%E5%85%A5"
        });
    },
    onchange: function () {
        inputNameCheck(this);
    }
};

Blockly.Blocks['input_dummy'] = {
    // Dummy input.
    init: function () {
        this.jsonInit({
            "message0": "虚拟输入",
            "message1": FIELD_MESSAGE,
            "args1": FIELD_ARGS,
            "previousStatement": "Input",
            "nextStatement": "Input",
            "colour": 210,
            "tooltip": '用于在没有\n连接的单独行上添加字段。对齐选项（左、右、中）\n仅适用于多行字段。',
            "helpUrl": "https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/label.html#%E5%88%9B%E5%BB%BA"
        });
    }
};

Blockly.Blocks['field_static'] = {
    // Text value.
    init: function () {
        this.setColour(160);
        this.appendDummyInput('FIRST')
            .appendField('标签显示')
            .appendField(new Blockly.FieldTextInput(''), 'TEXT');
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setTooltip('用作标签的静态标签。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/label.html');
    },
};

Blockly.Blocks['field_label_serializable'] = {
    // Text value that is saved to XML.
    init: function () {
        this.setColour(160);
        this.appendDummyInput('FIRST')
            .appendField('标签显示')
            .appendField(new Blockly.FieldTextInput(''), 'TEXT')
            .appendField(',')
            .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setTooltip('用作标签并保存为 XML 的静态标签。 仅当您想在运行时修改此标签时使用。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/label.html');
    },
    onchange: function () {
        fieldNameCheck(this);
    }
};

Blockly.Blocks['field_input'] = {
    // Text input.
    init: function () {
        this.setColour(160);
        this.appendDummyInput()
            .appendField('文字输入')
            .appendField(new Blockly.FieldTextInput('default'), 'TEXT')
            .appendField(',')
            .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setTooltip('供用户输入文本的输入字段。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/text-input.html');
    },
    onchange: function () {
        fieldNameCheck(this);
    }
};

Blockly.Blocks['field_number'] = {
    // Numeric input.
    init: function () {
        this.setColour(160);
        this.appendDummyInput()
            .appendField('数字输入')
            .appendField(new Blockly.FieldNumber(0), 'VALUE')
            .appendField(',')
            .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
        this.appendDummyInput()
            .appendField('最小')
            .appendField(new Blockly.FieldNumber(-Infinity), 'MIN')
            .appendField('最大')
            .appendField(new Blockly.FieldNumber(Infinity), 'MAX')
            .appendField('精密度')
            .appendField(new Blockly.FieldNumber(0, 0), 'PRECISION');
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setTooltip('供用户输入数字的输入字段。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/number.html');
    },
    onchange: function () {
        fieldNameCheck(this);
    }
};

Blockly.Blocks['field_angle'] = {
    // Angle input.
    init: function () {
        this.setColour(160);
        this.appendDummyInput()
            .appendField('角度输入')
            .appendField(new Blockly.FieldAngle('90'), 'ANGLE')
            .appendField(',')
            .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setTooltip('供用户输入角度的输入字段。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/angle.html');
    },
    onchange: function () {
        fieldNameCheck(this);
    }
};

Blockly.Blocks['field_dropdown'] = {
    // Dropdown menu.
    init: function () {
        this.appendDummyInput()
            .appendField('下拉框')
            .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
        this.optionList_ = ['text', 'text', 'text'];
        this.updateShape_();
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setMutator(new Blockly.Mutator(['field_dropdown_option_text',
            'field_dropdown_option_image'
        ]));
        this.setColour(160);
        this.setTooltip('带有选项列表的下拉框。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/dropdown.html');
    },
    mutationToDom: function (workspace) {
        // Create XML to represent menu options.
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('options', JSON.stringify(this.optionList_));
        return container;
    },
    domToMutation: function (container) {
        // Parse XML to restore the menu options.
        var value = JSON.parse(container.getAttribute('options'));
        if (typeof value == 'number') {
            // Old format from before images were added.  November 2016.
            this.optionList_ = [];
            for (var i = 0; i < value; i++) {
                this.optionList_.push('text');
            }
        } else {
            this.optionList_ = value;
        }
        this.updateShape_();
    },
    decompose: function (workspace) {
        // Populate the mutator's dialog with this block's components.
        var containerBlock = workspace.newBlock('field_dropdown_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.optionList_.length; i++) {
            var optionBlock = workspace.newBlock(
                'field_dropdown_option_' + this.optionList_[i]);
            optionBlock.initSvg();
            connection.connect(optionBlock.previousConnection);
            connection = optionBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function (containerBlock) {
        // Reconfigure this block based on the mutator dialog's components.
        var optionBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        this.optionList_.length = 0;
        var data = [];
        while (optionBlock) {
            if (optionBlock.type == 'field_dropdown_option_text') {
                this.optionList_.push('text');
            } else if (optionBlock.type == 'field_dropdown_option_image') {
                this.optionList_.push('image');
            }
            data.push([optionBlock.userData_, optionBlock.cpuData_]);
            optionBlock = optionBlock.nextConnection &&
                optionBlock.nextConnection.targetBlock();
        }
        this.updateShape_();
        // Restore any data.
        for (var i = 0; i < this.optionList_.length; i++) {
            var userData = data[i][0];
            if (userData !== undefined) {
                if (typeof userData == 'string') {
                    this.setFieldValue(userData || 'option', 'USER' + i);
                } else {
                    this.setFieldValue(userData.src, 'SRC' + i);
                    this.setFieldValue(userData.width, 'WIDTH' + i);
                    this.setFieldValue(userData.height, 'HEIGHT' + i);
                    this.setFieldValue(userData.alt, 'ALT' + i);
                }
                this.setFieldValue(data[i][1] || 'OPTIONNAME', 'CPU' + i);
            }
        }
    },
    saveConnections: function (containerBlock) {
        // Store all data for each option.
        var optionBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (optionBlock) {
            optionBlock.userData_ = this.getUserData(i);
            optionBlock.cpuData_ = this.getFieldValue('CPU' + i);
            i++;
            optionBlock = optionBlock.nextConnection &&
                optionBlock.nextConnection.targetBlock();
        }
    },
    updateShape_: function () {
        // Delete everything.
        var i = 0;
        while (this.getInput('OPTION' + i)) {
            this.removeInput('OPTION' + i);
            this.removeInput('OPTION_IMAGE' + i, true);
            i++;
        }
        // Rebuild block.
        var src = 'https://www.gstatic.com/codesite/ph/images/star_on.gif';
        for (var i = 0; i <= this.optionList_.length; i++) {
            var type = this.optionList_[i];
            if (type == 'text') {
                this.appendDummyInput('OPTION' + i)
                    .appendField('•')
                    .appendField(new Blockly.FieldTextInput('option'), 'USER' + i)
                    .appendField(',')
                    .appendField(new Blockly.FieldTextInput('OPTIONNAME'), 'CPU' + i);
            } else if (type == 'image') {
                this.appendDummyInput('OPTION' + i)
                    .appendField('•')
                    .appendField('图片')
                    .appendField(new Blockly.FieldTextInput(src), 'SRC' + i);
                this.appendDummyInput('OPTION_IMAGE' + i)
                    .appendField(' ')
                    .appendField('长度')
                    .appendField(new Blockly.FieldNumber('15', 0, NaN, 1), 'WIDTH' + i)
                    .appendField('宽度')
                    .appendField(new Blockly.FieldNumber('15', 0, NaN, 1), 'HEIGHT' + i)
                    .appendField('图片描述')
                    .appendField(new Blockly.FieldTextInput('*'), 'ALT' + i)
                    .appendField(',')
                    .appendField(new Blockly.FieldTextInput('OPTIONNAME'), 'CPU' + i);
            }
        }
    },
    onchange: function () {
        if (this.workspace && this.optionList_.length < 1) {
            this.setWarningText('下拉菜单必须至少有一个选项。');
        } else {
            fieldNameCheck(this);
        }
    },
    getUserData: function (n) {
        if (this.optionList_[n] == 'text') {
            return this.getFieldValue('USER' + n);
        }
        if (this.optionList_[n] == 'image') {
            return {
                src: this.getFieldValue('SRC' + n),
                width: Number(this.getFieldValue('WIDTH' + n)),
                height: Number(this.getFieldValue('HEIGHT' + n)),
                alt: this.getFieldValue('ALT' + n)
            };
        }
        throw 'Unknown dropdown type';
    }
};

Blockly.Blocks['field_dropdown_container'] = {
    // Container.
    init: function () {
        this.setColour(160);
        this.appendDummyInput()
            .appendField('添加选项');
        this.appendStatementInput('STACK');
        this.setTooltip('添加、删除或重新排序选项以重新配置此下拉菜单。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/dropdown.html');
        this.contextMenu = false;
    }
};

Blockly.Blocks['field_dropdown_option_text'] = {
    // Add text option.
    init: function () {
        this.setColour(160);
        this.appendDummyInput()
            .appendField('文本选项');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('在下拉菜单中添加一个新的文本选项。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/dropdown.html#%E4%B8%8B%E6%8B%89%E8%8F%9C%E5%8D%95%E5%AD%97%E6%AE%B5');
        this.contextMenu = false;
    }
};

Blockly.Blocks['field_dropdown_option_image'] = {
    // Add image option.
    init: function () {
        this.setColour(160);
        this.appendDummyInput()
            .appendField('图像选项');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('在下拉菜单中添加一个新的图像选项。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/dropdown.html#%E5%9B%BE%E7%89%87%E4%B8%8B%E6%8B%89%E8%8F%9C%E5%8D%95');
        this.contextMenu = false;
    }
};

Blockly.Blocks['field_checkbox'] = {
    // Checkbox.
    init: function () {
        this.setColour(160);
        this.appendDummyInput()
            .appendField('复选框')
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'CHECKED')
            .appendField(',')
            .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setTooltip('复选框字段。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/checkbox.html');
    },
    onchange: function () {
        fieldNameCheck(this);
    }
};

Blockly.Blocks['field_colour'] = {
    // Colour input.
    init: function () {
        this.setColour(160);
        this.appendDummyInput()
            .appendField('颜色')
            .appendField(new Blockly.FieldColour('#ff0000'), 'COLOUR')
            .appendField(',')
            .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setTooltip('颜色输入字段。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/colour.html');
    },
    onchange: function () {
        fieldNameCheck(this);
    }
};

Blockly.Blocks['field_variable'] = {
    // Dropdown for variables.
    init: function () {
        this.setColour(160);
        this.appendDummyInput()
            .appendField('变量')
            .appendField(new Blockly.FieldTextInput('item'), 'TEXT')
            .appendField(',')
            .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setTooltip('变量名称的下拉菜单。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/variable.html');
    },
    onchange: function () {
        fieldNameCheck(this);
    }
};

Blockly.Blocks['field_image'] = {
    // Image.
    init: function () {
        this.setColour(160);
        var src = '';
        this.appendDummyInput()
            .appendField('图片')
            .appendField(new Blockly.FieldTextInput(src), 'SRC');
        this.appendDummyInput()
            .appendField('宽度')
            .appendField(new Blockly.FieldNumber('15', 0, NaN, 1), 'WIDTH')
            .appendField('高度')
            .appendField(new Blockly.FieldNumber('15', 0, NaN, 1), 'HEIGHT')
            .appendField('替代文字')
            .appendField(new Blockly.FieldTextInput('*'), 'ALT')
            .appendField('翻转')
            .appendField(new Blockly.FieldCheckbox('false'), 'FLIP_RTL');
        this.setPreviousStatement(true, 'Field');
        this.setNextStatement(true, 'Field');
        this.setTooltip('静态图像（JPEG、PNG、GIF、SVG、BMP）。\n无论高度和宽度如何，都保持纵横比。\n替代文本用于折叠时。');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/image.html');
    }
};

Blockly.Blocks['type_group'] = {
    // Group of types.
    init: function () {
        this.typeCount_ = 2;
        this.updateShape_();
        this.setOutput(true, 'Type');
        this.setMutator(new Blockly.Mutator(['type_group_item']));
        this.setColour(230);
        this.setTooltip('允许接受不止一种类型。')
    },
    mutationToDom: function (workspace) {
        // Create XML to represent a group of types.
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('types', this.typeCount_);
        return container;
    },
    domToMutation: function (container) {
        // Parse XML to restore the group of types.
        this.typeCount_ = parseInt(container.getAttribute('types'), 10);
        this.updateShape_();
        for (var i = 0; i < this.typeCount_; i++) {
            this.removeInput('TYPE' + i);
        }
        for (var i = 0; i < this.typeCount_; i++) {
            var input = this.appendValueInput('TYPE' + i)
                .setCheck('Type');
            if (i == 0) {
                input.appendField('多个类型');
            }
        }
    },
    decompose: function (workspace) {
        // Populate the mutator's dialog with this block's components.
        var containerBlock = workspace.newBlock('type_group_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.typeCount_; i++) {
            var typeBlock = workspace.newBlock('type_group_item');
            typeBlock.initSvg();
            connection.connect(typeBlock.previousConnection);
            connection = typeBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function (containerBlock) {
        // Reconfigure this block based on the mutator dialog's components.
        var typeBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (typeBlock) {
            connections.push(typeBlock.valueConnection_);
            typeBlock = typeBlock.nextConnection &&
                typeBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.typeCount_; i++) {
            var connection = this.getInput('TYPE' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.typeCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.typeCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'TYPE' + i);
        }
    },
    saveConnections: function (containerBlock) {
        // Store a pointer to any connected child blocks.
        var typeBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (typeBlock) {
            var input = this.getInput('TYPE' + i);
            typeBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            typeBlock = typeBlock.nextConnection &&
                typeBlock.nextConnection.targetBlock();
        }
    },
    updateShape_: function () {
        // Modify this block to have the correct number of inputs.
        // Add new inputs.
        for (var i = 0; i < this.typeCount_; i++) {
            if (!this.getInput('TYPE' + i)) {
                var input = this.appendValueInput('TYPE' + i);
                if (i == 0) {
                    input.appendField('多个类型');
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('TYPE' + i)) {
            this.removeInput('TYPE' + i);
            i++;
        }
    }
};

Blockly.Blocks['type_group_container'] = {
    // Container.
    init: function () {
        this.jsonInit({
            "message0": "添加类型 %1 %2",
            "args0": [
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "STACK" }
            ],
            "colour": 230,
            "tooltip": "添加或删除允许的类型。"
        });
    }
};

Blockly.Blocks['type_group_item'] = {
    // Add type.
    init: function () {
        this.jsonInit({
            "message0": "类型",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "添加新的允许类型。"
        });
    }
};

Blockly.Blocks['type_null'] = {
    // Null type.
    valueType: null,
    init: function () {
        this.jsonInit({
            "message0": "任何（any）",
            "output": "Type",
            "colour": 230,
            "tooltip": "允许任何类型。",
        });
    }
};

Blockly.Blocks['type_boolean'] = {
    // Boolean type.
    valueType: 'Boolean',
    init: function () {
        this.jsonInit({
            "message0": "布尔值（Boolean）",
            "output": "Type",
            "colour": 230,
            "tooltip": "布尔值（真/假）是允许的。",
        });
    }
};

Blockly.Blocks['type_number'] = {
    // Number type.
    valueType: 'Number',
    init: function () {
        this.jsonInit({
            "message0": "数值（Number）",
            "output": "Type",
            "colour": 230,
            "tooltip": "数值（整数/浮点数）是允许的。",
        });
    }
};

Blockly.Blocks['type_string'] = {
    // String type.
    valueType: 'String',
    init: function () {
        this.jsonInit({
            "message0": "字符串（String）",
            "output": "Type",
            "colour": 230,
            "tooltip": "字符串（文本）是允许的。",
        });
    }
};

Blockly.Blocks['type_list'] = {
    // List type.
    valueType: 'Array',
    init: function () {
        this.jsonInit({
            "message0": "数组（Array）",
            "output": "Type",
            "colour": 230,
            "tooltip": "数组（列表）是允许的。",
        });
    }
};

Blockly.Blocks['type_other'] = {
    // Other type.
    init: function () {
        this.jsonInit({
            "message0": "其他类型 %1",
            "args0": [{ "type": "field_input", "name": "TYPE", "text": "" }],
            "output": "Type",
            "colour": 230,
            "tooltip": "允许的自定义类型。",
        });
    }
};

Blockly.Blocks['colour_hue'] = {
    // Set the colour of the block.
    init: function () {
        this.appendDummyInput()
            .appendField('hue色彩:')
            .appendField(new Blockly.FieldAngle('0', this.validator), 'HUE');
        this.setOutput(true, 'Colour');
        this.setTooltip('用这种颜色填充积木。 ');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/block-colour.html#%E5%AE%9A%E4%B9%89%E5%9D%97%E9%A2%9C%E8%89%B2');
    },
    validator: function (text) {
        // Update the current block's colour to match.
        var hue = parseInt(text, 10);
        if (!isNaN(hue)) {
            this.getSourceBlock().setColour(hue);
        }
    },
    mutationToDom: function (workspace) {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('colour', this.getColour());
        return container;
    },
    domToMutation: function (container) {
        this.setColour(container.getAttribute('colour'));
    }
};

Blockly.Blocks['colour_hue2'] = {
    // Set the colour of the block.
    init: function () {
        this.appendDummyInput()
            .appendField('自定义色彩:')
            .appendField(new Blockly.FieldTextInput("#000", this.validator), "HUE");
        this.setOutput(true, 'Colour');
        this.setTooltip('用这种颜色填充积木。 ');
        this.setHelpUrl('https://blockly.tortorse.com/guides/create-custom-blocks/block-colour.html#%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E7%9A%84%E9%A2%9C%E8%89%B2%E5%80%BC');
    },
    validator: function (text) {
        // Update the current block's colour to match.
        this.getSourceBlock().setColour(text);
    },
    mutationToDom: function (workspace) {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('colour', this.getColour());
        return container;
    },
    domToMutation: function (container) {
        this.setColour(container.getAttribute('colour'));
    }
};
/**
 * Check to see if more than one field has this name.
 * Highly inefficient (On^2), but n is small.
 * @param {!Blockly.Block} referenceBlock Block to check.
 */
function fieldNameCheck(referenceBlock) {
    if (!referenceBlock.workspace) {
        // Block has been deleted.
        return;
    }
    var name = referenceBlock.getFieldValue('FIELDNAME').toLowerCase();
    var count = 0;
    var blocks = referenceBlock.workspace.getAllBlocks(false);
    for (var i = 0, block; block = blocks[i]; i++) {
        var otherName = block.getFieldValue('FIELDNAME');
        if (!block.disabled && !block.getInheritedDisabled() &&
            otherName && otherName.toLowerCase() == name) {
            count++;
        }
    }
    var msg = (count > 1) ?
        '提示：有 ' + count + '个字段积木具有此名称。' : null;
    referenceBlock.setWarningText(msg);
}

/**
 * Check to see if more than one input has this name.
 * Highly inefficient (On^2), but n is small.
 * @param {!Blockly.Block} referenceBlock Block to check.
 */
function inputNameCheck(referenceBlock) {
    if (!referenceBlock.workspace) {
        // Block has been deleted.
        return;
    }
    var name = referenceBlock.getFieldValue('INPUTNAME').toLowerCase();
    var count = 0;
    var blocks = referenceBlock.workspace.getAllBlocks(false);
    for (var i = 0, block; block = blocks[i]; i++) {
        var otherName = block.getFieldValue('INPUTNAME');
        if (!block.disabled && !block.getInheritedDisabled() &&
            otherName && otherName.toLowerCase() == name) {
            count++;
        }
    }
    var msg = (count > 1) ?
        '有' + count + '个具有此名称的输入积木。' : null;
    referenceBlock.setWarningText(msg);
}