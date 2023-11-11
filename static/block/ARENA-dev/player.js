Blockly.Blocks['player_get'] = {
    init: function () {
        this.appendValueInput("player")
            .appendField("获取玩家")
            .setCheck(null)
        this.appendDummyInput()
            .appendField("的")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["名字", "name"],
                    ["boxId", "boxId"],
                    ["userKey", "userKey"],
                    ["出生点", "spawnPoint"],
                    ["活动范围限制", "movementBounds"],
                    ["禁言状态", "muted"],
                    ["颜色", "color"],
                    ["发光度", "emissive"],
                    ["隐身状态", "invisible"],
                    ["名字显示状态", "showName"],
                    ["缩放比例", "scale"],
                    ["金属质感", "metalness"],
                    ["反光度", "shininess"],
                    ["当前链接", "url"],
                    ["死亡状态", "dead"],
                    ["视角", "cameraEntity"],
                    ["视角模式", "cameraMode"],
                    ["镜头位置", "cameraPosition"],
                    ["镜头目标点", "cameraTarget"],
                    ["镜头向上矢量", "cameraUp"],
                    ["3D光标", "enable3DCursor"],
                    ["鼠标左键/虚拟按钮A键可使用状态", "enableAction0"],
                    ["鼠标右键/虚拟按钮B键可使用状态", "enableAction1"],
                    ["鼠标左键/虚拟按钮A键状态", "action0Button"],
                    ["鼠标右键/虚拟按钮B键状态", "action1Button"],
                    ["下蹲按钮状态", "crouchButton"],
                    ["玩家朝向", "facingDirection"],
                    ["跳跃按钮状态", "jumpButton"],
                    ["步行按钮状态", "walkButton"],
                    ["可飞行状态", "canFly"],
                    ["幽灵状态", "spectator"],
                    ["可跳跃状态", "enableJump"],
                    ["可二段跳跃状态", "enableDoubleJump"],
                    ["最大步行速度", "walkSpeed"],
                    ["最大奔跑速度", "runSpeed"],
                    ["奔跑加速度", "runAcceleration"],
                    ["跳跃力度", "jumpPower"],
                    ["跳跃速度", "jumpSpeedFactor"],
                    ["跳跃加速率", "jumpAccelerationFactor"],
                    ["二段跳力度", "doubleJumpPower"],
                    ["蹲着走路的速度", "crouchSpeed"],
                    ["蹲着走路的加速度", "crouchAcceleration"],
                    ["最大飞行速度", "flySpeed"],
                    ["飞行加速度", "flyAcceleration"],
                    ["游泳加速度", "swimAcceleration"],
                    ["最大游泳速度", "swimSpeed"],
                    ["步行加速度", "walkAcceleration"],
                    ["运动状态", "moveState"],
                    ["不行状态", "walkState"],
                    ["世界色调", "colorLUT"],
                ]), "GET");
        this.setOutput(true, null);
        this.setColour("#9749D6");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['player_get'] = function (block) {
    var get = block.getFieldValue('GET');
    var code = `entity.player.${get}`;
    return code;
};


