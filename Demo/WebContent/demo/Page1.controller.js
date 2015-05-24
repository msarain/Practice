sap.ui.controller("demo.Page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf demo.Page1
*/
	onInit: function() {
		/*myModel = new sap.ui.model.json.JSONModel();
		var json = [];
		json.mySecret = sap.ui.getCore().byId(this.createId("secretId")).getValue();		
		myModel.setData(json);		
		myModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);*/
				
		//To Get Data Using ajax
/*		var oModel = new sap.ui.model.json.JSONModel();
		$.ajax({
			url:"http://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json",
			dataType: "json",
			success: function(response){
				//console.clear();
				//console.log(response.value);
				var data = response.value;
				oModel.setData(data);
			}
		});
		
*/		
		//
		var oModel = new sap.ui.model.json.JSONModel("http://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json");
		sap.ui.getCore().setModel(oModel,"northwind");

		var oModel1 = new sap.ui.model.json.JSONModel("http://ajaxtown.com/playground/data.php");
		sap.ui.getCore().setModel(oModel1,"ajaxtown");

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf demo.Page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf demo.Page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf demo.Page1
*/
//	onExit: function() {
//
//	}

	navigateToPage2: function(view){
		
		
		var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
		oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		oHashChanger.setHash(oRouter.getURL(view));
	},
});