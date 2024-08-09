CodeBlocklyLoader.onload(function () {
    const items = CodeBlocklyLoader.assign({}, (CodeBlockly.config.settings || {}));
    const settings = Object.create(null);

    const { fire } = CodeBlockly.dialog;

    settings.set = function (name, value) {
        localStorage.setItem("code-blockly-settings-" + name, JSON.stringify(value));
        settings.storage[name] = value;
    }
    settings.get = function (name) {
        if (("code-blockly-settings-" + name) in localStorage) {
            return JSON.parse(localStorage.getItem("code-blockly-settings-" + name));
        }
        if (name in settings.storage) {
            return settings.storage[name];
        }
        if (items[name]) {
            if ("default" in items[name]) {
                return items[name].default;
            }
        }
        return null;
    }

    settings.storage = {}
    for (let name in items) {
        settings.storage[name] = settings.get(name);
    }


    CodeBlockly.on("nav_click", function (id) {
        if (id != "nav-settings") return;
        fire({
            showConfirmButton: false,
            customClass: "settings-dialog",
            html: `<h2>设置</h2>`
            // showCloseButton: true
        });

        const content = $(".swal2-html-container");
        const settings_ = $("<div class='setings'>").appendTo(content);

        for (let name in items) {
            let item = items[name]

            let setting = $("<div class='seting'>").appendTo(settings_)
            $('<h3>').text(item.display).appendTo(setting)
            $('<span>').text(item.description).appendTo(setting)

            switch (item.type) {
                case 'boolean':
                    $('<input>').prop({
                        type: 'checkbox',
                        checked: settings.get(name)
                    }).on('change', function () {
                        settings.set(name, this.checked)
                    }).appendTo(setting)
                    break;
                case 'number':
                    $('<input>').prop({
                        type: 'number',
                        value: settings.get(name)
                    }).on('change', function () {
                        settings.set(name, Number(this.value))
                    }).appendTo(setting)
                    break;
                case 'string':
                    $('<input>').prop({
                        type: 'text',
                        value: settings.get(name)
                    }).on('change', function () {
                        settings.set(name, this.value)
                    }).appendTo(setting)
                    break;
            }
        }

    });

    // 导出模块
    CodeBlockly.settings = settings;
})