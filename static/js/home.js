!function () {
    !(function () {
        const date = new Date();
        const list = [
            [12, 13],
            [2, 21],
            [3, 21],
            [9, 18]
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


    USERCONFIG = {
        "1086-loves-programming": {
            img: "q",
            name: "1086爱编程",
            v: ["核心开发员", "UI设计"],
            d: "梦想就像星辰，你能看得到，但是你摸不到",
            qq: "531854969",
            email: "quiet_star_gazing@outlook.com",
        },
        "xiaohong2022": {
            img: "q",
            name: "小宏XeLa",
            v: ["开发员"],
            d: "az",
            qq: "3174251894",
            email: "q",
        },
        "123213123123": {
            img: "q",
            name: "夕阳下的晨",
            v: ["开发员"],
            d: "- 暂无简介 -",
            qq: "1743282840",
            email: "暂无邮箱",
        },
        "codemiao200": {
            img: "q",
            name: "编码喵",
            v: ["开发员"],
            d: "- 暂无简介 -",
            qq: "2235843602",
            email: "codemiao@outlook.com",
        },
        "tafi": {
            img: "q",
            name: "Tafi",
            v: ["图标设计"],
            d: "- 暂无简介 -",
            qq: "1784687307",
            email: "暂无邮箱",
        }
    }

    Object.values(USERCONFIG).forEach((e, i) => {
        $(`<div class="app-paragraph-content-table-div">
            <div class="app-paragraph-content-table-div-icon">
                <img src="${e.img == "q" ? `https://q1.qlogo.cn/g?b=qq&nk=${e.qq}&s=640` : e.img}"
                    class="app-paragraph-content-table-div-icon-img">
            </div>
            <div class="app-paragraph-content-table-div-text">
                <span>${e.name}</span>
            </div>
    </div>`).appendTo($(".core-member")[0]);
    });

    function load() {
        $("#app").css("overflow", "")
        $(".app-publicize-down").removeClass("app-publicize-down")
        var data = 0
        setInterval(() => {
            if ($("#app")[0].scrollTop !== data) {
                data = $("#app")[0].scrollTop
                $(".app-paragraph").each((_, a) => {
                    if (($("#app")[0].scrollTop + $("#app")[0].offsetHeight / 1.25) > a.offsetTop) {
                        $(a).addClass("app-paragraph-show")
                    } else {
                        $(a).removeClass("app-paragraph-show")
                    }
                })
            }
        })
    }

    window.addEventListener("load", () => {
        load()
    })
}()