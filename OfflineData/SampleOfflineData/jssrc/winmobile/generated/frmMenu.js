//Form JS File
function frmMenu_btnLocalStore_onClick_seq0(eventobject) {
    frmLocalStore.show();
};

function frmMenu_btnWebSQL_onClick_seq0(eventobject) {
    frmWebSQL.show();
};

function addWidgetsfrmMenu() {
    var label12953670131523 = new kony.ui.Label({
        "id": "label12953670131523",
        "isVisible": true,
        "text": "Offline Data",
        "skin": "headLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox12953670131521 = new kony.ui.Box({
        "id": "hbox12953670131521",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox12953670131521.add(
    label12953670131523);
    var btnLocalStore = new kony.ui.Button({
        "id": "btnLocalStore",
        "isVisible": true,
        "text": "LocalStore",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMenu_btnLocalStore_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [8, 5, 8, 5],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnWebSQL = new kony.ui.Button({
        "id": "btnWebSQL",
        "isVisible": true,
        "text": "WebSQL",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMenu_btnWebSQL_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [8, 0, 8, 5],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmMenu.add(
    hbox12953670131521, btnLocalStore, btnWebSQL);
};

function frmMenuGlobals() {
    var MenuId = [];
    frmMenu = new kony.ui.Form2({
        "id": "frmMenu",
        "title": "Offline Data",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "addWidgets": addWidgetsfrmMenu
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
        "directChildrenIDs": ["btnLocalStore", "btnWebSQL", "hbox12953670131521", "label12953670131523"]
    });
};