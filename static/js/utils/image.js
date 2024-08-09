CodeBlocklyLoader.onload(function () {
    const utils = CodeBlockly.utils = (CodeBlockly.utils || Object.create(null));
    const image = {};

    image.svgToImage = function (svg, useBg, width, height) {
        return new Promise((resolve, reject) => {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;

            var svgData = new XMLSerializer().serializeToString(svg);

            var img = new Image();

            img.onload = function () {
                if (useBg) {
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(0, 0, width, height);
                }
                ctx.drawImage(img, 0, 0);

                canvas.toBlob(function (s) {
                    var dataurl = canvas.toDataURL('image/png');

                    resolve({
                        dataurl,
                        blob: s,
                        width, height
                    });
                }, 'image/png');

            };

            img.onerror = function () {
                reject(new Error('Failed to load the image.'));
            };

            img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));

        });
    }


    // 导出模块
    utils.image = image;
});