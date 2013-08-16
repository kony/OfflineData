//Form JS File
function frmWebSQL_frmWebSQL_preshow_seq0(eventobject, neworientation) {
    frmWebSQL.lblSqlUpdate.text = ""
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
    var labelFormOptions123 = new kony.ui.Label({
        "id": "labelFormOptions123",
        "isVisible": true,
        "text": "WebSQL",
        "skin": "headLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 100
    }, {});
    var hboxformOptions123 = new kony.ui.Box({
        "id": "hboxformOptions123",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxformOptions123.add(
    labelFormOptions123);
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
    var lblSqlUpdate = new kony.ui.Label({
        "id": "lblSqlUpdate",
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
    hboxformOptions123, btnCreateDB, button1930040990147039, button1930040990147063, button1930040990147077, button1930040990147091, lblSqlUpdate);
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
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["btnCreateDB", "button1930040990147039", "button1930040990147063", "button1930040990147077", "button1930040990147091", "lblSqlUpdate", "hboxformOptions123", "labelFormOptions123"]
    });
};