/*****************************************************************
 *	Name    : setItemvalues
 *	Author  : Kony
 *	Purpose : To set items on to the local store by taking key and value from the user. kony.decrement
 ******************************************************************/
function setItemvalues() {
    var key = frmLocalStore.txtSetItemkey.text;
    var value = frmLocalStore.txtSetItemValue.text;
    if (frmLocalStore.txtSetItemValue.text == "" || frmLocalStore.txtSetItemkey.text == "" || frmLocalStore.txtSetItemkey.text == null || frmLocalStore.txtSetItemValue.text == null) {
        alert("Please enter both key and values ");
        return;
    }
    kony.store.setItem(key, value);
    alert("Item is saved in local storage.You will be able to read the key even if the application or the device is restarted. ");
    frmLocalStore.txtSetItemkey.text = "";
    frmLocalStore.txtSetItemValue.text = "";
    frmLocalStore.lblClearMessage.text = "";
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
    if (frmLocalStore.txtGetItemKey.text == "" || frmLocalStore.txtGetItemKey.text == null) {
        alert("Key is not entered");
        return;
    } else var key = frmLocalStore.txtGetItemKey.text;
    var value = kony.store.getItem(key);
    if ((value != null)) {
        alert("" + value);
    } else {
        alert("Key is not found");
    }
    frmLocalStore.txtGetItemKey.text = "";
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
    frmOfflineData.txtGetItemKey.text = "";
}
/*****************************************************************
 *	Name    : GetKey
 *	Author  : Kony
 *	Purpose : The below function is to get the key for the user specified index
 ******************************************************************/
function GetKey() {
    if (frmLocalStore.txtReadKeyIndex.text == "" || frmLocalStore.txtReadKeyIndex.text == null) {
        alert("Index is not entered");
        return;
    } else {
        try {
            var key = kony.store.key(kony.os.toNumber(frmLocalStore.txtReadKeyIndex.text)); //kony.decrement(
        } catch (err) {
            // todo: handle exception
            kony.print("\n" + err + "\n");
        }
    }
    if ((key != null)) alert(key);
    else alert("Key is not found for given Index.");
    frmLocalStore.txtReadKeyIndex.text = "";
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
    frmOfflineData.txtReadKeyIndex.text = "";
}
/*****************************************************************
 *	Name    : RemoveItem
 *	Author  : Kony
 *	Purpose : To remove an item(Both key and value) from the local store for the user specified key
 ******************************************************************/
function RemoveItem() {
    if (frmLocalStore.txtRemoveItemKey.text == "" || frmLocalStore.txtRemoveItemKey.text == null) {
        alert("Key is not entered");
        return;
    } else var textkey = frmLocalStore.txtRemoveItemKey.text;
    var item = kony.store.getItem(textkey);
    if ((item != null)) {
        kony.store.removeItem(textkey);
        alert(textkey + " key/value is removed");
    } else {
        alert(textkey + " not found");
    }
    frmLocalStore.txtRemoveItemKey.text = "";
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
    frmOfflineData.txtRemoveItemKey.text = "";
}
/*****************************************************************
 *	Name    : ClearItem
 *	Author  : Kony
 *	Purpose : To clear the localstore
 ******************************************************************/
function ClearItem() {
    kony.store.clear();
    alert("Local Storage is cleared");
    frmLocalStore.txtGetItemKey.text = "";
    /* frmLocalStore.lblGetItemMessage.text ="";*/
    frmLocalStore.txtRemoveItemKey.text = "";
    /*frmLocalStore.lblRemoveItemMessage.text="";*/
    /*frmLocalStore.lblReadKeyMessage.text="";*/
    frmLocalStore.txtReadKeyIndex.text = "";
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
    frmOfflineData.txtRemoveItemKey.text = "";
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