CodeBlocklyLoader.onload(function () {
    const utils = CodeBlockly.utils = (CodeBlockly.utils || Object.create(null));
    const file = {};

    file.load = function (type) {
        return new Promise(function (resolve) {
            var input = $("<input>");
            input.attr("type", "file");
            input.attr("accept", type);
            input.on("change", function () {
                var file = this.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = e.target.result;
                    resolve(data);
                };
                reader.readAsText(file);
            });
            input.click();
        });
    }

    file.save = function (name, content) {
        var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        return new Promise(function (resolve) {
            var a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = name;
            a.click();
            resolve();
        });
    }

    file.saveURL = function (name, url) {
        return new Promise(function (resolve) {
            var a = document.createElement("a");
            a.href = url;
            a.download = name;
            a.click();
            resolve();
        });
    }

    // 导出模块
    utils.file = file;
});