Blockly.Blocks['player_set'] = {
    init: function () {
        this.appendValueInput("player")
            .appendField("设置玩家")
        this.appendValueInput("attribute")
            .appendField("的")
            .appendField(new Blockly.FieldDropdown(
                [
                    ["名字", "name"],
                    ["boxId", "boxId"],
                    ["userKey", "userKey"],
                    ["出生点", "spawnPoint"],
                    ["活动范围限制", "movementBounds"],
                    ["禁言状态", "muted"],
                    ["颜色", "color"],
                    ["发光度", "emissive"],
                    ["隐身状态", "invisible"],
                    ["名字显示状态", "showName"],
                    ["缩放比例", "scale"],
                    ["金属质感", "metalness"],
                    ["反光度", "shininess"],
                    ["当前链接", "url"],
                    ["死亡状态", "dead"],
                    ["视角", "cameraEntity"],
                    ["视角模式", "cameraMode"],
                    ["镜头位置", "cameraPosition"],
                    ["镜头目标点", "cameraTarget"],
                    ["镜头向上矢量", "cameraUp"],
                    ["3D光标", "enable3DCursor"],
                    ["鼠标左键/虚拟按钮A键可使用状态", "enableAction0"],
                    ["鼠标右键/虚拟按钮B键可使用状态", "enableAction1"],
                    ["鼠标左键/虚拟按钮A键状态", "action0Button"],
                    ["鼠标右键/虚拟按钮B键状态", "action1Button"],
                    ["下蹲按钮状态", "crouchButton"],
                    ["玩家朝向", "facingDirection"],
                    ["跳跃按钮状态", "jumpButton"],
                    ["步行按钮状态", "walkButton"],
                    ["可飞行状态", "canFly"],
                    ["幽灵状态", "spectator"],
                    ["可跳跃状态", "enableJump"],
                    ["可二段跳跃状态", "enableDoubleJump"],
                    ["最大步行速度", "walkSpeed"],
                    ["最大奔跑速度", "runSpeed"],
                    ["奔跑加速度", "runAcceleration"],
                    ["跳跃力度", "jumpPower"],
                    ["跳跃速度", "jumpSpeedFactor"],
                    ["跳跃加速率", "jumpAccelerationFactor"],
                    ["二段跳力度", "doubleJumpPower"],
                    ["蹲着走路的速度", "crouchSpeed"],
                    ["蹲着走路的加速度", "crouchAcceleration"],
                    ["最大飞行速度", "flySpeed"],
                    ["飞行加速度", "flyAcceleration"],
                    ["游泳加速度", "swimAcceleration"],
                    ["最大游泳速度", "swimSpeed"],
                    ["步行加速度", "walkAcceleration"],
                    ["运动状态", "moveState"],
                    ["不行状态", "walkState"],
                    ["世界色调", "colorLUT"],
                ]), "SET")
            .appendField("为");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#9749D6");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['player_set'] = function (block) {
    var set = block.getFieldValue('SET');
    var attribute = Blockly.JavaScript.valueToCode(block, 'attribute', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `entity.player.${set} = ${attribute}`;
    return code;
};


Blockly.Blocks['player_sound_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取当玩家")
        this.appendValueInput("player")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["按下左键/虚拟按键A时", "action0Sound"],
                ["按下右键/虚拟按键B时", "action1Sound"],
                ["按下下蹲时", "crouchSound"],
                ["按下跳跃时", "jumpSound"],
                ["触发二段跳时", "doubleJumpSound"],
                ["落地时", "landSound"],
                ["进入液体时", "enterWaterSound"],
                ["离开液体时", "leaveWaterSound"],
                ["正在游泳时", "swimSound"],
                ["重生时", "spawnSound"],
                ["行走时", "stepSound"],
                ["开始飞行时", "startFlySound"],
                ["结束飞行时", "stopFlySound"]
            ]), "SOUND")
            .appendField("播放的音效为");
        this.setOutput(true, null);
        this.setColour("#9749D6");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['player_sound_get'] = function (block) {
    var sound = block.getFieldValue('SOUND');
    var code = `entity.player.${sound}`;
    return code;
};


Blockly.Blocks['player_sound_set'] = {
    init: function () {
        this.appendValueInput("player")
            .appendField("设置当玩家")
            .setCheck(null)
        this.appendValueInput("entity")
            .appendField(new Blockly.FieldDropdown([
                ["按下左键/虚拟按键A时", "action0Sound"],
                ["按下右键/虚拟按键B时", "action1Sound"],
                ["按下下蹲时", "crouchSound"],
                ["按下跳跃时", "jumpSound"],
                ["触发二段跳时", "doubleJumpSound"],
                ["落地时", "landSound"],
                ["进入液体时", "enterWaterSound"],
                ["离开液体时", "leaveWaterSound"],
                ["正在游泳时", "swimSound"],
                ["重生时", "spawnSound"],
                ["行走时", "stepSound"],
                ["开始飞行时", "startFlySound"],
                ["结束飞行时", "stopFlySound"]
            ]), "SOUND")
            .appendField("播放的音效为");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#9749D6");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['player_sound_set'] = function (block) {
    var sound = block.getFieldValue('SOUND');
    var attribute = Blockly.JavaScript.valueToCode(block, 'attribute', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `entity.player.${sound} = ${attribute}`;
    return code;
};
