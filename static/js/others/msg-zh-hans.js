// 替换
Object.keys(Blockly.Msg).forEach(key => {
    if ([
        // 不要替换的
        "CONTROLS_IF_TOOLTIP_1",
        "CONTROLS_IF_TOOLTIP_2",
        "CONTROLS_IF_TOOLTIP_3",
        "CONTROLS_IF_TOOLTIP_4",
    ].includes(key)) return;

    Blockly.Msg[key] = Blockly.Msg[key]
        .replace(/块/g, "积木")
        .replace(/块积木/g, "个积木")
        .replace(/true/g, "成立")
        .replace(/false/g, "不成立")
        .replace(/条件为真/g, "条件成立")
        .replace(/条件为假/g, "条件不成立")
        .replace(/值为真/g, "条件成立")
        .replace(/值为假/g, "条件不成立")
        .replace(/真/g, "成立")
        .replace(/假/g, "不成立")
});

Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "如果条件成立，执行一些语句。";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "如果条件成立，则执行第一部分的语句。否则，则执行第二部分的语句。";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "如果第一个条件成立，则执行第一部分的语句。否则，如果第二个成立，则执行第二部分的语句。";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "如果第一个条件成立，则执行第一部分对语句。否则，如果第二个成立，则执行语句的第二部分......如果都不成立，则执行最后一部分的语句。";

Blockly.Msg["DUPLICATE_BLOCK"] = "复制并粘贴";

Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "一个数字。";
Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "工作区";
Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "变量";
Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "创建“赋值%1”";

Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "";
Blockly.Msg["CONTROLS_IF_MSG_THEN"] = "";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "重复执行 %1 次";
Blockly.Msg["CONTROLS_FOR_TITLE"] = "重复执行 %1 从 %2 到 %3 间隔 %4";

Blockly.Msg["MATH_CHANGE_TITLE"] = "将 %1 加 %2";

Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "拼接文本";
Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "合并列表";

Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "定义函数";
Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] = "定义函数";
Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "";
Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "";
Blockly.Msg["PROCEDURE_VARIABLE"] = "参数";
