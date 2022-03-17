import oc1eItemSheet from "./module/sheets/oc1eItemSheet.js";

Hooks.once("init", function() {
    console.log("oc1e | Initalising Occovar System");

    CONFIG.oc1e = oc1e;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("oc1e", oc1eItemSheet, {makeDefault: true});
})