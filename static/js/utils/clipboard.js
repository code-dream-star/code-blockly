CodeBlocklyLoader.onload(function () {
    const utils = CodeBlockly.utils = (CodeBlockly.utils || Object.create(null));
    const clipboard = {};
    
    clipboard.copyText = async function (text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (e) {
            var i = document.createElement("textarea");
            i.style.fontSize = "12pt";
            i.style.border = "0";
            i.style.padding = "0";
            i.style.margin = "0";
            i.style.position = "absolute";
            i.style.left = "-9999px";
            i.value = text;
            document.body.appendChild(i);
            i.setAttribute("readonly", "");
            if (i.focus) i.focus();
            i.select();
            i.setSelectionRange(0, text.length);
            try {
                document.execCommand('copy');
                document.body.removeChild(i);
                return true;
            } catch (e) {
                document.body.removeChild(i);
                return false;
            }
        }
    };

    clipboard.copy = async function (item) {
        try {
            await navigator.clipboard.write(item);
            return true;
        } catch (e) {
            return false;
        }
    };


    // 导出模块
    utils.clipboard = clipboard;
});