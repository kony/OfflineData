//Form JS File
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
        "margin": [8, 3, 8, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
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
        "margin": [8, 4, 8, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
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
        "margin": [8, 4, 8, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
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
        "margin": [8, 4, 8, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
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
        "margin": [8, 4, 8, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
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
        "margin": [8, 2, 8, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {});
    var vbox118266766022159 = new kony.ui.Box({
        "id": "vbox118266766022159",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 44,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox118266766022159.add(
    btnCreateDB, button1930040990147039, button1930040990147063, button1930040990147077, button1930040990147091, lblSqlUpdate);
    var segment21930040990147151box = new kony.ui.Box({
        "id": "segment21930040990147151box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 15
    }, {});
    var segment21930040990147151 = new kony.ui.SegmentedUI2({
        "id": "segment21930040990147151",
        "isVisible": true,
        "widgetDataMap": {
            "hbox1930040990147164": "hbox1930040990147164",
            "lblDepId": "lblDepId",
            "lblEmpID": "lblEmpID",
            "lblEmpName": "lblEmpName"
        },
        "rowTemplate": segment21930040990147151box,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [2, 2, 2, 2],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {});
    var lblEmpID = new kony.ui.Label({
        "id": "lblEmpID",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {});
    var lblEmpName = new kony.ui.Label({
        "id": "lblEmpName",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var lblDepId = new kony.ui.Label({
        "id": "lblDepId",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32
    }, {});
    var hbox1930040990147164 = new kony.ui.Box({
        "id": "hbox1930040990147164",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990147164.add(
    lblEmpID, lblEmpName, lblDepId);
    segment21930040990147151box.add(
    hbox1930040990147164);
    var scrollbox192920699721096 = new kony.ui.ScrollBox({
        "id": "scrollbox192920699721096",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 70,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    scrollbox192920699721096.add(
    segment21930040990147151);
    var hbox193117320324811 = new kony.ui.Box({
        "id": "hbox193117320324811",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox193117320324811.add(
    scrollbox192920699721096);
    var vbox193117320324810 = new kony.ui.Box({
        "id": "vbox193117320324810",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 55,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox193117320324810.add(
    hbox193117320324811);
    var hbox118266766022146 = new kony.ui.Box({
        "id": "hbox118266766022146",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 62,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [8, 0, 8, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox118266766022146.add(
    vbox118266766022159, vbox193117320324810);
    frmWebSQL.add(
    hbox118266766022146);
};

function frmWebSQLGlobals() {
    var MenuId = [];
    frmWebSQL = new kony.ui.Form2({
        "id": "frmWebSQL",
        "title": "WebSQL",
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "needAppMenu": true,
        "addWidgets": addWidgetsfrmWebSQL
    }, {
        "padding": [0, 3, 0, 3],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "layout": constants.Vertical,
        "titleBar": true,
        "showBackButton": true,
        "directChildrenIDs": ["labelFormOptions123", "hbox118266766022146", "vbox118266766022159", "lblSqlUpdate", "button1930040990147091", "button1930040990147077", "button1930040990147063", "button1930040990147039", "btnCreateDB", "vbox193117320324810", "hbox193117320324811", "scrollbox192920699721096", "segment21930040990147151"],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};