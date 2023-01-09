// 菜单功能
var morenxml =
    '<xml><block type="define_web_pages" x="0" y="0"><statement name="blocks"><block type="define_web_pages_head"><statement name="blocks"><block type="head_charset"><field name="CODE">utf-8</field><next><block type="head_title"><field name="title">Document</field></block></next></block></statement><next><block type="define_web_pages_body"></block></next></block></statement></block></xml>';

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
    var v = localStorage.getItem("CodeBlocklyUserBlocklyWorksXML");
    Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(!v ? morenxml : v),
        workspace
    );
}

function saveWorks(t) {
    localStorage.setItem(
        "CodeBlocklyUserBlocklyWorksXML",
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

function opensettngs() {
    new mdui.Dialog($(".settingsdialog")[0]).open()
}

function updatasettings(e, t, s) {
    const v = s == "s" ? e.value : e.checked;
    localStorage.setItem(`CodeblocklySettingsdialogId${t}-${s}`, v + [])
    $settingsitem[`CodeblocklySettingsdialogId${t}-${s}`] = v + [];
}

function loadsettings() {
    for (const s in localStorage) {
        if (s.startsWith("CodeblocklySettingsdialogId")) {
            const s1 = s.replace("CodeblocklySettingsdialogId", "").split("-");
            const e = $(`.SettingsdialogId${s1.join("-")}`)[0]
            $settingsloaddata.push({ s, s1, e, data: localStorage[s] });
            $settingsitem[s] = localStorage[s]
            if (s1[1] == "s") {
                e.value = localStorage[s];
            } else {
                e.checked = eval(localStorage[s]);
            }
        }
    }
}

function saveBlocksSvg() {
    let blob = new Blob(
        [
            `<svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><style type="text/css">*{font: bold 12pt "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;user-select:none;}.blocklyText,.blocklyNonEditableText>rect:not(.blocklyDropdownRect),.blocklyEditableText>rect:not(.blocklyDropdownRect){fill:white;}.blocklyNonEditableText>text, .blocklyEditableText>text, .blocklyNonEditableText>g>text,.blocklyEditableText>g>text{fill: #575E75;}.blocklyDropdownText{fill:white!important;}</style>${workspace.svgBlockCanvas_.outerHTML}</svg>`
        ],
        { type: "text/plain; charset=utf-8" }
    );
    const urlOBj = (URL || webkitURL || window.URL || window.webkitURL || window)
    let url = urlOBj.createObjectURL(blob);
    let s = $(`<a href="${url}" download="blocks.svg"></a>`);
    s[0].click();
    urlOBj.revokeObjectURL(url);
}


showWorks();


// 菜单
$("body")[0].addEventListener("click", (e) => {
    if (e.target) {
        if (e.target.getAttribute("d") && (e.target.localName == "li" || e.target.localName == "a")) {
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
                            "<!-- 代码由 https://code-dream-star.github.io/code-blockly 生成，感谢您对我们的支持。-->\n" +
                            Blockly.JavaScript.workspaceToCode(workspace)
                        );
                    },
                    null,
                    () => {
                        window.open("https://open-code-dream-star.feishu.cn/wiki/wikcnNjY2wZJ4YW9cGUptuXOCNg");
                    },
                    opensettngs,
                ][Number(e.target.getAttribute("d")) - 1]();
            } catch (e) {
                swal("", "未开发");
            }
        }
    }
});


new mdui.Tab('#settingsdialog-tab').show(0);

$('#settingsdialog-tab > div').css("width", "149.328px");
