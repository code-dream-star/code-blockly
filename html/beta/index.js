var version = "html-V0.1.0(X003)-beta";
console.log(
    `%c 
#####                           ######                                  #####                      
#     #  ####  #####  ######    #     # #####  ######   ##   #    #    #     # #####   ##   #####  
#       #    # #    # #         #     # #    # #       #  #  ##  ##    #         #    #  #  #    # 
#       #    # #    # #####     #     # #    # #####  #    # # ## #     #####    #   #    # #    # 
#       #    # #    # #         #     # #####  #      ###### #    #          #   #   ###### #####  
#     # #    # #    # #         #     # #   #  #      #    # #    #    #     #   #   #    # #   #  
#####   ####  #####  ######    ######  #    # ###### #    # #    #     #####    #   #    # #    # 
`,
    "font-size:12px;color:#0af"
);
console.log(
    `%c
#####                           ######                                           
#     #  ####  #####  ######    #     # #       ####   ####  #    # #      #   # 
#       #    # #    # #         #     # #      #    # #    # #   #  #       # #  
#       #    # #    # #####     ######  #      #    # #      ####   #        #   
#       #    # #    # #         #     # #      #    # #      #  #   #        #   
#     # #    # #    # #         #     # #      #    # #    # #   #  #        #   
#####   ####  #####  ######    ######  ######  ####   ####  #    # ######   #                                                                                   
`,
    "font-size:12px;color:#0af;"
);
console.log("你好，欢迎使用 Code Blockly！");
console.log(
    "这是一款基于 Google Blockly 创作的图形化软件，由 Code Dream Star 团队制作"
);
console.log("特别鸣谢：小宏XeLa，木水屑，广安，凌cloud");
console.log("代码开源：https://github.com/code-dream-star/code-blockly/");
console.log(
    version,
    "Copyright © 2022 by code-dream-star",
    "All rights reserved"
);
// 积木颜色
const color = {
    head: "#51b6d6",
    embed: "#66ccff",
    form: "#a099fb",
    attribute: "#bda3ff",
    //-----
    console: "#e68a4f",
    operation: "#feae8a",
    loop: "#68cdff",
    control: "#68cdff",
    math: "#feae8a",
    procedure: "#f88767",
    function: "#77d657",
    varible: "#ffbb55",
    list: "#f9cc37",
    colour: "#2bc9a7",
    //-----
    css: "#0053fc",
    image: "#9933ff",
    text: "#ef9b43",
    template: "#19c6f5",
    structure: "#6dacff",
    object: "#a073ff",
};

Object.assign(window, { color });

!(function () {
    const config = {
        toolbox: document.getElementById("toolbox"),
        target: color,
    };
    config.toolbox.querySelectorAll("category").forEach((e) => {
        e.setAttribute(
            "colour",
            config.target[e.getAttribute("colour").replace("%color ", "")]
        );
    });
})();

var workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox"), // xml位置
    zoom: {
        // 缩放设置
        controls: true, // 显示缩放按钮控件
        wheel: true, // 允许使用鼠标滚轮缩放
        startScale: 1, // 初始积木大小
        maxScale: 3, // 最大大小
        minScale: 0.3, // 最小大小
    },
    move: {
        // 移动设置
        wheel: true, // 允许鼠标滚轮滑动
    },
    collapse: true, // 允许折叠块
    comments: true, // 允许注释块
    sounds: true, // 有音效
    trashcan: true, // 显示垃圾桶
    media: "../../blockly/media/", // 资源文件链接
    theme: "../../blockly/core/theme/zelos.ts",
    renderer: "zelos", // 主题风格
});

// 加载toolbox图标

window.$toolboxicondata = [];

workspace.toolbox_.contents_.forEach((e) => {
    let ss = "";
    for (const o in color) {
        if (color[o] == e.colour_) {
            ss = o;
        }
    } //                                                                              ↓ 大小 ↓
    const ww = $(`<iconpark-icon name="${ss}" size="1.5em"></iconpark-icon>`);
    ww.appendTo(e.iconDom_);
    window.$toolboxicondata.push({
        e: ww,
        target: ss,
        other: e,
        id: e.id_,
        name: e.name_,
        color: e.colour_,
    });
});

// 事件
workspace.addChangeListener(function (e) {
    // 输出（test use）
    console.log(e);
    // 生成代码
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var html = hljs
        .highlight(
            "<!-- 代码由 " +
                window.location.href +
                " 生成，感谢您对我们的支持。-->\n" +
                code,
            { language: "HTML" }
        )
        .value.split("\n")
        .join("<br>")
        .split("  ")
        .join("&nbsp;&nbsp;");
    $(".code-dialog > code").html(html);
    // 导航栏
    $(`.right-bottom-navigation-bar > div[data-tip="恢复回100%"]`).text(
        ~~(workspace.scale * 100) + "%"
    );
});

