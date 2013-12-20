/*****************************************************************
 *	Name    : setItemvalues
 *	Author  : Kony
 *	Purpose : To set items on to the local store by taking key and value from the user. kony.decrement
 ******************************************************************/
function setItemvalues() {
    var key = frmOfflineData.txtSetItemkey.text;
    var value = frmOfflineData.txtSetItemValue.text;
    if (frmOfflineData.txtSetItemValue.text == "" || frmOfflineData.txtSetItemkey.text == "" || frmOfflineData.txtSetItemkey.text == null || frmOfflineData.txtSetItemValue.text == null) {
        alert("Please enter both key and values ");
        return;
    }
    kony.store.setItem(key, value);
    alert("Item is saved in local storage.You will be able to read the key even if the application or the device is restarted. ");
    frmOfflineData.txtSetItemkey.text = "";
    frmOfflineData.txtSetItemValue.text = "";
    frmOfflineData.lblClearMessage.text = "";
}
/*****************************************************************
 *	Name    : setItemvalues_Tablet
 *	Author  : Kony
 *	Purpose : To set items on to the local store by taking key and value from the user.
 ******************************************************************/
function setItemvalues_Tablet() {
    var key = frmOfflineData.txtSetItemkey.text;
    var value = frmOfflineData.txtSetItemValue.text;
    if (frmOfflineData.txtSetItemValue.text == "" || frmOfflineData.txtSetItemkey.text == "" || frmOfflineData.txtSetItemkey.text == null || frmOfflineData.txtSetItemValue.text == null) {
        alert("Please enter both key and values ");
        return;
    }
    kony.store.setItem(key, value);
    alert("Item is saved in local storage.You will be able to read the key even if the application or the device is restarted. ");
    frmOfflineData.txtSetItemkey.text = "";
    frmOfflineData.txtSetItemValue.text = "";
    frmOfflineData.lblClearMessage.text = "";
}
/*****************************************************************
 *	Name    : getItemvalues
 *	Author  : Kony
 *	Purpose : To display item value for the user key
 ******************************************************************/
function getItemvalues() {
    if (frmOfflineData.txtGetItemKey.text == "" || frmOfflineData.txtGetItemKey.text == null) {
        alert("Key is not entered");
        return;
    } else var key = frmOfflineData.txtGetItemKey.text;
    var value = kony.store.getItem(key);
    if ((value != null)) {
        alert("" + value);
    } else {
        alert("Key is not found");
    }
}
/*****************************************************************
 *	Name    : getItemvalues_Tab
 *	Author  : Kony
 *	Purpose : To display item value for the user key
 ******************************************************************/
function getItemvalues_Tab() {
    if (frmOfflineData.txtGetItemKey.text == "" || frmOfflineData.txtGetItemKey.text == null) {
        alert("Key is not entered");
        return;
    }
    var key = frmOfflineData.txtGetItemKey.text;
    var value = kony.store.getItem(key);
    if ((value != null)) {
        alert("" + value);
    } else {
        alert("Key is not found");
    }
}
/*****************************************************************
 *	Name    : GetKey
 *	Author  : Kony
 *	Purpose : The below function is to get the key for the user specified index
 ******************************************************************/
function GetKey() {
    if (frmOfflineData.txtReadKeyIndex.text == "" || frmOfflineData.txtReadKeyIndex.text == null) {
        alert("Index is not entered");
        return;
    } else {
        try {
            var key = kony.store.key(kony.os.toNumber(frmOfflineData.txtReadKeyIndex.text)); //kony.decrement(
        } catch (err) {
            // todo: handle exception
            kony.print("\n" + err + "\n");
        }
    }
    if ((key != null)) alert(key);
    else alert("Key is not found for given Index.");
}
/*****************************************************************
 *	Name    : GetKey_Tablet
 *	Author  : Kony
 *	Purpose : The below function is to get the key for the user specified index
 ******************************************************************/
