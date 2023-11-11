/**
 * 方块(voxels)
 * 1145141919810个
 * 文档×
 */
Blockly.Blocks['voxels_shape'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取 地形的")
            .appendField(new Blockly.FieldDropdown([["X", "x"], ["Y", "y"], ["Z", "z"]]), "NAME")
            .appendField("轴总长");
        this.setOutput(true, null);
        this.setColour("#FF7300");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['voxels_shape'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: 汇编成 JavaScript 代码变量
    var code = `voxels.shape.${dropdown_name}`;
    // TODO: 将 ORDER_NONE 更改为正确的强度。
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['voxels_id'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("将方块名");
        this.appendDummyInput()
            .appendField("转换为 方块ID");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#FF7300");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['voxels_id'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `voxels.id(${value_name})`;
    // TODO: 将 ORDER_NONE 更改为正确的强度。
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['voxels_name'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("将方块ID");
        this.appendDummyInput()
            .appendField("转换为 方块名");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#FF7300");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['voxels_name'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `voxels.name(${value_name})`;
    // TODO: 将 ORDER_NONE 更改为正确的强度。
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['voxels_setvoxel'] = {
    init: function () {
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("设置 x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("voxel")
            .setCheck(["String", "Number"])
            .appendField("坐标的方块为");
        this.appendValueInput("rotation")
            .setCheck("Number")
            .appendField("旋转码");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF7300");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['voxels_setvoxel'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var value_voxel = Blockly.JavaScript.valueToCode(block, 'voxel', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rotation = Blockly.JavaScript.valueToCode(block, 'rotation', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `voxels.setVoxel(${value_x},${value_y},${value_z},${value_voxel},${value_rotation});\n`;
    return code;
};

Blockly.Blocks['voxels_setvoxelid'] = {
    init: function () {
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("设置 x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("voxel")
            .setCheck(["Number"])
            .appendField("坐标的方块万位ID为");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF7300");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['voxels_setvoxelid'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var value_voxel = Blockly.JavaScript.valueToCode(block, 'voxel', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `voxels.setVoxelId(${value_x},${value_y},${value_z},${value_voxel});\n`;
    return code;
};

Blockly.Blocks['voxels_breakvoxel'] = {
    init: function () {
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("消除 x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("x");
        this.appendDummyInput()
            .appendField("的方块")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#FF7300");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['voxels_breakvoxel'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var value_voxel = Blockly.JavaScript.valueToCode(block, 'voxel', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `voxels.setVoxelId(${value_x},${value_y},${value_z},${value_voxel});\n`;
    return code;
};


Blockly.Blocks['voxels_getvoxel'] = {
    init: function () {
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("设置 x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("x");
        this.appendDummyInput()
            .appendField("的方块ID")
        this.setInputsInline(true);
        this.setOutput(true, ["Number", "String"]);
        this.setColour("#FF7300");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['voxels_getvoxel'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `voxels.getVoxel(${value_x},${value_y},${value_z});\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['voxels_getvoxelrotation'] = {
    init: function () {
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("设置 x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("x");
        this.appendDummyInput()
            .appendField("的方块旋转码")
        this.setInputsInline(true);
        this.setOutput(true, ["Number", "String"]);
        this.setColour("#FF7300");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['voxels_getvoxelrotation'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `voxels.getVoxelRotation(${value_x},${value_y},${value_z});\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['voxels_getvoxelid'] = {
    init: function () {
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("获取 x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("x");
        this.appendDummyInput()
            .appendField("的方块万位ID")
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#FF7300");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['voxels_getvoxelid'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `voxels.getVoxelId(${value_x},${value_y},${value_z});\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};