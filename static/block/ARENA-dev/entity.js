Blockly.Blocks['entity_num1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置");
        this.appendValueInput("entity")
            .setCheck("Entity");
        this.appendDummyInput()
            .appendField("实体的")
            .appendField(new Blockly.FieldDropdown([
                ["模型外观路径（Mesh）", "mesh",],
                ["位置", "position",],
                ["旋转角", "meshOrientation",],
                ["缩放", "meshScale",],
                ["颜色", "meshColor",],
                ["隐形", "meshInvisible",],
                ["发光度", "meshEmissive",],
                ["金属感", "meshMetalness",],
                ["反光度", "meshShininess",],
                ["位移", "meshOffset",],
            ]), "option")
            .appendField("为");
        this.valueinput = this.appendValueInput("value")
        this.valueinput.setCheck("String");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EBA74B");
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange() {
        var dropdown_option = this.getFieldValue('option');
        console.log(this)
        if (["position", "meshScale", "meshOffset"].includes(dropdown_option)) {
            this.valueinput.setCheck("Vector3");
        } if (["mesh"].includes(dropdown_option)) {
            this.valueinput.setCheck("String");
        } if (["meshInvisible", "meshEmissive", "meshMetalness", "meshShininess"].includes(dropdown_option)) {
            this.valueinput.setCheck("Number");
        } if (["meshInvisible"].includes(dropdown_option)) {
            this.valueinput.setCheck("Number");
        } if (["meshOrientation"].includes(dropdown_option)) {
            this.valueinput.setCheck("Quaternion");
        } if (["meshInvisible"].includes(dropdown_option)) {
            this.valueinput.setCheck("Boolean");
        } if (["meshColor"].includes(dropdown_option)) {
            this.valueinput.setCheck("RGBAColor");
        }
    }
};

Blockly.JavaScript['entity_num1'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_option = block.getFieldValue('option');
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `${value_entity}.${dropdown_option} = ${value_value};\n`;
    if (["position", "meshOrientation", "meshScale", "meshColor", "meshOffset"].includes(dropdown_option)) {
        code = `${value_entity}.${dropdown_option}.copy(${value_value});\n`;
    }
    return code;
};

Blockly.Blocks['get_entity_num1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取");
        this.appendValueInput("entity")
            .setCheck("Entity");
        this.appendDummyInput()
            .appendField("实体的")
            .appendField(new Blockly.FieldDropdown([
                ["模型外观路径（Mesh）", "mesh",],
                ["位置", "position",],
                ["旋转角", "meshOrientation",],
                ["缩放", "meshScale",],
                ["颜色", "meshColor",],
                ["隐形", "meshInvisible",],
                ["发光度", "meshEmissive",],
                ["金属感", "meshMetalness",],
                ["反光度", "meshShininess",],
                ["位移", "meshOffset",],
            ]), "option")
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("#EBA74B");
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange() {
        var dropdown_option = this.getFieldValue('option');
        console.log(this)
        if (["position", "meshScale", "meshOffset"].includes(dropdown_option)) {
            this.setOutput(true, "Vector3");
        } if (["mesh"].includes(dropdown_option)) {
            this.setOutput(true, "String");
        } if (["meshInvisible", "meshEmissive", "meshMetalness", "meshShininess"].includes(dropdown_option)) {
            this.setOutput(true, "Number");
        } if (["meshInvisible"].includes(dropdown_option)) {
            this.setOutput(true, "Number");
        } if (["meshOrientation"].includes(dropdown_option)) {
            this.setOutput(true, "Quaternion");
        } if (["meshInvisible"].includes(dropdown_option)) {
            this.setOutput(true, "Boolean");
        } if (["meshColor"].includes(dropdown_option)) {
            this.setOutput(true, "RGBAColor");
        }
    }
};

Blockly.JavaScript['get_entity_num1'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_option = block.getFieldValue('option');
    // TODO: 汇编成 JavaScript 代码变量
    var code = `${value_entity}.${dropdown_option}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['entity_num2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置");
        this.appendValueInput("entity")
            .setCheck("Entity");
        this.appendDummyInput()
            .appendField("实体的")
            .appendField(new Blockly.FieldDropdown([
                ["边框界", "bounds",],
                ["碰撞开关", "collides",],
                ["位置固定开关", "fixed",],
                ["跟随物理引擎开关", "gravity",],
                ["粘度", "friction",],
                ["物理质量", "mass",],
                ["弹性", "restitution",],
                ["移动速度", "velocity",],
                ["碰撞力度", "contactForce",],
            ]), "option")
            .appendField("为");
        this.appendValueInput("value")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EBA74B");
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange() {
        var dropdown_option = this.getFieldValue('option');
        console.log(this)
        if (["position", "meshScale", "meshOffset"].includes(dropdown_option)) {
            this.valueinput.setCheck("Vector3");
        } if (["mesh"].includes(dropdown_option)) {
            this.valueinput.setCheck("String");
        } if (["meshInvisible", "meshEmissive", "meshMetalness", "meshShininess"].includes(dropdown_option)) {
            this.valueinput.setCheck("Number");
        } if (["meshInvisible"].includes(dropdown_option)) {
            this.valueinput.setCheck("Number");
        } if (["meshOrientation"].includes(dropdown_option)) {
            this.valueinput.setCheck("Quaternion");
        } if (["meshInvisible"].includes(dropdown_option)) {
            this.valueinput.setCheck("Boolean");
        } if (["meshColor"].includes(dropdown_option)) {
            this.valueinput.setCheck("RGBAColor");
        }
    }
};

Blockly.JavaScript['entity_num2'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_option = block.getFieldValue('option');
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `${value_entity}.${dropdown_option} = ${value_value}\n`;
    return code;
};
Blockly.Blocks['entity_num3'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置");
        this.appendValueInput("entity")
            .setCheck("Entity");
        this.appendDummyInput()
            .appendField("实体的")
            .appendField(new Blockly.FieldDropdown([
                ["当前血量", "hp",],
                ["最大血量", "maxHp",],
            ]), "option")
            .appendField("为");
        this.appendValueInput("value")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EBA74B");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['entity_num3'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_option = block.getFieldValue('option');
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `${value_entity}.${dropdown_option} = ${value_value}\n`;
    return code;
};

Blockly.Blocks['entity_num4'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置");
        this.appendValueInput("entity")
            .setCheck("Entity");
        this.appendDummyInput()
            .appendField("实体的")
            .appendField(new Blockly.FieldDropdown([
                ["平均每秒产生粒子数", "particleRate",],
                ["平均每秒产生粒子随机程度", "particleRateSpread",],
                ["粒子上限数", "particleLimit",],
                ["粒子存活时长", "particleLifetime",],
                ["粒子存活时长随机程度", "particleLifetimeSpread",],
                ["粒子大小随机程度", "particleSizeSpread",],
                ["粒子开始移动等待时长", "particleDamping",],
                ["粒子位置随机程度", "particleNoise",],
                ["粒子方向随机程度", "particleNoiseFrequency",],
            ]), "option")
            .appendField("为");
        this.appendValueInput("value")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EBA74B");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['entity_num4'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_option = block.getFieldValue('option');
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: 汇编成 JavaScript 代码变量
    var code = `${value_entity}.${dropdown_option} = ${value_value}\n`;
    return code;
};