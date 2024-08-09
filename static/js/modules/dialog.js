CodeBlocklyLoader.onload(function () {
    const dialog = Object.create(null);

    dialog.model = Swal.mixin({
        confirmButtonText: "确认",
        denyButtonText: "否",
        cancelButtonText: "取消",
        confirmButtonColor: "var(--cds-design-color-brand-101)",
        denyButtonColor: "var(--cds-design-color-error-101)",
        cancelButtonColor: "#bbb",
        confirmButtonAriaLabel: "确认",
        denyButtonAriaLabel: "否",
        cancelButtonAriaLabel: "取消",
        closeButtonAriaLabel: "关闭"
    });
    dialog.fire = function (...args) {
        return dialog.model.fire(...args)
    }
    dialog.alert = async function (text, callback) {
        await dialog.fire({
            text
        });
        if (callback) callback();
        return;
    };
    dialog.confirm = async function (text, callback) {
        const result = await dialog.fire({
            text,
            showCancelButton: true,
        });
        if (callback) callback(result.value);
        return result.value;
    };
    dialog.prompt = async function (text, value, callback) {
        const result = await dialog.fire({
            text,
            input: "text",
            inputPlaceholder: "",
            inputValue: value,
            showCancelButton: true,
        })
        if (callback) callback(result.value);
        return result.value;
    };

    Blockly.dialog.setAlert(dialog.alert);
    Blockly.dialog.setConfirm(dialog.confirm);
    Blockly.dialog.setPrompt(dialog.prompt);

    // 导出模块
    CodeBlockly.dialog = dialog;
});