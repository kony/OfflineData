//Form JS File
function frmHome_button1296260743355_onClick_seq0(eventobject) {
    frmMenu.show();
};

function addWidgetsfrmHome() {
    var label1296260743354 = new kony.ui.Label({
        "id": "label1296260743354",
        "isVisible": true,
        "text": "This application will showcase the following features of the Offline Data Access APIs",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 2],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {});
    var label12953968042495 = new kony.ui.Label({
        "id": "label12953968042495",
        "isVisible": true,
        "text": "-Storing simple Key-Value pairs in the device data store",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 0],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label12953968042496 = new kony.ui.Label({
        "id": "label12953968042496",
        "isVisible": true,
        "text": "-Storing complex structures using WebSQL",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 5],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1296260743355 = new kony.ui.Button({
        "id": "button1296260743355",
        "isVisible": true,
        "text": "Continue",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button1296260743355_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 15, 4, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmHome.add(
    label1296260743354, label12953968042495, label12953968042496, button1296260743355);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": "Home",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "titleBarSkin": "BBTitlebar",
        "titleBar": true,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};