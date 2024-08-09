CodeBlocklyLoader.onload(function () {
    const config = CodeBlocklyLoader.assign({
        width: "35%"
    }, (CodeBlockly.config.sidebar || {}));

    const sidebar = Object.create(null);

    sidebar.status = false;
    sidebar.width = Number(config.width.endsWith("%") ? (parseFloat(config.width.replace("%", "")) / 100 * $(window).width()) : config.width);

    sidebar.open = function (_id) {
        $("main").addClass("sidebar-show");
        sidebar.status = true;
        sidebar.resize();
    }
    sidebar.close = function () {
        $("main").removeClass("sidebar-show");
        sidebar.status = false;
        sidebar.resize();
    }
    sidebar.switchPage = function (id) {
        $(".sidebar-item").filter((_, e) => e.id == id).addClass("show").siblings().not(".sidebar-slider").removeClass("show");
    }
    sidebar.resize = function () {
        $("main").css("--sidebar-width", sidebar.width + "px");
    }

    sidebar._silderDown = false;
    sidebar._silderX = 0;
    sidebar._silderWidth = 0;
    sidebar._sliderOnDown = function (x) {
        if (sidebar._silderDown) return;
        $("main").addClass("sidebar-sliding");
        sidebar._silderX = x;
        sidebar._silderWidth = sidebar.width;
        sidebar._silderDown = true;
        sidebar.resize();
    }
    sidebar._sliderOnMove = function (x) {
        if (!sidebar._silderDown) return;
        sidebar.width = Math.max(
            Math.min(
                sidebar._silderWidth + (sidebar._silderX - x),
                $(window).width() - 300
            ),
            100
        );
        sidebar.resize();
    }
    sidebar._sliderOnUp = function () {
        if (!sidebar._silderDown) return;
        $("main").removeClass("sidebar-sliding");
        sidebar._silderX = 0;
        sidebar._silderWidth = 0;
        sidebar._silderDown = false;
        sidebar.resize();
    }
    sidebar._sliderOnResize = function () {
        sidebar.width = Math.max(
            Math.min(
                sidebar.width,
                $(window).width() - 300
            ),
            100
        );
        sidebar.resize();
    }

    $("#app").on("mousedown", function ({ target, clientX }) {
        if (!$(target).hasClass("sidebar-slider")) return;
        sidebar._sliderOnDown(clientX);
    });
    $("#app").on("mousemove", function ({ clientX }) {
        sidebar._sliderOnMove(clientX);
    });
    $("#app").on("mouseup", function () {
        sidebar._sliderOnUp();
    });
    $(window).on("resize", function () {
        sidebar._sliderOnResize();
    });

    sidebar.resize();

    // 导出模块
    CodeBlockly.sidebar = sidebar;
});