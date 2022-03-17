import { oc1e } from "./module/sheets/config.js";
import oc1eItemSheet from "./module/sheets/oc1eItemSheet.js";

Hooks.once("init", function() {
    console.log("oc1e | Initalising Occovar System");

    CONFIG.oc1e = oc1e;

    oc1eItemSheet.unregisterSheet("core", ItemSheet);
    oc1eItemSheet.registerSheet("oc1e", oc1eItemSheet, {makeDefault: true});
})