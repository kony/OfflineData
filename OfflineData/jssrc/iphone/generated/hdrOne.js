//Template File
function initializehdrOne() {
    hbox192735980024418 = new kony.ui.BoxTemplate({
        "id": "hbox192735980024418",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox192735980024418
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox192735980024418() {
        var image2192735980024419 = new kony.ui.Image2({
            "id": "image2192735980024419",
            "isVisible": true,
            "src": "konylogo.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        hbox192735980024418.add(
        image2192735980024419);
    }
};