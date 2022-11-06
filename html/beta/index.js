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

document.body.style.overflow = "hidden"; //禁止页面滑动

// !(function () {
//     let s = "../../static/logo/logo.svg";
//     if (window.location.pathname.includes("beta")) {
//         s = "../../static/logo/logo_beta lite.svg";
//     }
//     $(".app-top-icon > img")[0].setAttribute("src", s);
//     setInterval(() => {
//         $(".app-top-icon > img").height($(".blocklyToolboxDiv").width() / 1.2);
//         $(".app-top-icon").height($(".blocklyToolboxDiv").width());
//         $(".app-top-icon").width($(".blocklyToolboxDiv").width());
//         $(".blocklyToolboxContents").css(
//             "paddingTop",
//             $(".blocklyToolboxDiv").width() + "px"
//         );
//     });
// })();
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
        .join("&nbsp;");
    $(".code-dialog > code").html(html);
    // 自动保存
    saveWorks();
});

!(function () {
    let x = 0;
    setInterval(() => {
        if (x != workspace.scale) {
            $(`.right-bottom-navigation-bar > div[data-tip="恢复回100%"]`).text(
                ~~(workspace.scale * 100) + "%"
            );
            x = workspace.scale;
        }
    });
})();

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
        swal("", "代码复制成功！", "success");
        this.navigator.clipboard.writeText($(".code-dialog > code").text());
    } catch (e) {
        swal(
            "",
            `复制出错或您的浏览器不支持剪切板API（this.navigator.clipboard）！\n请尝试升级浏览器或手动复制！`,
            "error"
        );
    }
});

// 加载结束后，进行适配化这个适配可能有些Bug
setInterval(() => {
    document.querySelectorAll(".workzone > div").forEach((e) => {
        e.style.height = document.documentElement.clientHeight - 64 + "px";
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
            const a = await swal("系统", w);
            f();
            return;
        },
        async confirm(w = "", f = () => {}) {
            const a = await swal("系统", w, {
                buttons: true,
            });
            f(a);
            return a;
        },
        async prompt(w = "", p = "", f = () => {}) {
            const a = await swal("系统", w, {
                buttons: true,
                content: "input",
            });
            f(a);
            return a;
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

//
!(function () {
    const date = new Date();
    const list = [
        [12, 13],
        [2, 21],
        [3, 21],
    ];
    if (
        list
            .map((a) => {
                return JSON.stringify(a);
            })
            .includes(JSON.stringify([date.getMonth() + 1, date.getDate()]))
    ) {
        document.querySelector("body").style.filter = "grayscale(100%)";
    }
})();

// 菜单功能
var morenxml =
    '<xml><block type="define_web_pages" id="YGvzo%a|Kgnf{OdU93)X" x="-4" y="239"><statement name="blocks"><block type="define_web_pages_head" id="Sgrz8+r1?1HEE{4bo:+T"><statement name="blocks"><block type="head_charset" id="5Okb}^6by~5nHsLW;n_K"><field name="CODE">utf-8</field><next><block type="head_title" id="**qXHE4L`THVMM,(.a2E"><field name="title">Document</field></block></next></block></statement><next><block type="define_web_pages_body" id="`Vi/Ryq-;t^qYRxSfG)6"></block></next></block></statement></block></xml>';

const addhtml = (position, localName, data, html) => {
    var newHtml = document.createElement(localName);
    for (var name in data) {
        newHtml.setAttribute(name, data[name]);
    }
    newHtml.innerHTML = html;
    var newElement = position.appendChild(newHtml);
    return newElement;
};

const openfile = () => {
    if (document.getElementById("OpenFileSetting")) {
        document.getElementById("OpenFileSetting").remove();
    }
    var input = addhtml(
        document.body,
        "input",
        {
            type: "file",
            id: "OpenFileSetting",
            style: "display:none",
            accept: ".cbhtml",
        },
        ""
    );
    input.click();
    var data = "";
    input.onchange = () => {
        data = input.files;
        var file = input.files[0];
        var fileread = new FileReader();
        fileread.onload = () => {
            var v = fileread.result;
            try {
                if (v) {
                    Blockly.Xml.domToWorkspace(
                        Blockly.Xml.textToDom(!v ? morenxml : v),
                        workspace
                    );
                } else {
                    swal(
                        "",
                        "打开作品失败！\n注意只能打开类型为cbhtml的作品哦",
                        "error"
                    );
                }
            } catch (e) {
                swal(
                    "",
                    "打开作品失败！\n注意只能打开类型为cbhtml的作品哦",
                    "error"
                );
            }
        };
        fileread.readAsText(file, "UTF-8");
    };
};

function showWorks() {
    var v = localStorage.getItem("UserBlocklyWorksXML");
    Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(!v ? morenxml : v),
        workspace
    );
}

function saveWorks(t) {
    localStorage.setItem(
        "UserBlocklyWorksXML",
        Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace))
    ); //保存作品
    if (t) swal("", "作品保存成功！", "success");
}

function saveFile(name, data) {
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);
    var save_link = document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        "a"
    );
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    save_link.click();
}

// 菜单
$("body")[0].addEventListener("click", (e) => {
    if (e.target) {
        if (e.target.getAttribute("d")) {
            try {
                console.log(e.target.getAttribute("d"));
                [
                    null,
                    () => {
                        saveWorks(1);
                    },
                    () => {
                        saveFile(
                            "MyWeb.cbhtml",
                            Blockly.Xml.domToText(
                                Blockly.Xml.workspaceToDom(workspace)
                            )
                        );
                    },
                    openfile,
                    () => {
                        saveFile(
                            "MyWeb.html",
                            "<!-- 代码由 " +
                                window.location.href +
                                " 生成，感谢您对我们的支持。-->\n" +
                                Blockly.JavaScript.workspaceToCode(workspace)
                        );
                    },
                    null,
                    () => {
                        window.open("../../docs");
                    },
                    null,
                ][Number(e.target.getAttribute("d")) - 1]();
            } catch (e) {
                swal("", "未开发");
            }
        }
    }
});

showWorks();