// code事件
function hideCodeDialog() {
    $(".code-dialog")[0].classList.remove("show");
    $("body")[0].classList.remove("code-dialog-show-body");
}
function showCodeDialog() {
    $(".code-dialog").addClass("show");
    $("body").addClass("code-dialog-show-body");
}

// 特殊处理
workspace.registerButtonCallback("beta", function () {
    swal("这个功能正在内测中，将来可能会频繁改动，若有Bug请向开发者反馈！");
});

// 右下角导航
$(".right-bottom-navigation-bar > div").each((_, a) => {
    a.addEventListener("click", function () {
        switch (a.getAttribute("data-tip")) {
            case "缩小":
                if (workspace.scale > 0.3)
                    $(workspace).animate(
                        { scale: workspace.scale - 0.2 },
                        { duration: 100 }
                    );
                break;
            case "放大":
                if (workspace.scale < 3)
                    $(workspace).animate(
                        { scale: workspace.scale + 0.2 },
                        { duration: 100 }
                    );
                break;
            case "恢复回100%":
                $(workspace).animate({ scale: 1 }, { duration: 300 });
                break;
            case "代码":
                if (
                    $(".code-dialog")[0].className.split(" ").includes("show")
                ) {
                    hideCodeDialog();
                } else {
                    showCodeDialog();
                }
                break;
            case "预览":
                const d = window.open();
                d.document.write($(".code-dialog > code").text());
                break;
        }
    });
});

$(".code-dialog-button[right]")[0].addEventListener("click", () => {
    hideCodeDialog();
});

$(".code-dialog-button[left]")[0].addEventListener("click", () => {
    try {
        this.navigator.clipboard.writeText($(".code-dialog > code").text());
    } catch (e) {
        swal(
            `复制出错或您的浏览器不支持剪切板API（this.navigator.clipboard）！\n请尝试升级浏览器或手动复制！\nError Log：\n${e}`
        );
    }
    $(".code-dialog-button[left]")[0].setAttribute("data-tip", "复制成功！");
    setTimeout(() => {
        $(".code-dialog-button[left]")[0].setAttribute("data-tip", "复制代码");
    }, 1000);
});

// 加载结束后，进行适配化这个适配可能有些Bug
setInterval(() => {
    document.querySelectorAll(".workzone > div").forEach((e) => {
        e.style.height = document.documentElement.clientHeight + "px";
    });
}, 16);
setInterval(() => {
    Blockly.svgResize(workspace);
}, 16);

// 主题

BlocklyTheme = Blockly.Theme.defineTheme("BlocklyTheme", {
    base: Blockly.Themes.Classic,
    blockStyles: {
        loop_blocks: { colourPrimary: color["loop"] },
        math_blocks: { colourPrimary: color["math"] },
        logic_blocks: { colourPrimary: color["math"] },
        text_blocks: { colourPrimary: color["math"] },
        procedure_blocks: { colourPrimary: color["procedure"] },
        function_blocks: { colourPrimary: color["function"] },
        variable_blocks: { colourPrimary: color["varible"] },
        list_blocks: { colourPrimary: color["list"] },
        colour_blocks: { colourPrimary: color["colour"] },
    },
    componentStyles: {
        workspaceBackgroundColour: "#fafafa",
        toolboxBackgroundColour: "#fff",
        flyoutBackgroundColour: "#f2f2f2cc",
        toolboxForegroundColour: "#000",
        scrollbarColour: "#ccc",
    },
});

workspace.setTheme(BlocklyTheme);

// 弹窗

!(function () {
    const o = {
        async alert(w = "", f = () => {}) {
            const a = await swal("系统", w, { confirmButtonText: "确认" });
            f();
            return;
        },
        async confirm(w = "", f = () => {}) {
            const a = await swal("系统", w, {
                confirmButtonText: "确认",
                showCancelButton: true,
            });
            f(a);
            return a;
        },
        async prompt(w = "", p = "", f = () => {}) {
            let i = null;
            const a = mdui.prompt(
                w,
                "系统",
                (r) => {
                    i = r;
                },
                () => {},
                {
                    confirmText: htmlblockly.msg.confirm,
                    cancelText: htmlblockly.msg.cancel,
                }
            );
            a.$element.find(".mdui-textfield-input").value = p;
            while (a.isOpen()) {
                await new Promise(requestAnimationFrame);
            }
            f(i);
            return i;
        },
    };
    for (const v in Blockly.dialog) {
        if (v.startsWith("set")) {
            Blockly.dialog[v](
                o[
                    v
                        .replace(/[A-Z]/, (r) => {
                            return r.toLocaleLowerCase();
                        })
                        .slice(3)
                ]
            );
        }
    }
})();
