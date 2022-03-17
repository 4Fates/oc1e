import oc1eItemSheet from "../../module/sheets/oc1eItemSheet";

Hooks.once("init", function() {
    console.log("oc1e | Initalising Occovar System");

    oc1eItemSheet.unregisterSheet("core", ItemSheet)
    oc1eItemSheet.registerSheet("oc1e", oc1eItemSheet, {makeDefault:});
})