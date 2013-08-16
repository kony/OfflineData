//Form JS File
function addWidgetsfrmWebSQLResults() {
    var segment21930040990147151box = new kony.ui.Box({
        "id": "segment21930040990147151box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 9
    }, {});
    var segment21930040990147151 = new kony.ui.SegmentedUI2({
        "id": "segment21930040990147151",
        "isVisible": true,
        "retainSelection": false,
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
        "containerWeight": 9
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
        "containerWeight": 33
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
        "containerWeight": 34
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
        "containerWeight": 33
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
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
    frmWebSQLResults.add(
    segment21930040990147151);
};

function frmWebSQLResultsGlobals() {
    var MenuId = [];
    frmWebSQLResults = new kony.ui.Form2({
        "id": "frmWebSQLResults",
        "title": "Result data",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "addWidgets": addWidgetsfrmWebSQLResults
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