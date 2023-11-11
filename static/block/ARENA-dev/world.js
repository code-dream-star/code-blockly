
Blockly.Blocks['world_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取")
            .appendField(new Blockly.FieldDropdown([
                ["地图名称", "projectName"],
                ["世界当前的Tick计数", "currentTick"],
                ["世界的重力", "gravity"],
                ["空气阻力", "airFriction"],
                ["地图背景音乐", "ambientSound"],
                ["当玩家进入地图时播放的音效", "playerJoinSound"],
                ["当玩家离开地图时播放的音效", "playerLeaveSound"],
                ["方块被放置时播放的音效", "placeVoxelSound"],
                ["方块被破坏时播放的音效", "breakVoxelSound"],
                ["最大雾量", "maxFog"],
                ["雾的颜色", "fogColor"],
                ["雾的起始距离", "fogStartDistance"],
                ["雾的起始高度", "fogHeightOffset"],
                ["雾的均匀密度", "fogUniformDensity"],
                ["雾衰减的速率", "fogHeightFalloff"],
                ["雨的速度", "rainSpeed"],
                ["雨的颜色", "rainColor"],
                ["雨的方向", "rainDirection"],
                ["雨的密度", "rainDensity"],
                ["雨的扰动幅度", "rainInterference"],
                ["雨滴的最小直径", "rainSizeLo"],
                ["雨滴的最大直径", "rainSizeHi"],
                ["雪花颜色", "snowColor"],
                ["雪花纹理", "snowTexture"],
                ["雪的密度", "snowDensity"],
                ["雪花下落速度", "snowFallSpeed"],
                ["雪花自旋速度", "snowSpinSpeed"],
                ["雪花最小直径", "snowSizeLo"],
                ["雪花最大半径", "snowSizeHi"],
                ["天空的照明类型", "lightMode"],
                ["太阳运动的频率", "sunFrequency"],
                ["太阳在天空的位置", "sunPhase"],
                ["月亮的相位", "lunarPhase"],
                ["太阳光照明方向", "sunDirection"],
                ["太阳光颜色亮度", "sunLight"],
                ["环境光在-X轴方向的亮度", "skyLeftLight"],
                ["环境光在+X轴方向的亮度", "skyRightLight"],
                ["环境光在-Y轴方向的颜色亮度", "skyBottomLight"],
                ["环境光在+Y轴方向的颜色亮度", "skyTopLight"],
                ["环境光在+Z轴方向的颜色亮度", "skyBackLight"],
                ["当前地图所在的URL链接地址", "url"]
            ]), "GET")
        this.setOutput(true, null);
        this.setColour("#0397F0");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['world_get'] = function (block) {
    var get = block.getFieldValue('GET');
    var code = `world.${get}`;
    return code;
};


Blockly.Blocks['world_set'] = {
    init: function () {
        this.appendValueInput("attribute")
            .setCheck(null)
            .appendField("设置")
            .appendField(new Blockly.FieldDropdown([
                ["世界当前的Tick计数", "currentTick"],
                ["世界的重力", "gravity"],
                ["空气阻力", "airFriction"],
                ["地图背景音乐", "ambientSound"],
                ["当玩家进入地图时播放的音效", "playerJoinSound"],
                ["当玩家离开地图时播放的音效", "playerLeaveSound"],
                ["方块被放置时播放的音效", "placeVoxelSound"],
                ["方块被破坏时播放的音效", "breakVoxelSound"],
                ["最大雾量", "maxFog"],
                ["雾的颜色", "fogColor"],
                ["雾的起始距离", "fogStartDistance"],
                ["雾的起始高度", "fogHeightOffset"],
                ["雾的均匀密度", "fogUniformDensity"],
                ["雾衰减的速率", "fogHeightFalloff"],
                ["雨的速度", "rainSpeed"],
                ["雨的颜色", "rainColor"],
                ["雨的方向", "rainDirection"],
                ["雨的密度", "rainDensity"],
                ["雨的扰动幅度", "rainInterference"],
                ["雨滴的最小直径", "rainSizeLo"],
                ["雨滴的最大直径", "rainSizeHi"],
                ["雪花颜色", "snowColor"],
                ["雪花纹理", "snowTexture"],
                ["雪的密度", "snowDensity"],
                ["雪花下落速度", "snowFallSpeed"],
                ["雪花自旋速度", "snowSpinSpeed"],
                ["雪花最小直径", "snowSizeLo"],
                ["雪花最大半径", "snowSizeHi"],
                ["天空的照明类型", "lightMode"],
                ["太阳运动的频率", "sunFrequency"],
                ["太阳在天空的位置", "sunPhase"],
                ["月亮的相位", "lunarPhase"],
                ["太阳光照明方向", "sunDirection"],
                ["太阳光颜色亮度", "sunLight"],
                ["环境光在-X轴方向的亮度", "skyLeftLight"],
                ["环境光在+X轴方向的亮度", "skyRightLight"],
                ["环境光在-Y轴方向的颜色亮度", "skyBottomLight"],
                ["环境光在+Y轴方向的颜色亮度", "skyTopLight"],
                ["环境光在+Z轴方向的颜色亮度", "skyBackLight"],
                ["当前地图所在的URL链接地址", "url"]
            ]), "SET")
            .appendField("为");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0397F0");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['worldset'] = function (block) {
    var set = block.getFieldValue('SET');
    var attribute = Blockly.JavaScript.valueToCode(block, 'attribute', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `entity.player.${set} = ${attribute}`;
    return code;
};


Blockly.Blocks['world_say'] = {
    init: function () {
        this.appendValueInput("message")
            .setCheck(null)
            .appendField("广播消息");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0397F0");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['world_say'] = function (block) {
    var message = "`" + Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC); + "`"
    var code = `world.say(${message});\n`;
    return code;
};


Blockly.Blocks['world_event'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["当玩家在聊天窗口说话时", "onChat"],
                ["当玩家加入地图时", "onPlayerJoin"],
                ["当玩家离开地图时", "onPlayerLeave"],
                ["当玩家互动时", "onInteract"],
                ["当玩家用鼠标点击实体时", "onClick"],
                ["当玩家按下按钮时", "onPress"],
                ["当玩家加入地图时", "onPlayerJoin"],
                ["当玩家在聊天窗口说话时", "onChat"],
                ["当玩家加入地图时", "onPlayerJoin"],
                ["当玩家在聊天窗口说话时", "onChat"],
                ["当玩家加入地图时", "onPlayerJoin"],
                ["当玩家在聊天窗口说话时", "onChat"],
                ["当玩家加入地图时", "onPlayerJoin"],
                ["当玩家在聊天窗口说话时", "onChat"],
                ["当玩家加入地图时", "onPlayerJoin"],
            ]), "NAME");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setColour("#0397F0");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['world_event'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: 汇编成 JavaScript 代码变量
    var code = '...;\n';
    return code;
};