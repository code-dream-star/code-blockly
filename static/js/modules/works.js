CodeBlocklyLoader.onload(function () {
    const config = CodeBlocklyLoader.assign({
        defaultWorks: {},
        fileExtensionName: ".json"
    }, (CodeBlockly.config.works || {}));
    const works = Object.create(null);

    const { resizeWorkspace } = CodeBlockly.utils.blockly;
    const { save, load } = CodeBlockly.utils.file;
    const { core: BlocklyWorkspace } = CodeBlockly.workspace;
    const { fire } = CodeBlockly.dialog;

    works.loadWithJSON = function (json) {
        // BlocklyWorkspace.clear();
        BlocklyWorkspace.translate(10, 10);
        resizeWorkspace();

        json = typeof json == "string" ? JSON.parse(json) : json;
        Blockly.serialization.workspaces.load(json, BlocklyWorkspace);

        // BlocklyWorkspace.clearUndo();
    }

    works.getWithJSON = function () {
        return Blockly.serialization.workspaces.save(BlocklyWorkspace);
    }

    works.newBlankWorks = function () {
        works.loadWithJSON({});
    }

    works.loadLocalWorks = function () {
        var localWorks = localStorage.getItem("code-blockly-" + CodeBlockly.editorName + "-blockly-works");
        try {
            works.loadWithJSON(JSON.parse(localWorks) || config.defaultWorks);
        } catch (e) {
            works.loadWithJSON(config.defaultWorks);
        }
    }

    works.saveLocalWorks = function () {
        localStorage.setItem(
            "code-blockly-" + CodeBlockly.editorName + "-blockly-works",
            JSON.stringify(works.getWithJSON())
        );
    }

    works.downloadWorks = function () {
        save("download" + config.fileExtensionName, JSON.stringify({
            version: CodeBlockly.version,
            editorName: CodeBlockly.editorName,
            workspace: works.getWithJSON(),
            timestamp: Date.now()
        }));
    }

    works.uploadWorks = function () {
        load(config.fileExtensionName).then(content => {
            try {
                var data = JSON.parse(content);
                works.loadWithJSON(data.workspace);
            } catch (e) {
                fire({ title: "加载出错", "icon": "error" })
            }
        });
    }

    CodeBlockly.on("workspace_change", function () {
        works.saveLocalWorks();
    });

    CodeBlockly.on("nav_memu_click", function (id) {
        switch (id) {
            case "nav-file-new":
                works.newBlankWorks();
                break;
            case "nav-file-save":
                works.saveLocalWorks();
                fire({ title: "保存成功", "icon": "success" })
                break;
            case "nav-file-save-local":
                works.downloadWorks();
                break;
            case "nav-file-open-local":
                works.uploadWorks();
                break;
        }
    });

    // 导出模块
    CodeBlockly.works = works;
})