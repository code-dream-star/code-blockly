CodeBlocklyLoader.onload(function () {
    $(".nav").on("click", function () {
        CodeBlockly.emit("nav_click", this.id);
        $(this).toggleClass("show").siblings().removeClass("show");
    });
    
    $("body").on("click", function ({ target }) {
        if (!$(target).hasClass("nav") && !$(target).parent().hasClass("nav")) {
            $(".nav").removeClass("show");
        }
    });

    $(".nav ul li").on("click", function () {
        CodeBlockly.emit("nav_memu_click", this.id);
    });
});