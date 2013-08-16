//Form JS File
function frmMenu_btnLocalStore_onClick_seq0(eventobject) {
    frmLocalStore.show();
};

function frmMenu_btnWebSQL_onClick_seq0(eventobject) {
    frmWebSQL.show();
};

function addWidgetsfrmMenu() {
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
        "margin": [4, 5, 4, 5],
        "padding": [4, 4, 4, 4],
        "displayText": true,
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
        "margin": [4, 0, 4, 5],
        "padding": [4, 4, 4, 4],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmMenu.add(
    btnLocalStore, btnWebSQL);
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
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};