//Form JS File
function addWidgetsfrmWebSQLResults() {
    var segResultDatabox = new kony.ui.Box({
        "id": "segResultDatabox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 9
    }, {});
    var segResultData = new kony.ui.SegmentedUI2({
        "id": "segResultData",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblDepId": "lblDepId",
            "lblEmpID": "lblEmpID",
            "lblEmpName": "lblEmpName",
            "hbxResultData": "hbxResultData"
        },
        "rowTemplate": segResultDatabox,
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
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
        "skin": "sknLblBlackFont"
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
    }, {
        "renderAsAnchor": false
    });
    var lblEmpName = new kony.ui.Label({
        "id": "lblEmpName",
        "isVisible": true,
        "skin": "sknLblBlackFont"
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
    }, {
        "renderAsAnchor": false
    });
    var lblDepId = new kony.ui.Label({
        "id": "lblDepId",
        "isVisible": true,
        "skin": "sknLblBlackFont"
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
    }, {
        "renderAsAnchor": false
    });
    var hbxResultData = new kony.ui.Box({
        "id": "hbxResultData",
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxResultData.add(
    lblEmpID, lblEmpName, lblDepId);
    segResultDatabox.add(
    hbxResultData);
    frmWebSQLResults.add(
    segResultData);
};

function frmWebSQLResultsGlobals() {
    var MenuId = [];
    frmWebSQLResults = new kony.ui.Form2({
        "id": "frmWebSQLResults",
        "title": "Result data",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmWebSQLResults
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};