console.log(
    `%c 
#####                           ######                                  #####                      
#     #  ####  #####  ######    #     # #####  ######   ##   #    #    #     # #####   ##   #####  
#       #    # #    # #         #     # #    # #       #  #  ##  ##    #         #    #  #  #    # 
#       #    # #    # #####     #     # #    # #####  #    # # ## #     #####    #   #    # #    # 
#       #    # #    # #         #     # #####  #      ###### #    #          #   #   ###### #####  
#     # #    # #    # #         #     # #   #  #      #    # #    #    #     #   #   #    # #   #  
#####   ####   #####  ######    ######  #    # ###### #    # #    #     #####    #   #    # #    # 
`,
    "font-size:12px;color:#0af"
);
console.log(
    `%c 
#####                           ######                                           
#     #  ####  #####  ######    #     # #       ####   ####  #    # #      #   # 
#       #    # #    # #         #     # #      #    # #    # #   #  #       # #  
#       #    # #    # #####     ######  #      #    # #      ####   #        #   
#       #    # #    # #         #     # #      #    # #      #  #   #        #   
#     # #    # #    # #         #     # #      #    # #    # #   #  #        #   
#####   ####   #####  ######    ######  ######  ####   ####  #    # ######   #                                                                                   
`,
    "font-size:12px;color:#0af;"
);
console.log("你好，欢迎使用 Code Blockly！");
console.log(
    "这是一款基于 Google Blockly 创作的图形化软件，由 Code Dream Star 团队制作"
);
console.log("代码开源：https://github.com/code-dream-star/code-blockly/");

const CodeBlockly = Object.create(null);
const CodeBlocklyLoader = Object.create(null);

// 不让jq加时间戳
$.ajaxSetup({ cache: true });

CodeBlocklyLoader.onloadEvents = [];
CodeBlocklyLoader.debug = false;

CodeBlocklyLoader.log = function (...args) {
    if (this.debug) console.log(...args);
};

CodeBlocklyLoader.warn = function (...args) {
    if (this.debug) console.warn(...args);
};

CodeBlocklyLoader.error = function (...args) {
    console.error(...args);
};

CodeBlockly._events = [];

CodeBlockly.on = function (type, listener) {
    CodeBlockly._events.push({ type, listener });
}
CodeBlockly.off = function (type, listener) {
    var events = [];
    if (listener) {
        events = CodeBlockly._events.filter(({ type: a, listener: b }) => type == a && listener == b);
    } else {
        if (typeof type == "string") {
            events = CodeBlockly._events.filter(({ type: a }) => type == a);
        } else if (typeof type == "string") {
            events = CodeBlockly._events.filter(({ listener: a }) => listener == a);
        }
    }

    events.forEach(event => {
        CodeBlockly._events.splice(CodeBlockly._events.indexOf(event), 1);
    });
}
CodeBlockly.emit = function (type, data) {
    CodeBlockly._events.filter(({ type: a }) => type == a).forEach(({ listener }) => {
        listener.bind(CodeBlockly)(data);
    })
}

/**
 * 获取 JSON 配置文件
 * @param {string} path 路径
 * @returns {Promise<Object>}
 */
CodeBlocklyLoader.getJSONConfig = function (path) {
    return new Promise((resolve, reject) => {
        $.getJSON("../../config/" + path + ".json", (data) => {
            this.log("获取 JSON 配置文件", path, "成功");
            resolve(data);
        }).fail((xhr, type, msg) => {
            this.error("获取 JSON 配置文件", path, "失败：", msg);
            reject(null);
        });
    });
};

/**
 * 获取 XML 配置文件
 * @param {string} path 路径
 * @returns {Promise<Element>}
 */
CodeBlocklyLoader.getXMLConfig = function (path) {
    return new Promise((resolve, reject) => {
        $.get("../../config/" + path + ".xml").done((data) => {
            this.log("获取 XML 配置文件", path, "成功");
            resolve($(data).children()[0]);
        }).fail((xhr, type, msg) => {
            this.error("获取 XML 配置文件", path, "失败：", msg);
            reject(null);
        });
    });
};

/**
 * 加载单个脚本文件
 * @param {string} path 路径
 * @returns {Promise<void>}
 */
CodeBlocklyLoader.loadScript = function (path) {
    return new Promise((resolve, reject) => {
        $.getScript(path).done(() => {
            this.log("加载脚本文件", path, "成功");
            resolve(null);
        }).fail((xhr, type, msg) => {
            this.error("加载脚本文件", path, "失败：", msg);
            reject(msg);
        });
    });
};

/**
 * 加载单个样式文件
 * @param {string} path 路径
 * @returns {Promise<void>}
 */
CodeBlocklyLoader.loadStyle = function (path) {
    return new Promise((resolve, reject) => {
        let link = $("<link>").attr({
            rel: "stylesheet",
            href: path
        }).appendTo("head");
        link.on("load", () => {
            resolve()
            this.log("加载样式文件", path, "成功");
        });
        link.on("error", () => {
            reject();
            this.error("加载脚本文件", path, "失败");
        });
    });
};

