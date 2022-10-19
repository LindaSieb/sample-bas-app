/*global QUnit*/

sap.ui.define([
	"project1/controller/SampleApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SampleApp Controller");

	QUnit.test("I should test the SampleApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
