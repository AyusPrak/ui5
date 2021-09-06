/*global QUnit*/

sap.ui.define([
	"leavem/controller/leave.controller"
], function (Controller) {
	"use strict";

	QUnit.module("leave Controller");

	QUnit.test("I should test the leave controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
