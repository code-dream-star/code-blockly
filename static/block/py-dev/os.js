/**
 * os标签
 * 30个
 * 文档×
 */

Blockly.Blocks['os_access'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("检验权限模式")
            .appendField(new Blockly.FieldTextInput("路径"), "PATH")
            .appendField(new Blockly.FieldDropdown([["path是否存在", "F_OK"], ["path是否可读", "R_OK"], ["path是否可写", "W_OK"], ["path是否可执行", "X_OK"]]), "MODE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['os_access'] = function (block) {
    var path = block.getFieldValue('PATH');
    var mode = block.getFieldValue('MODE');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};


Blockly.Blocks['os_chdir'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("改变当前工作目录")
            .appendField(new Blockly.FieldTextInput("新路径"), "PATH");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['os_chdir'] = function (block) {
    var path = block.getFieldValue('PATH');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};


Blockly.Blocks['os_chflags'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置")
            .appendField(new Blockly.FieldTextInput("路径"), "PATH")
            .appendField("的数字标记为")
            .appendField(new Blockly.FieldDropdown([["非转储文件", "stat.UF_NODUMP"], ["只读文件", "stat.UF_IMMUTABLE"], ["仅添加内容", "stat.UF_APPEND"], ["不可删除文件", "stat.UF_NOUNLINK"], ["目录不透明", "stat.UF_OPAQUE"], ["可存档文件(超级用户)", "stat.SF_ARCHIVED"], ["只读文件(超级用户)", "stat.SF_IMMUTABLE"], ["仅添加内容(超级用户)", "stat.SF_APPEND"], ["不可删除文件(超级用户)", "stat.SF_NOUNLINK"], ["快照文件(超级用户)", "stat.SF_SNAPSHOT"]]), "Flags");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['os_chflags'] = function (block) {
    var path = block.getFieldValue('PATH');
    var flags = block.getFieldValue('Flags');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_Permission_detection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("检测路径")
            .appendField(new Blockly.FieldTextInput(""), "input")
            .appendField("是否")
            .appendField(new Blockly.FieldDropdown([["存在", "exist"], ["可读", "readable"], ["可写", "OPTIONNAME"], ["可执行", "OPTIONNAME"]]), "Drop-down");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['os_Permission_detection'] = function (block) {
    var text_input = block.getFieldValue('input');
    var dropdown_drop_down = block.getFieldValue('Drop-down');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_set_permissions'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("更改文件所有者")
            .appendField("要更改权限的文件路径")
            .appendField(new Blockly.FieldTextInput(""), "path")
            .appendField(new Blockly.FieldLabelSerializable("所属用户 ID"), "uid")
            .appendField(new Blockly.FieldNumber(10), "figure")
            .appendField(new Blockly.FieldLabelSerializable("所属用户组 ID"), "user")
            .appendField(new Blockly.FieldNumber(0), "gid");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_set_permissions'] = function (block) {
    var text_path = block.getFieldValue('path');
    var number_figure = block.getFieldValue('figure');
    var number_gid = block.getFieldValue('gid');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_modifying_the_root_directory'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("更改当前进程的根目录为指定的目录")
            .appendField("要设置为根目录的目录")
            .appendField(new Blockly.FieldTextInput(""), "path");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_modifying_the_root_directory'] = function (block) {
    var text_path = block.getFieldValue('path');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};


Blockly.Blocks['os_close_descriptor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("关闭指定的文件描述符 ")
            .appendField("要关闭的文件描述符为")
            .appendField(new Blockly.FieldTextInput(""), "path");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['os_close_descriptor'] = function (block) {
    var text_path = block.getFieldValue('path');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};


Blockly.Blocks['os_close_all_descriptors'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("关闭所有的文件描述符 ")
            .appendField("最小文件描述符为")
            .appendField(new Blockly.FieldTextInput(""), "minimum")
            .appendField("最大文件描述符为")
            .appendField(new Blockly.FieldTextInput(""), "Max");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['os_close_all_descriptors'] = function (block) {
    var text_minimum = block.getFieldValue('minimum');
    var text_max = block.getFieldValue('Max');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};

Blockly.Blocks['os_copy_the_file_descriptor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("复制文件描述符 ")
            .appendField("要复制的文件描述符为")
            .appendField(new Blockly.FieldTextInput(""), "descriptor");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['os_copy_the_file_descriptor'] = function (block) {
    var text_descriptor = block.getFieldValue('descriptor');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_descriptor_substitution'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("把描述符")
            .appendField(new Blockly.FieldTextInput(""), "descriptor")
            .appendField("替换给")
            .appendField(new Blockly.FieldTextInput(""), "Replace");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_descriptor_substitution'] = function (block) {
    var text_descriptor = block.getFieldValue('descriptor');
    var text_replace = block.getFieldValue('Replace');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_descriptor_changedir'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("通过文件描述符")
            .appendField(new Blockly.FieldTextInput(""), "descriptor")
            .appendField("改变当前工作目录");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_descriptor_changedir'] = function (block) {
    var text_descriptor = block.getFieldValue('descriptor');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};


Blockly.Blocks['os_modifying_file_permissions'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("改变文件")
            .appendField(new Blockly.FieldTextInput(""), "input")
            .appendField("的文件权限为");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_modifying_file_permissions'] = function (block) {
    var text_input = block.getFieldValue('input');
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_type_selection'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["系统文件锁定的执法行动", "ENFMT"], ["在执行之后保存文字和图片", "ISVTX"], ["对于拥有者读的权限", "IREAD"], ["对于拥有者写的权限", "IWRITE"], ["对于拥有者执行的权限", "IEXEC"], ["对于拥有者读、写、执行的权限", "IRWXU"], ["对于拥有者读的权限", "IRUSR"], ["对于拥有者执行的权限", "IXUSR"], ["对于同组的人读写执行的权限", "IRWXG"], ["对于同组读的权限", "IRGRP"], ["对于同组写的权限", "IWGRP"], ["对于同组执行的权限", "IXGRP"], ["对于其他组读写执行的权限", "IRWXO"], ["对于其他组读的权限", "IROTH"], ["对于其他组写的权限", "IWOTH"], ["设置 UID 位", "ISUID"], ["设置组 ID 位", "ISGID"]]), "pull-down");
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_type_selection'] = function (block) {
    var dropdown_pull_down = block.getFieldValue('pull-down');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_change_file_ownership'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("修改一个文件的所有权  ")
            .appendField("文件描述符")
            .appendField(new Blockly.FieldTextInput("default"), "fd")
            .appendField("文件所有者的用户id")
            .appendField(new Blockly.FieldTextInput("default"), "uid")
            .appendField("文件所有者的用户组id")
            .appendField(new Blockly.FieldTextInput("default"), "gid");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_change_file_ownership'] = function (block) {
    var text_fd = block.getFieldValue('fd');
    var text_uid = block.getFieldValue('uid');
    var text_gid = block.getFieldValue('gid');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};


Blockly.Blocks['os_force_write'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("强制将文件写入磁盘 ")
            .appendField("文件描述符")
            .appendField(new Blockly.FieldTextInput(""), "fd");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_force_write'] = function (block) {
    var text_fd = block.getFieldValue('fd');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_create_file'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("创建一个文件对象")
            .appendField("通过文件描述符")
            .appendField(new Blockly.FieldTextInput(""), "fd");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_create_file'] = function (block) {
    var text_fd = block.getFieldValue('fd');
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_file_setting'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["文件是只读的", "Read_only"], ["文件是可以读写的", "read-write"], ["以二进制形式打开文件", "Binary_system"], ["以文本形式打开文件", "text"]]), "pull-down");
        this.setInputsInline(false);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_file_setting'] = function (block) {
    var dropdown_pull_down = block.getFieldValue('pull-down');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};


Blockly.Blocks['os_system_configuration_information'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("打开的文件的系统配置信息")
            .appendField("打开的文件的描述符为")
            .appendField(new Blockly.FieldTextInput(""), "input");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_system_configuration_information'] = function (block) {
    var text_input = block.getFieldValue('input');
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};


Blockly.Blocks['os_acquisition_state'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取描述符的状态")
            .appendField("状态描述符")
            .appendField(new Blockly.FieldTextInput(""), "input");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_acquisition_state'] = function (block) {
    var text_input = block.getFieldValue('input');
    // TODO: 汇编成 Python 代码变量
    var code = '...;\n';
    return code;
};



Blockly.Blocks['os_status'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("描述符的状态");
        this.setOutput(true, null);
        this.setColour(color.os);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python['os_status'] = function (block) {
    // TODO: 汇编成 Python 代码变量
    var code = '...';
    // TODO: 将 ORDER_NONE 更改为正确的强度。
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['os_information_return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取文件描述符")
        .appendField(new Blockly.FieldTextInput(""), "input")
        .appendField("的文件的文件系统的信息");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_information_return'] = function(block) {
  var text_input = block.getFieldValue('input');
  // TODO: 汇编成 Python 代码变量
  var code = '...\n';
  return code;
};

Blockly.Blocks['os_fsync'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("将文件描述符")
        .appendField(new Blockly.FieldTextInput(""), "input")
        .appendField("强制写入硬盘");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_fsync'] = function(block) {
  var text_input = block.getFieldValue('input');
  // TODO: 汇编成 Python 代码变量
  var code = '...\n';
  return code;
};

Blockly.Blocks['os_ftruncate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("裁剪文件描述符")
        .appendField(new Blockly.FieldTextInput(""), "input")
        .appendField("对应的文件")
        .appendField("要裁剪文件大小")
        .appendField(new Blockly.FieldNumber(0), "figure");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_ftruncate'] = function(block) {
  var text_input = block.getFieldValue('input');
  var number_figure = block.getFieldValue('figure');
  // TODO: 汇编成 Python 代码变量
  var code = '...\n';
  return code;
};


Blockly.Blocks['os_getcwd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取当前工作目录");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_getcwd'] = function(block) {
  // TODO: 汇编成 Python 代码变量
  var code = '...\n';
  return code;
};

Blockly.Blocks['os_getcwdu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取当前工作目录的Unicode对象");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_getcwdu'] = function(block) {
  // TODO: 汇编成 Python 代码变量
  var code = '...';
  // TODO: 将 ORDER_NONE 更改为正确的强度。
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['os_isatty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取文件描述符当前状态");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_isatty'] = function(block) {
  // TODO: 汇编成 Python 代码变量
  var code = '...';
  // TODO: 将 ORDER_NONE 更改为正确的强度。
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['os_lchflags'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("设置路径")
        .appendField(new Blockly.FieldTextInput(""), "input")
        .appendField("的标记为数字标记");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_lchflags'] = function(block) {
  var text_input = block.getFieldValue('input');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: 汇编成 Python 代码变量
  var code = '...\n';
  return code;
};

Blockly.Blocks['os_lchflags'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["非转储文件","NODUMP"], ["文件是只读的","IMMUTABLE"], ["文件只能追加内容","APPEND"], ["文件不可删除","NOUNLINK"], ["目录不透明，需要通过联合堆栈查看","OPAQUE"], ["可存档文件(超级用户可设)","ARCHIVED"], ["文件是只读的(超级用户可设)","IMMUTABLE"], ["文件只能追加内容(超级用户可设)","APPEND"], ["文件不可删除(超级用户可设)","NOUNLINK"], ["文件不可删除(超级用户可设)","SNAPSHOT"]]), "pull-down");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_lchflags'] = function(block) {
  var dropdown_pull_down = block.getFieldValue('pull-down');
  // TODO: 汇编成 Python 代码变量
  var code = '...\n';
  return code;
};


Blockly.Blocks['os_lchflags'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("设置路径")
        .appendField(new Blockly.FieldTextInput(""), "input")
        .appendField("的标记为数字标记");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_lchflags'] = function(block) {
  var text_input = block.getFieldValue('input');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: 汇编成 Python 代码变量
  var code = '...\n';
  return code;
};


Blockly.Blocks['os_lchmod'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("修改连接文件权限路径")
        .appendField(new Blockly.FieldTextInput(""), "input")
        .appendField("为");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['os_lchmod'] = function(block) {
  var text_input = block.getFieldValue('input');
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: 汇编成 Python 代码变量
  var code = '...\n';
  return code;
};