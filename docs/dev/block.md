# Blockly 块定义 开发规范

块定义描述了块的外观和行为，包括文本，颜色，形状以及它可以连接的其他块。

> <b>源文档：</b><br>
> [中文](https://blockly.tortorse.com/guides/create-custom-blocks/overview.html) 
> [英文](https://developers.google.cn/blockly/guides/create-custom-blocks/define-blocks)

> <b>注意：</b><br>可以使用 [Blockly 开发者工具](dev/blockly-developer-tools.md) 定义大多数块，而不是手动创建下面的代码。

## JSON 格式与 JavaScript API

Blockly 有两种定义块的方式：JSON 对象和 JavaScript 函数。 JSON 格式旨在简化在开发具有不同单词顺序的语言时的 本地化过程。 JSON 格式是定义块的首选方法。

但是，JSON 格式无法直接定义高级功能，例如变形器或验证器。 这些必须通过平台原生代码: JavaScript，Java 或 Swift 编写，通常作为 扩展 实现。

因此我们 Code Blockly 使用的是 JavaScript 来定义块。

使用 Blockly 的原始 JavaScript 实现的应用程序也可以直接将块定义写入较低级别的 Blockly API 函数调用，如下面的各种 JavaScript 示例所示。

`init` 函数创建块的形状。 在此功能的上下文中，关键字 `this` 是正在创建的实际块。

```javascript
Blockly.Blocks["string_length"] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("String")
            .appendField("length of");
        this.setOutput(true, "Number");
        this.setColour(160);
        this.setTooltip("Returns number of letters in the provided text.");
        this.setHelpUrl(
            "http://www.w3schools.com/jsref/jsref_length_string.asp"
        );
    },
};
```

两个示例都加载相同的 `'string_length'` 块。

<img src="./dev/image/1.png" alt="JSON 格式与 JavaScript API-图片">

## 块颜色

块的主色由 `JSON colour` 属性，`block.setColour(...)` 函数定义，或通过使用 `主题` 并定义块样式来定义。

```javascript
init: function() {
  // ...
  this.setColour(160);
}
```

有关更多详细信息，请参见 [块颜色指南](https://blockly.tortorse.com/guides/create-custom-blocks/block-colour.html)。

## 语句连接

用户可以使用 `nextStatement` 和 `previousStatement` 连接器创建块序列。在 Blockly 的标准布局中，这些连接位于顶部和底部，并且块垂直堆叠。

具有前置连接器的块不能具有输出连接器，反之亦然。术语 语句块 指的是没有值输出的块。语句块通常具有前置连接和后续连接。

`nextStatement` 和 `previousStatement` 可以配置 [类型](https://blockly.tortorse.com/guides/create-custom-blocks/type-checks.html) ，但标准块不使用此功能。

## 后续连接

在块的底部创建一个接口，以便其他语句可以堆叠在它下面。具有后续连接但没有前置连接的块通常表示事件，并且可以配置为使用 [帽子](https://blockly.tortorse.com/guides/create-custom-blocks/block-paradigms.html#事件驱动程序.html) 进行渲染 。

<img src="./dev/image/2.png" alt="后续连接-图片">

### 无类型:

```javascript
this.setNextStatement(true); // false implies no next connector, the default
```

### 有类型 (罕见):

```javascript
this.setNextStatement(true, "Action");
```

## 前置连接

在块的顶部创建一个凹口，以便它可以作为一堆语句连接。

具有前置连接的块不能具有输出连接。

<img src="./dev/image/3.png" alt="前置连接-图片">

### 无类型:

```javascript
this.setPreviousStatement(true); // false implies no previous connector, the default
```

### 有类型 (罕见):

```javascript
this.setPreviousStatement(true, "Action");
```

## 块输出

一个块可以具有单个输出，表示为边缘上的凸形拼图连接器。输出连接到值输入。 具有输出的块通常称为 <i>值</i> 块。

<img src="./dev/image/4.png" alt="块输出-图片">

### 无类型:

```javascript
init: function() {
  // ...
  this.setOutput(true);
}
```

### 有类型 (罕见):

```javascript
init: function() {
  // ...
  this.setOutput(true, 'Number');
}
```

具有输出连接器的块也不能具有前置语句槽口。

## 块输入

块具有一个或多个输入，其中每个输入是可以在连接中结束的 标签 和 字段 序列。有三种类型的输入，匹配连接类型：

-   值输入：连接到一个 输出连接 的 <i>值</i>块。`math_arithmetic` 块（加法，减法）是具有两个值输入一个块的例子。
-   语句输入：连接到 前置连接 一个的 语句块。while 循环的嵌套部分是语句输入的示例。
-   虚拟输入：没有块连接。当块配置为使用外部值输入时，其作用类似于换行符。

<img src="./dev/image/5.png" alt="块输入-图片">

JSON 格式和 JavaScript API 使用略有不同的模型来描述其输入。

## JavaScript 中的输入和字段

JavaScript API 包括每种输入类型的 `append` 方法：

```javascript
this.appendDummyInput()
    .appendField("for each")
    .appendField("item")
    .appendField(new Blockly.FieldVariable());
this.appendValueInput("LIST")
    .setCheck("Array")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("in list");
this.appendStatementInput("DO").appendField("do");
```

<img src="./dev/image/6.png" alt="JavaScript 中的输入和字段-图片">

每种方法都可以采用一个标识符字符串，并由代码生成器使用。 虚拟输入很少需要引用，通常未设置标识符。

如上所示，每个方法都通过方法链返回输入对象以进行配置。有三个功能用于配置输入。

### setCheck

```javascript
input.setCheck("Number");
```

此可选功能用于连接输入的类型检查。 如果给定默认值为 null 的参数，则此输入可以连接到任何块。

### setAlign

```javascript
input.setAlign(Blockly.ALIGN_RIGHT);
```

此可选功能用于对齐字段（请参见下文）。 可以将三个自描述值作为该函数的参数传递：`Blockly.ALIGN_LEFT`，`Blockly.ALIGN_RIGHT` 和 `Blockly.ALIGN_CENTRE`。 请注意 “centre” 的英文拼写。默认为左对齐。

在为 RTL（阿拉伯语和希伯来语）设计块时，左右是颠倒的。 因此，`Blockly.ALIGN_RIGHT` 会将字段向左对齐。

### appendField

一旦创建了输入并将其附加到带有 appendInput 的块中，就可以选择将任意数量的 字段 附加到输入中。 这些字段通常用作标签来描述每个输入的用途。

```javascript
input.appendField("hello");
```

<img src="./dev/image/7.png" alt="JavaScript 中的输入和字段-appendField-图片-1">

最简单的字段元素是文本。Blockly 的惯例是使用小写文本，但专有名称除外（例如 Google，SQL）。

输入行可以包含任意数量的字段元素。 可以将多个 `appendField` 调用链接在一起，以有效地将多个字段添加到同一输入行。

```javascript
input
    .appendField("hello")
    .appendField(new Blockly.FieldLabel("Neil", "person"));
```

<img src="./dev/image/8.png" alt="JavaScript 中的输入和字段-appendField-图片-2">

该 `appendField('hello')` 调用实际上是显式使用 FieldLabel 构造函数的快捷方式：`appendField(new Blockly.FieldLabel('hello'))`。唯一希望使用构造函数的时间是在指定类名称时，以便可以使用 CSS 规则设置文本样式。

## 内联与外部

块输入可以呈现为外部或内部。

<img src="./dev/image/9.png" alt="内联与外部-图片">

块定义可以指定一个可选的布尔值，用于控制输入是否为内联。 如果为 `false`，则任何值输入都将在外部（例如左侧的块）。 如果为 `true`，则任何值输入都将是内联的（例如上面的右侧块）。

```javascript
init: function() {
// ...
this.setInputsInline(true);
}
```

如果没有定义，则 Blockly 将使用一些启发式方法来猜测哪种模式最佳。假设 Blockly 做出了正确的选择，将此字段保留为 undefined 是首选，因为不同的语言翻译可以自动具有不同的模式。请参阅本页前面的 `"set %1 to %2"`（外部输入）和 `"put %2 in %1"`（内联输入）的 JSON 示例。

当一个块可能有较小的输入（例如数字）时，请使用内联输入。 如果启用了 `collapse` 配置，则用户可以通过上下文菜单切换此选项（如果工具箱具有分类，则默认为 `true`）。

## 字段

字段定义块中的 UI 元素。 这些包括字符串标签，图像 和 字面量（例如字符串和数字）的输入。 最简单的示例是 `math_number` 块，该块使用 `field_input` 来让用户键入数字。

<img src="./dev/image/10.png" alt="字段-图片">

Blockly 提供了许多内置字段，包括文本输入，颜色选择器和图像。您还可以创建自己的字段.

→ 更多信息参见 [内置字段](https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/overview.html)

→ 更多信息参见 [创建自定义字段](https://blockly.tortorse.com/guides/create-custom-blocks/fields/built-in-fields/overview.html)

## 提示

当用户将鼠标悬停在块上时，工具提示提供即时帮助。如果文本很长，它将自动换行。

```javascript
init: function() {
  this.setTooltip("Tooltip text.");
}
```

在 JavaScript API 中，工具提示也可以定义为函数而不是静态字符串。 这样可以提供动态帮助。 请参见 `math_arithmetic`，以获取根据所选择的下拉选项而变化的工具提示的示例。

```javascript
Blockly.Blocks["math_arithmetic"] = {
    init: function () {
        // ...
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
                MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
                MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
                DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
                POWER: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER,
            };
            return TOOLTIPS[mode];
        });
    },
};
```

使用 JavaScript API，块可以指定一个函数，而不是静态字符串，它返回工具提示字符串。这样就能够允许动态工具提示。请参阅 `math_arithmetic` 示例。

## 帮助网址

块可以具有与它们关联的帮助页面。右键单击该块并从上下文菜单中选择“帮助”，这对于 Blockly for Web 用户是可用的。 如果该值为 `null`，则菜单将显示为灰色。

```javascript
init: function() {
  // ...
  this.setHelpUrl('https://en.wikipedia.org/wiki/For_loop');
}
```

使用 JavaScript API，块可以指定一个函数，而不是指定返回 URL 字符串的静态字符串，从而可以提供动态帮助。

## 更改监听器和验证器

块可以具有更改侦听器功能，这些更改侦听器功能可在工作空间的任何更改（包括与该块无关的功能）上调用。 这些主要用于设置块的警告文本，或在工作空间外部设置类似的用户通知。

通过使用函数调用 `setOnChange` 来添加该函数，如果您计划在所有平台上使用它，则可以在初始化期间设置来完成。

```javascript
Blockly.Extensions.register("warning_on_change", function () {
    // Example validation upon block change:
    this.setOnChange(function (changeEvent) {
        if (this.getInput("NUM").connection.targetBlock()) {
            this.setWarningText(null);
        } else {
            this.setWarningText("Must have an input block.");
        }
    });
});
```

系统调用该函数，并传递 `change` 事件。 在函数内部，`this` 是指块实例。

由于对任何更改都会调用该函数（如果使用），因此开发人员应确保侦听器快速运行。 还应该警惕可能会级联或循环回到侦听器的工作空间更改。

有关示例，请参见 `controls_flow_statements`，`logic_compare` 和 `procedures_ifreturn` 块。

请注意，可编辑字段具有其自己的事件侦听器，用于输入验证和引起副作用。

## 块配置

块实例具有许多属性，用于配置它们对用户的行为方式。这些可以用于约束工作区以反映域的某些属性（例如，恰好有一个'开始'事件），或者集中用户精力（例如，教程）。

## 可删除状态

默认情况下，用户可以删除可编辑工作区（不是 `readOnly`）上的任何块。有时，使某些块永久固定是有用的。例如，教程框架代码。

```javascript
block.setDeletable(false);
```

任何块，包括标记为不可删除的块，都可以通过编程方式删除：

### JavaScript(Web)

```javascript
block.dispose();
```

### Java(Android)

```javascript
blocklyController.removeBlockTree(block);
```

## 可编辑状态

```javascript
block.setEditable(false); // Web or Android
```

设置为 false 时，用户将无法更改块的字段（例如，下拉列表和文本输入）。块在可编辑工作区上默认为可编辑。

## 可移动状态

```javascript
block.setMovable(false); // Web or Android
```

设置为 `false` 时，用户将无法直接移动块。作为另一个块的子节点的不可移动块可能不会与该块断开连接，但如果移动父节点，它将与其父节点一起移动。

块默认为可在可编辑工作区上移动。

任何块（甚至是不可移动的块）一旦处在工作区中就可以以编程方式移动。在 JavaScript 中，调用 `block.moveBy(dx, dy)`。除非另行指定，否则工作空间上块的起始位置默认为（0,0）。

## Block 数据 (Web Only)

```javascript
this.data = "16dcb3a4-bd39-11e4-8dfc-aa07a5b093db"; // Web only
```

数据是附加到块的可选和任意字符串。当保存为 XML 时，数据字符串存储在 `<data></data>` 标记中，以便可以将其往返回到块。使用数据字符串将块与外部资源相关联或用于任何其他自定义目的。

请注意，如果块复制或复制/粘贴，则数据字符串也会重复。不可删除的块无法复制或复制/粘贴。