/**
 * 加载多个脚本文件
 * @param {string[]} paths 路径
 * @returns {Promise<void>}
 */
CodeBlocklyLoader.loadScripts = async function (paths) {
    for (let path of paths) {
        await this.loadScript(path);
    }
    this.log("已批量加载", paths.length, "个脚本文件");
};

/**
 * 加载多个样式文件
 * @param {string[]} paths 路径
 * @returns {Promise<void>}
 */
CodeBlocklyLoader.loadStyles = async function (paths) {
    for (let path of paths) {
        await this.loadStyle(path);
    }
    this.log("已批量加载", paths.length, "个样式文件");
};

/**
 * 获取 Meta
 * @param {string} name
 * @returns {string}
 */
CodeBlocklyLoader.getMeta = function (name) {
    this.log("获取 meta：", name);
    try {
        return $("meta[name='" + name + "']").attr("content");
    } catch (e) {
        return null;
    }
};


/**
 * 加载配置
 * @returns {Promise<void>}
 */
CodeBlocklyLoader.loadConfig = async function () {
    CodeBlockly.indexConfig = await this.getJSONConfig("index");
    CodeBlockly.editorConfig = await this.getJSONConfig("editor/" + CodeBlockly.editorName);
    CodeBlockly.config = this.assign(
        Object.assign({}, CodeBlockly.indexConfig),
        Object.assign({}, CodeBlockly.editorConfig)
    );
    CodeBlockly.toolboxConfig = await this.getXMLConfig("toolbox/" + CodeBlockly.editorName);
    this.log("配置加载完成");
};

/**
 * 加载其他脚本
 * @returns {Promise<void>}
 */
CodeBlocklyLoader.loadOtherScripts = async function () {
    await this.loadScripts(CodeBlockly.config.scripts || []);
    this.log("脚本加载完成");
};

/**
 * 加载其他样式
 * @returns {Promise<void>}
 */
CodeBlocklyLoader.loadOtherStyles = async function () {
    await this.loadStyles(CodeBlockly.config.styles || []);
    this.log("脚本加载完成");
};

/**
 * 深度 Object.assign
 * @returns {any}
 */
CodeBlocklyLoader.assign = function (target, source) {
    if (!source) return target;
    const type = typeof target;
    switch (type) {
        case "object":
            if (Array.isArray(target)) {
                target = target.concat(source);
            } else {
                let worked = [];
                for (let key in target) {
                    if (target.hasOwnProperty(key)) {
                        worked.push(key)
                        if (typeof target[key] == "object") target[key] = this.assign(target[key], source[key])
                        else target[key] = source[key] || target[key];
                    }
                }
                for (let key in source) {
                    if (source.hasOwnProperty(key) && !worked.includes(key)) {
                        target[key] = source[key];
                    }
                }
            }
            break;
        case "string":
            target = target.concat(source);
            break;
        case "number":
            target = target + source;
            break;
        case "boolean":
            if (target || source) target = true;
            else target = false;
            break;
        default:
            target = Object.assign(target, source);
    }
    return target;
};

/**
 * 加载模板
 * @param {string} path 路径
 * @param {any} jq jQuery 选择器
 * @returns {Promise<void>}
 */
CodeBlocklyLoader.loadTemplateToElement = async function (path, jq, config) {
    return new Promise((resolve) => {
        $.get("../../templates/" + path + ".html").done((data) => {
            this.log("获取模板文件", path, "成功");

            for (let key in config) {
                data = data.replaceAll("{{ " + key + " }}", String(config[key]));
            }

            resolve($(jq).html(data));
            this.log("模板文件", path, "渲染完成");
        }).fail((xhr, type, msg) => {
            this.error("获取模板文件", path, "失败：", msg);
            reject(error);
        });
    });
};

/**
 * 全局加载
 * @returns {Promise<void>}
 */
CodeBlocklyLoader.load = async function () {
    CodeBlockly.editorName = this.getMeta("code-blockly-editor");

    await this.loadConfig();
    CodeBlockly.version = (CodeBlockly.config.versionBefore || "") + (CodeBlockly.config.version || "") + (CodeBlockly.config.versionAfter || "");
    console.log('当前编辑器版本:', CodeBlockly.version);

    await this.loadOtherStyles();
    await this.loadOtherScripts();
    await this.loadTemplateToElement("app", "#app", CodeBlockly.config);

    this.onloadEvents.forEach(v => {
        v();
    });
    this.log("onload 事件触发完成");

    $("#loading").addClass("hide");
    setTimeout(() => {
        $("#loading").remove();
        this.log("删除加载元素完成");
    }, 300)

    this.log("== 加载完成 ==");
};

CodeBlocklyLoader.onload = function (lister) {
    this.log("绑定 onload 事件");
    this.onloadEvents.push(lister);
}