//Form JS File
function frmWebSQL_frmWebSQL_preshow_seq0(eventobject, neworientation) {
    frmWebSQL.lblSqlUpdate.text = ""
};

function frmWebSQL_btnCreateDB_onClick_seq0(eventobject) {
    createDB.call(this);
};

function frmWebSQL_btnInsertData_onClick_seq0(eventobject) {
    doTransactioninsertData.call(this);
};

function frmWebSQL_btnUpdateData_onClick_seq0(eventobject) {
    doTransactionUpdate.call(this);
    doTransactionsqlUpdate.call(this);
};

function frmWebSQL_btnDeleteData_onClick_seq0(eventobject) {
    doTransactionDelete.call(this);
    doTransactionsqlDelete.call(this);
};

function addWidgetsfrmWebSQL() {
    var lblTitleSPA = new kony.ui.Label({
        "id": "lblTitleSPA",
        "isVisible": true,
        "text": "WebSQL",
        "skin": "sknLblKonyThemeAppHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnCreateDB = new kony.ui.Button({
        "id": "btnCreateDB",
        "isVisible": true,
        "text": "Create database",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmWebSQL_btnCreateDB_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnInsertData = new kony.ui.Button({
        "id": "btnInsertData",
        "isVisible": true,
        "text": "Insert data",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmWebSQL_btnInsertData_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnUpdateData = new kony.ui.Button({
        "id": "btnUpdateData",
        "isVisible": true,
        "text": "Update data",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmWebSQL_btnUpdateData_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnDeleteData = new kony.ui.Button({
        "id": "btnDeleteData",
        "isVisible": true,
        "text": "Delete data",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmWebSQL_btnDeleteData_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [0, 2, 0, 2],
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
        "skin": "sknLblKonyThemeNormal"
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
    lblTitleSPA, btnCreateDB, btnInsertData, btnUpdateData, btnDeleteData, lblSqlUpdate);
};

function frmWebSQLGlobals() {
    var MenuId = [];
    frmWebSQL = new kony.ui.Form2({
        "id": "frmWebSQL",
        "title": "WebSQL",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "preShow": frmWebSQL_frmWebSQL_preshow_seq0,
        "addWidgets": addWidgetsfrmWebSQL
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "titleBar": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};