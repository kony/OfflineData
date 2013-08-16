/*****************************************************************
 *	Name    : setItemvalues
 *	Author  : Kony Solutions
 *	Purpose : To set items on to the local store by taking key and value from the user.
 ******************************************************************/
function setItemvalues() {
    var key = frmLocalStore.frmLocalTxtSet1.text;
    var value = frmLocalStore.frmLocalTxtSet2.text;
    if (frmLocalStore.frmLocalTxtSet2.text == "" || frmLocalStore.frmLocalTxtSet1.text == "" || frmLocalStore.frmLocalTxtSet1.text == null || frmLocalStore.frmLocalTxtSet2.text == null) {
        alert("Please enter both key and values ");
        return;
    }
    kony.store.setItem(key, value);
    alert("Item is saved in local storage.You will be able to read the key even if the application or the device is restarted. ");
    frmLocalStore.frmLocalTxtSet1.text = "";
    frmLocalStore.frmLocalTxtSet2.text = "";
    frmLocalStore.lblLocalClear.text = "";
}
/*****************************************************************
 *	Name    : getItemvalues
 *	Author  : Kony Solutions
 *	Purpose : To display item value for the user key
 ******************************************************************/
function getItemvalues() {
    if (frmLocalStore.frmLocalTxtGet1.text == "" || frmLocalStore.frmLocalTxtGet1.text == null) {
        frmLocalStore.frmLocalLblGet1.text = "Key is not entered";
        return;
    } else var key = frmLocalStore.frmLocalTxtGet1.text;
    var value = kony.store.getItem(key);
    if ((value != null)) frmLocalStore.frmLocalLblGet1.text = "" + value;
    else frmLocalStore.frmLocalLblGet1.text = "Key is not found";
}
/*****************************************************************
 *	Name    : GetKey
 *	Author  : Kony Solutions
 *	Purpose : The below function is to get the key for the user specified index
 ******************************************************************/
function GetKey() {
    if (frmLocalStore.frmLocalTxtGetKey1.text == "" || frmLocalStore.frmLocalTxtGetKey1.text == null) {
        frmLocalStore.frmLocalLblGetKey1.text = "Index is not entered";
        return;
    } else {
        try {
            var key = kony.store.key(kony.decrement(kony.os.toNumber(frmLocalStore.frmLocalTxtGetKey1.text)));
        } catch (err) {
            // todo: handle exception
            frmLocalStore.frmLocalLblGetKey1.text = "Key is not found for given Index.";
        }
    }
    if ((key != null)) frmLocalStore.frmLocalLblGetKey1.text = key;
    else frmLocalStore.frmLocalLblGetKey1.text = "Key is not found for given Index.";
}
/*****************************************************************
 *	Name    : RemoveItem
 *	Author  : Kony Solutions
 *	Purpose : To remove an item(Both key and value) from the local store for the user specified key
 ******************************************************************/
function RemoveItem() {
    if (frmLocalStore.frmLocalTxtIndex.text == "" || frmLocalStore.frmLocalTxtIndex.text == null) {
        frmLocalStore.frmLocalLblIndex.text = "Key is not entered";
        return;
    } else var textkey = frmLocalStore.frmLocalTxtIndex.text;
    var item = kony.store.getItem(textkey);
    if ((item != null)) {
        kony.store.removeItem(textkey);
        frmLocalStore.frmLocalLblIndex.text = textkey + " key/value is removed";
    } else {
        frmLocalStore.frmLocalLblIndex.text = textkey + " not found";
    }
}
/*****************************************************************
 *	Name    : ClearItem
 *	Author  : Kony Solutions
 *	Purpose : To clear the localstore
 ******************************************************************/
function ClearItem() {
    kony.store.clear();
    frmLocalStore.lblLocalClear.text = "Local Storage is cleared";
    frmLocalStore.frmLocalTxtGet1.text = "";
    frmLocalStore.frmLocalLblGet1.text = "";
    frmLocalStore.frmLocalTxtIndex.text = "";
    frmLocalStore.frmLocalLblIndex.text = "";
    frmLocalStore.frmLocalLblGetKey1.text = "";
    frmLocalStore.frmLocalTxtGetKey1.text = "";
}