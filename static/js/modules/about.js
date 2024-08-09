CodeBlocklyLoader.onload(function () {
    const { fire } = CodeBlockly.dialog;

    CodeBlockly.on("nav_memu_click", function (id) {
        if (id != "nav-more-about") return;
        fire({
            showConfirmButton: false,
            customClass: "about-dialog",
            html: `加载中`
            // showCloseButton: true
        });

        CodeBlocklyLoader.loadTemplateToElement(
            "about",
            ".swal2-html-container",
            {
                version: CodeBlockly.version,
            }
        );
    });
});