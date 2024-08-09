CodeBlocklyLoader.onload(function () {
    const toolbar = Object.create(null);

    $(".toolbar-item").on("click", function () {
        CodeBlockly.emit("toolbar_click", this.id);
    });

    toolbar.setItemImage = function (id, src) {
        $(".toolbar-item").filter((_, e) => e.id == id).attr("src", src);
    }

    toolbar.setItemText = function (id, text) {
        $(".toolbar-item").filter((_, e) => e.id == id).text(text);
    }

    toolbar.setItemActive = function (id, boolean) {
        $(".toolbar-item").filter((_, e) => e.id == id)[boolean ? "addClass" : "removeClass"]("active");
    }

    // 导出模块
    CodeBlockly.toolbar = toolbar;
});