var version = "html-V0.2.0-dev(12000)";
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
console.log("特别鸣谢：小宏XeLa，木水屑，广安，Tafi，凌cloud");
console.log("代码开源：https://github.com/code-dream-star/code-blockly/");
console.log(
    version,
    "Copyright © 2022 by Code Dream Star",
    "All rights reserved"
);
;
(async function main() {
    "use strict";
    var a = {
        sleep: async function (ms) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, ms);
            });
        },
        readCopy: async function () {
            return await navigator.clipboard.readText()
        },
        copy: async function copy(text) {
            return await navigator.clipboard.writeText(text)
        },
        setv: ((html, name, value) => { html.setAttribute(name, value) }),
        setn: ((html, value) => { html.setAttribute(value, "") }),
        seth: ((html, html5) => { html.innerHTML = html5 }),
        sett: ((html, text) => { html.innerText = text }),
        addhtml: ((position, localName, data, html) => { var newHtml = document.createElement(localName); for (var name in data) { newHtml.setAttribute(name, data[name]) }; newHtml.innerHTML = html; var newElement = position.appendChild(newHtml); return (newElement) }),
        addanot: ((position, value) => { var newHtml = document.createComment(value); var newElement = position.appendChild(newHtml); return (newElement) }),
        getParameters: ((name) => { return window.location.search.substring(1).split("&").find((a) => a.split("=")[0] == name).split("=")[1]; }),
        saveFile: (name, data) => { var urlObject = window.URL || window.webkitURL || window; var export_blob = new Blob([data]); var save_link = document.createElement("a"); save_link.href = urlObject.createObjectURL(export_blob); save_link.download = name; save_link.click(); }
    };
    Object.assign(window, a);
})();

// Config! Dev use! Don't delect this line of code!
window.$toolboxicondata = [];
window.$settingsloaddata = [];
window.$settingsitem = {};

document.body.style.overflow = "hidden"; //禁止页面滑动

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
    css: "#2ec7e7",
    image: "#9933ff",
    text: "#f7c862",
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
function loadicon() {
    workspace.toolbox_.contents_.forEach((e) => {
        let ss = "";
        for (const o in color) {
            if (color[o] == e.colour_) {
                ss = o;
            }
        }
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
}

loadicon()

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

    // 积木盒开/关特效
    if (e.type == "toolbox_item_select") {
        const s = $($(".blocklyFlyout")[1]); // Flyout元素
        if (e.newItem != null && e.oldItem == null) { // 如果是打开
            console.log("open");
            s.css("display", "block");
            s.css("transform", "translate(68px, 0px)");
        } else if (e.newItem == null && e.oldItem != null) { // 如果是关闭
            s.css("display", "block");
            s.css("transform", `translate(-${s.width() + 1}px, 0px)`);
            console.log("close");
        }
    }

    // 当有积木开始拖动
    if (e.type == "drag" && !!e.isStart) {
        // 显示“删除垃圾桶”
        $(".delect-block-zone").addClass("delect-block-zone-show");
    }

    // 当有积木结束拖动
    if (e.type == "drag" && !e.isStart) {
        // 隐藏“删除垃圾桶”
        $(".delect-block-zone")[0].classList.remove("delect-block-zone-show")
    }

    // 当有积木删除时
    if (e.type == "delete") {
        setv($(`#toolbox > category[name="历史"] > label[text]`)[0], "text", "提示：重新加载后将清空！");
        // 做一些历史积木配置
        setv(e.oldXml, "disabled", 0);
        setv(e.oldXml, "x", 0);
        setv(e.oldXml, "y", 0);
        setv(e.oldXml, "id", 0);
        $(e.oldXml).find("*[id]").each((_, a) => { setv(a, "id", 0); setv(a, "disabled", 0); });
        // 如果已经历史，则不再保存
        if ($(`#toolbox > category[name="历史"] > *:not(label[text],button[text])`).map((_, a) => { return a.outerHTML }).toArray().join("").includes(e.oldXml.outerHTML)) return;
        // 将积木xml添加到toolbox的“历史”模块里
        $(e.oldXml.outerHTML).appendTo($(`#toolbox > category[name="历史"]`)[0]);
        // 刷新toolbox
        workspace.updateToolbox($("#toolbox")[0]);
        loadicon()
    }
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
    Blockly.alert("这个功能正在内测中，将来可能会频繁改动，若有Bug请向开发者反馈！");
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
                var code = Blockly.JavaScript.workspaceToCode(workspace);
                var html = code.split("\n")
                    .join("")
                    .split("  ")
                    .join("");
                d.document.write(html);
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
        flyoutBackgroundColour: "#fff",
        toolboxForegroundColour: "#000",
        scrollbarColour: "#ccc",
    },
});

workspace.setTheme(BlocklyTheme);

// 弹窗
!(function () {
    const o = {
        async alert(w = "", f = () => { }) {
            await swal("", w, {
                buttons: {
                    text: "收到！",
                },
            });
            f();
            return;
        },
        async confirm(w = "", f = () => { }) {
            const a = await swal("", w, {
                buttons: ["取消", "确认"]
            });
            f(a);
            return a;
        },
        async prompt(w = "", p = "", f = () => { }) {
            const a = await swal("", w, {
                buttons: true,
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "请输入",
                        type: "text",
                        value: p
                    },
                },
                buttons: ["取消", "确认"]
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
        [11,30]
    ];
    if (
        list
            .map((a) => {
                return JSON.stringify(a);
            })
            .includes(JSON.stringify([date.getMonth() + 1, date.getDate()]))
    ) {
        document.querySelector("html").style.filter = "grayscale(1)";
    }
})();


!function () {
    Object.assign($settingsitem, {
        get(ss) {
            for (const s in this) {
                if (s.startsWith("CodeblocklySettingsdialogId")) {
                    const s1 = s.replace("CodeblocklySettingsdialogId", "");
                    if (ss == s1) {
                        return this[s]
                    }
                }
            }
        }
    })
}()

setInterval(() => {
    $(".delect-block-zone").css("width", $(".injectionDiv > .blocklyToolboxDiv").width())
    $(".delect-block-zone").css("top", $(".injectionDiv > .blocklyToolboxDiv").position().top)
});
// 历史
workspace.registerButtonCallback("Clear history", function () {
    Blockly.confirm("确认清空历史？", function (e) {
        if (!e) return
        // 删掉所有历史
        $(`#toolbox > category[name="历史"] > *:not(label[text],button[text])`).each((_, a) => { a.remove(); });
        setv($(`#toolbox > category[name="历史"] > label[text]`)[0], "text", "空空如也");
        // 刷新toolbox
        workspace.updateToolbox($("#toolbox1")[0]);
        // 刷新“历史”模块
        $(".blocklyToolboxContents > div.blocklyToolboxCategory:last-child > .blocklyTreeRow")[0].click();
        loadicon()
    });
});

$(".history-trash-btn")[0].addEventListener("click", () => {
    $(".blocklyToolboxContents > div.blocklyToolboxCategory:last-child > .blocklyTreeRow")[0].click();
})

setInterval(() => {
    const s = $(".injectionDiv > .blocklyToolboxDiv").width() / 2 - $(".history-trash-btn").width() / 2;
    $(".history-trash-btn")[0].style.padding = `5px ${s}px`;
});