function GetKey_Tablet() {
    if (frmOfflineData.txtReadKeyIndex.text == "" || frmOfflineData.txtReadKeyIndex.text == null) {
        alert("Index is not entered");
        return;
    } else {
        try {
            var key = kony.store.key(kony.os.toNumber(frmOfflineData.txtReadKeyIndex.text)); //kony.decrement(
        } catch (err) {
            // todo: handle exception
            kony.print("\n" + err + "\n");
        }
    }
    if ((key != null)) alert(key);
    else alert("Key is not found for given Index.");
}
/*****************************************************************
 *	Name    : RemoveItem
 *	Author  : Kony
 *	Purpose : To remove an item(Both key and value) from the local store for the user specified key
 ******************************************************************/
function RemoveItem() {
    if (frmOfflineData.txtRemoveItemKey.text == "" || frmOfflineData.txtRemoveItemKey.text == null) {
        alert("Key is not entered");
        return;
    } else var textkey = frmOfflineData.txtRemoveItemKey.text;
    var item = kony.store.getItem(textkey);
    if ((item != null)) {
        kony.store.removeItem(textkey);
        alert(textkey + " key/value is removed");
    } else {
        alert(textkey + " not found");
    }
}
/*****************************************************************
 *	Name    : RemoveItem_Tablet
 *	Author  : Kony
 *	Purpose : To remove an item(Both key and value) from the local store for the user specified key
 ******************************************************************/
function RemoveItem_Tablet() {
    if (frmOfflineData.txtRemoveItemKey.text == "" || frmOfflineData.txtRemoveItemKey.text == null) {
        alert("Key is not entered");
        return;
    } else var textkey = frmOfflineData.txtRemoveItemKey.text;
    var item = kony.store.getItem(textkey);
    if ((item != null)) {
        kony.store.removeItem(textkey);
        alert(textkey + " key/value is removed");
    } else {
        alert(textkey + " not found");
    }
}
/*****************************************************************
 *	Name    : ClearItem
 *	Author  : Kony
 *	Purpose : To clear the localstore
 ******************************************************************/
function ClearItem() {
    kony.store.clear();
    alert("Local Storage is cleared");
    frmOfflineData.txtGetItemKey.text = "";
    frmOfflineData.lblGetItemMessage.text = "";
    frmOfflineData.txtRemoveItemKey.text = "";
    frmOfflineData.lblRemoveItemMessage.text = "";
    frmOfflineData.lblReadKeyMessage.text = "";
    frmOfflineData.txtReadKeyIndex.text = "";
}
/*****************************************************************
 *	Name    : ClearItem_Tablet
 *	Author  : Kony
 *	Purpose : To clear the localstore
 ******************************************************************/
function ClearItem_Tablet() {
    kony.store.clear();
    alert("Local Storage is cleared");
    frmOfflineData.txtGetItemKey.text = "";
    frmOfflineData.lblGetItemMessage.text = "";
    frmOfflineData.txtRemoveItemKey.text = "";
    frmOfflineData.lblRemoveItemMessage.text = "";
    frmOfflineData.lblReadKeyMessage.text = "";
    frmOfflineData.txtReadKeyIndex.text = "";
}
/*****************************************************************
 *	Name    : navigateTofrmMenu
 *	Author  : Kony
 *	Purpose : Navigate to frmMenu
 ******************************************************************/
function navigateTofrmMenu() {
    frmMenu.show();
}
/*****************************************************************
 *	Name    : navigateTofrmWebSQL
 *	Author  : Kony
 *	Purpose : Navigate to frmWebSQL
 ******************************************************************/
function navigateTofrmWebSQL() {
    frmWebSQL.show();
}
/*****************************************************************
 *	Name    : navigateTofrmLocalStore
 *	Author  : Kony
 *	Purpose : Navigate to frmLocalStore
 ******************************************************************/
function navigateTofrmLocalStore() {
    frmLocalStore.show();
}
/*****************************************************************
 *	Name    : onClickLocalStore
 *	Author  : Kony
 *	Purpose : To change visibility of hboxs on clicking of segment row
 ******************************************************************/
function onClickLocalStore() {
    frmOfflineData.hbxLocalStore.setVisibility(true);
    frmOfflineData.hbxWebSQL.setVisibility(false);
}
/*****************************************************************
 *	Name    : onClickWebSQL
 *	Author  : Kony
 *	Purpose : To change visibility of hboxs on clicking of segment row
 ******************************************************************/
function onClickWebSQL() {
    frmOfflineData.hbxLocalStore.setVisibility(false);
    frmOfflineData.hbxWebSQL.setVisibility(true);
}