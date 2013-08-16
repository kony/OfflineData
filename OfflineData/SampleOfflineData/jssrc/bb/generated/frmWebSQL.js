//Form JS File
function frmWebSQL_frmWebSQL_preshow_seq0(eventobject, neworientation) {
    frmWebSQL.lblWebSqlUpdate.text = ""
};

function frmWebSQL_btnCreateDB_onClick_seq0(eventobject) {
    createDB.call(this);
};

function frmWebSQL_button1930040990147039_onClick_seq0(eventobject) {
    doTransactioninsertData.call(this);
};

function frmWebSQL_button1930040990147063_onClick_seq0(eventobject) {
    doTransactionsqlSelect.call(this);
};

function frmWebSQL_button1930040990147077_onClick_seq0(eventobject) {
    doTransactionUpdate.call(this);
};

function frmWebSQL_button1930040990147091_onClick_seq0(eventobject) {
    doTransactionDelete.call(this);
};

function addWidgetsfrmWebSQL() {
    var btnCreateDB = new kony.ui.Button({
        "id": "btnCreateDB",
        "isVisible": true,
        "text": "Create database",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_btnCreateDB_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1930040990147039 = new kony.ui.Button({
        "id": "button1930040990147039",
        "isVisible": true,
        "text": "Insert data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_button1930040990147039_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1930040990147063 = new kony.ui.Button({
        "id": "button1930040990147063",
        "isVisible": true,
        "text": "Show data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_button1930040990147063_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1930040990147077 = new kony.ui.Button({
        "id": "button1930040990147077",
        "isVisible": true,
        "text": "Update data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_button1930040990147077_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button1930040990147091 = new kony.ui.Button({
        "id": "button1930040990147091",
        "isVisible": true,
        "text": "Delete data",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmWebSQL_button1930040990147091_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lblWebSqlUpdate = new kony.ui.Label({
        "id": "lblWebSqlUpdate",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmWebSQL.add(
    btnCreateDB, button1930040990147039, button1930040990147063, button1930040990147077, button1930040990147091, lblWebSqlUpdate);
};

function frmWebSQLGlobals() {
    var MenuId = [];
    frmWebSQL = new kony.ui.Form2({
        "id": "frmWebSQL",
        "title": "WebSQL",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "preShow": frmWebSQL_frmWebSQL_preshow_seq0,
        "addWidgets": addWidgetsfrmWebSQL
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "titleBarSkin": "BBTitlebar",
        "titleBar": true,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};