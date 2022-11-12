//css积木
Blockly.Blocks['css_background_color'] = {
    init: function() {
      this.appendValueInput("color")
          .setCheck("String")
          .appendField("设置背景颜色");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(color.css);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['css_background_color'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `background: ${value_name}`;
    return code;
  };


  Blockly.Blocks['css_background_image'] = {
    init: function() {
      this.appendValueInput("url")
          .setCheck("String")
          .appendField("设置背景图片   URL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['css_background_image'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.Blocks['css_Background_Image_Style'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("设置背景图片")
          .appendField(new Blockly.FieldDropdown([["水平平铺和垂直平铺","Horizontal and vertical tiling"], ["水平平铺","level of tile"], ["垂直平铺","Vertical flat out"], ["图像不平铺","image is not tiled"]]), "drop-down menu");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['css_Background_Image_Style'] = function(block) {
    var dropdown_drop_down_menu = block.getFieldValue('drop-down menu');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };


  Blockly.Blocks['css_Text_alignment'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("设置文本对齐方式")
          .appendField(new Blockly.FieldDropdown([["左对齐","left"], ["右对齐","right"], ["居中对齐","center"]]), "drop-down menu");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['css_Text_alignment'] = function(block) {
    var dropdown_drop_down_menu = block.getFieldValue('drop-down menu');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.Blocks['css_Setting_Text_Embellishments'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("设置文本")
          .appendField(new Blockly.FieldDropdown([["中划线","line-through"], ["下划线","underline"], ["去掉线 ","none"], ["上划线","overline"]]), "drop-down menu");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['css_Setting_Text_Embellishments'] = function(block) {
    var dropdown_drop_down_menu = block.getFieldValue('drop-down menu');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.Blocks['css_Setting_Text_rientation'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("设置文本方向")
          .appendField(new Blockly.FieldDropdown([["从左到右","left"], ["从右到左","right"], ["从父元素继承 direction 属性的值","inheritance"]]), "drop-down menu");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['css_Setting_Text_rientation'] = function(block) {
    var dropdown_drop_down_menu = block.getFieldValue('drop-down menu');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };