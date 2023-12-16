//@ts-nocheck
sap.ui.define([
    "../localService/mockserver",
    "sap/m/MessageBox"
],
    /**
     * @param { typeof sap.m.Messagebox } Messagebox
     */
    function (mockserver, Messagebox) {
        "use strict";

        var aMockservers = [];

        //initialize the mock server
        aMockservers.push(mockserver.init());

        Promise.all(aMockservers).catch(function (oError) {
            Messagebox.error(oError.message);
        }).finally(function() {
            sap.ui.require(["sap/ui/core/ComponentSupport"]);
        });
    });