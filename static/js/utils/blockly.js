CodeBlocklyLoader.onload(function () {
    const utils = CodeBlockly.utils = (CodeBlockly.utils || Object.create(null));
    const blockly = {};

    blockly.blockColor = { // 积木颜色
        console: "#e68a4f",
        operation: "#feae8a",
        loop: "#68cdff",
        control: "#68cdff",
        math: "#feae8a",
        procedure: "#f88767",
        function: "#77d657",
        varible: "#ffbb55",
        list: "#f9cc37",
    };

    blockly.changeBlockStyle = function (type, style) {
        const block = Blockly.Blocks[type];
        const init_ = block.init;
        block.init = function (...args) {
            init_.apply(this, args);
            this.setStyle(style);
        }
    };

    blockly.resizeWorkspace = function () {
        if (!CodeBlockly.workspace) return
        CodeBlockly.workspace.core.resize();
        Blockly.svgResize(CodeBlockly.workspace.core);
    };

    // 导出模块
    utils.blockly = blockly;
});