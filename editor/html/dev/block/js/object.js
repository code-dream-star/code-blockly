Blockly.defineBlocksWithJsonArray([{
    "type": "object_null",
    "message0": "建造一个空对象",
    "inputsInline": true,
    "output": "Object",
    "colour": "#a073ff",
    "tooltip": "建造一个空的对象，具体内容可以自己设置。",
    "helpUrl": ""
}, {
    "type": "object_set",
    "message0": "设置对象 %1 %2 里的 %3 属性为 %4 %5",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "object",
            "check": "Object"
        },
        {
            "type": "input_value",
            "name": "key",
            "check": "String"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "value"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#a073ff",
    "tooltip": "设置属性。",
    "helpUrl": ""
}, {
    "type": "object_get",
    "message0": "获取对象 %1 %2 里 %3 属性的值",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "object",
            "check": "Object"
        },
        {
            "type": "input_value",
            "name": "key",
            "check": "String"
        },
    ],
    "inputsInline": true,
    "output": null,
    "colour": "#a073ff",
    "tooltip": "获取属性的值。",
    "helpUrl": ""
}, {
    "type": "object_copy",
    "message0": "复制对象 %1 %2 到 %3 %4 对象里。",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "target",
            "check": "Object"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "object",
            "check": "Object"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#a073ff",
    "tooltip": "复制对象里的所有属性到另外一个对象里。",
    "helpUrl": ""
}, {
    "type": "object_inc",
    "message0": "对象 %1 %2 里是否存在 %3 属性",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "object",
            "check": "Object"
        },
        {
            "type": "input_value",
            "name": "key",
            "check": "String"
        },
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "#a073ff",
    "tooltip": "判断某个对象是否存在某个属性。",
    "helpUrl": ""
}, {
    "type": "object_geto",
    "message0": "获取对象 %1 %2 的 %3",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "object",
            "check": "Object"
        },
        {
            "type": "field_dropdown",
            "name": "option",
            "options": [
                [
                    "项数（数字）",
                    "length"
                ],
                [
                    "所有属性（列表）",
                    "keys"
                ],
                [
                    "所有值（列表）",
                    "values"
                ]
            ]
        }
    ],
    "inputsInline": true,
    "output": [
        "Number",
        "Array"
    ],
    "colour": "#a073ff",
    "tooltip": "获取对象的项数等数据。",
    "helpUrl": ""
}, {
    "type": "object_delete",
    "message0": "删除对象 %1 %2 中的 %3 属性",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "object",
            "check": "Object"
        },
        {
            "type": "input_value",
            "name": "key",
            "check": "String"
        },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#a073ff",
    "tooltip": "删除对象的某个属性值",
    "helpUrl": ""
}, {
    "type": "object_freeze",
    "message0": "冻结对象 %1",
    "args0": [
        {
            "type": "input_value",
            "name": "object",
            "check": "Object"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#a073ff",
    "tooltip": "冻结某个对象，冻结后不可以用代码修改，建造，删除它的属性值，只能读取。",
    "helpUrl": ""
}, {
    "type": "object_isfreeze",
    "message0": "对象 %1 是否已冻结",
    "args0": [
        {
            "type": "input_value",
            "name": "object",
            "check": "Object"
        }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "#a073ff",
    "tooltip": "查看某个对象是否被冻结。",
    "helpUrl": ""
}]);

Blockly.JavaScript['object_freeze'] = function (block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `Object.freeze(${value_object || "({})"});\n`;
    return code;
};
Blockly.JavaScript['object_null'] = function (block) {
    return ["{}", Blockly.JavaScript.ORDER_NONE];;
};
Blockly.JavaScript['object_isfreeze'] = function (block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `Object.isFrozen(${value_object || "({})"})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_copy'] = function (block) {
    var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `Object.assign(${value_object || "({})"},${value_target || "{}"});\n`;
    return code;
};
Blockly.JavaScript['object_delete'] = function (block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var text_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `delete ${value_object || "({})"}[${text_key ? text_key : null}];\n`;
    return code;
};
Blockly.JavaScript['object_set'] = function (block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var text_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_object || "({})"}[${text_key ? text_key : null}] = ${value_value ? text_key : null};\n`;
    return code;
};
Blockly.JavaScript['object_inc'] = function (block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var text_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `('${text_key}' in ${value_object || "({})"})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_get'] = function (block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var text_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_object || "({})"}[${text_key ? text_key : null}]`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_geto'] = function (block) {
    var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_option = block.getFieldValue('option');
    if (dropdown_option == "length") { var code = `Object.keys(${value_object || "{}"}).length`; } else { var code = `Object.${dropdown_option}(${value_object || "({})"})`; }
    return [code, Blockly.JavaScript.ORDER_NONE];
};
