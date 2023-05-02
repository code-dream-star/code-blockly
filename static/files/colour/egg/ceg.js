!(function () {
     Blockly.Blocks["code_block_star_card"] = {
          init: function () {
               this.appendDummyInput().appendField(
                    new Blockly.FieldImage(
                         "https://code-dream-star.github.io/favicon.ico",
                         127,
                         110,
                         { alt: "", flipRtl: "FALSE" }
                    )
               );
               this.appendDummyInput().appendField("Code Dream Star");
               this.setOutput(true, "String");
               this.setColour("#0af");
               this.setTooltip("这个卡片里似乎藏着些什么好玩的？（）");
               this.setHelpUrl("");
               setInterval(() => {
                    const a = "0123456789abcdef";
                    const r1 = a[~~(Math.random() * a.length)];
                    const r2 = a[~~(Math.random() * a.length)];
                    const g1 = a[~~(Math.random() * a.length)];
                    const g2 = a[~~(Math.random() * a.length)];
                    const b1 = a[~~(Math.random() * a.length)];
                    const b2 = a[~~(Math.random() * a.length)];
                    this.setColour("#" + r1 + r2 + g1 + g2 + b1 + b2);
               }, 1000);
          },
     };

     if (Blockly.JavaScript) {
          Blockly.JavaScript["code_block_star_card"] = function (block) {
               var code = `"Code Dream Star YYDS"`;
               return [code, Blockly.JavaScript.ORDER_NONE];
          };
     }

     if (Blockly.Python) {
          Blockly.Python["code_block_star_card"] = function (block) {
               var code = `"Code Dream Star YYDS"`;
               return [code, Blockly.JavaScript.ORDER_NONE];
          };
     }

     var cegyes = false;
     const gameBlocksXml = `<blocK type="code_block_star_card" inline="true"></block>
     <blocK type="code_block_star_card"></block>`;
     workspace.addChangeListener(function (e) {
          const t1 = workspace.getBlocksByType("js_console_log");
          if (t1.length) {
               if (
                    t1[0].inputList[0].fieldRow[1].value_ ==
                    "Code Dream Star YYDS" &&
                    cegyes == false
               ) {
                    cegyes = true;
                    swal("恭喜你触发了彩蛋！", {
                         button: "确认",
                    }).then(() => {
                         swal("快去寻找彩蛋吧！", {
                              button: "好咧",
                         });
                    });
                    for (const t of gameBlocksXml.split("\n")) {
                         $(t).appendTo(
                              $(`#toolbox > category[name="模板"]`)[0]
                         );
                    }
                    // 刷新toolbox
                    workspace.updateToolbox($("#toolbox")[0]);
                    loadicon();
               }
          }
     });

     var ceg1yes = false;
     const gameBlocksXml2 = `<blocK type="game_block_guess_idioms"></block>
     <blocK type="game_block_timer"></block>`;
     workspace.addChangeListener(function (e) {
          const t1 = workspace.getBlocksByType("code_block_star_card");
          if (t1.length) {
               if (
                    t1.filter((v) => v.commentModel.text == "Code Blockly YYDS")
                         .length &&
                    ceg1yes == false &&
                    cegyes == true
               ) {
                    ceg1yes = true;
                    swal("恭喜你触发了二级彩蛋！", {
                         button: "确认",
                    }).then(() => {
                         swal("快去寻找彩蛋吧！", {
                              button: "好咧",
                         });
                    });
                    for (const t of gameBlocksXml2.split("\n")) {
                         $(t).appendTo(
                              $(`#toolbox > category[name="构造"]`)[0]
                         );
                    }
                    // 刷新toolbox
                    workspace.updateToolbox($("#toolbox")[0]);
                    loadicon();
               }
          }
     });

     var O3V667hz = 0;
     document
          .querySelector(
               "html>body>div#app>div.mdui-appbar>div.mdui-toolbar>img[src]"
          )
          .addEventListener("click", function () {
               if (O3V667hz >= 5) {
                    swal({
                         title: "吼！",
                         text: "恭喜你触发了彩蛋",
                         button: "继续",
                    }).then(() => {
                         localStorage.setItem("ulZ7fqFb", true);
                         swal({
                              text: "让我们去找彩蛋吧~",
                              buttons: ["蒜了", "好滴"],
                         }).then((v) => {
                              if (v) window.location.reload();
                         });
                    });
                    O3V667hz = 0;
               } else {
                    O3V667hz++;
               }
          });

     const game_block_color = "#6dacff";
     /**
      * 游戏积木块
      */
     Blockly.Blocks["game_block_guess_idioms"] = {
          init: async function () {
               this.appendDummyInput()
                    .appendField("猜成语")
                    .appendField(new Blockly.FieldTextInput("互"), "0")
                    .appendField(new Blockly.FieldTextInput("相"), "1")
                    .appendField(new Blockly.FieldTextInput("？"), "2")
                    .appendField(new Blockly.FieldTextInput("盾"), "3");
               this.appendDummyInput()
                    .appendField(" = 点击按钮随便出一个")
                    .appendField(new Blockly.FieldCheckbox("FALSE"), "reset")
                    .appendField("=");
               this.setColour(game_block_color);
               this.setTooltip(
                    `猜成语游戏：\n一个人填上3个字，一个人猜另一个字。`
               );
               this.setHelpUrl("");
               this.idiomlist = await fetch(
                    "../../../static/files/colour/egg/idiom.json"
               ).then((v) => {
                    return v.json();
               });
          },
          onchange: async function () {
               const iscb = this.getFieldValue("reset") == "TRUE";
               if (iscb) {
                    this.setFieldValue("FALSE", "reset");
                    try {
                         const r = ~~(Math.random() * 4);
                         const r2 =
                              this.idiomlist[
                              ~~(Math.random() * this.idiomlist.length)
                              ];
                         for (const i in r2) {
                              this.setFieldValue(
                                   Number(i) == r ? "？" : r2[i],
                                   i
                              );
                         }
                    } catch (e) {
                         this.idiomlist = await fetch(
                              "../../../static/files/colour/egg/idiom.json"
                         ).then((v) => {
                              return v.json();
                         });
                    }
               }
               const s0 = this.getFieldValue("0");
               const s1 = this.getFieldValue("1");
               const s2 = this.getFieldValue("2");
               const s3 = this.getFieldValue("3");
               if (s0.length > 1) {
                    this.setFieldValue(s0[0], "0");
               }
               if (s1.length > 1) {
                    this.setFieldValue(s1[0], "1");
               }
               if (s2.length > 1) {
                    this.setFieldValue(s2[0], "2");
               }
               if (s3.length > 1) {
                    this.setFieldValue(s3[0], "3");
               }
          },
     };

     if (Blockly.JavaScript) {
          Blockly.JavaScript["game_block_guess_idioms"] = function (block) {
               return "";
          };
     }

     if (Blockly.Python) {
          Blockly.Python["game_block_guess_idioms"] = function (block) {
               return "";
          };
     }

     Blockly.Blocks["game_block_timer"] = {
          init: function () {
               this.appendDummyInput()
                    .appendField(" === 计时器 == 重置")
                    .appendField(new Blockly.FieldCheckbox("FALSE"), "reset")
                    .appendField("==");
               this.appendDummyInput()
                    .appendField(new Blockly.FieldNumber(0, 0, 9), "0")
                    .appendField(new Blockly.FieldNumber(0, 0, 9), "1")
                    .appendField(":")
                    .appendField(new Blockly.FieldNumber(0, 0, 5), "2")
                    .appendField(new Blockly.FieldNumber(0, 0, 9), "3")
                    .appendField(":")
                    .appendField(new Blockly.FieldNumber(0, 0, 5), "4")
                    .appendField(new Blockly.FieldNumber(0, 0, 9), "5");
               this.setColour(game_block_color);
               this.setTooltip("");
               this.setHelpUrl("");
               this.time = 0;
               var x = setInterval(() => {
                    if (!this.workspace) clearInterval(x);
                    if (this.isInFlyout) clearInterval(x);
                    if (this.time > 99 * 60 * 60 * 1000) {
                         this.time = 0;
                    }
                    this.restartTime();
                    this.time += 1000;
               }, 1000);
          },
          restartTime: function () {
               const d = new Date(this.time - 8 * 60 * 60 * 1000);
               const h = String(d.getHours());
               const m = String(d.getMinutes());
               const s = String(d.getSeconds());
               const t = `${h.length > 1 ? h : "0" + h}${m.length > 1 ? m : "0" + m
                    }${s.length > 1 ? s : "0" + s}`;
               for (const i in t) {
                    this.setFieldValue(t[i], String(i));
               }
          },
          onchange: function () {
               const iscb = this.getFieldValue("reset") == "TRUE";
               if (iscb) {
                    this.setFieldValue("FALSE", "reset");
                    this.time = 0;
                    this.restartTime();
               }
          },
     };

     if (Blockly.JavaScript) {
          Blockly.JavaScript["game_block_timer"] = function (block) {
               return "";
          };
     }

     if (Blockly.Python) {
          Blockly.Python["game_block_timer"] = function (block) {
               return "";
          };
     }
})();
