sap.ui.controller("products.Product", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf products.Product
*/
	onInit: function() {
		//For Proxy Sites
		this.mainurl = "proxy/http/services.odata.org/V3/(S(feygibtzzg40234xbm0kzc3z))/OData/OData.svc";
		var oModel = new sap.ui.model.odata.ODataModel(this.mainurl);
		//var oModel = new sap.ui.model.odata.ODataModel("http://services.odata.org/V3/(S(feygibtzzg40234xbm0kzc3z))/OData/OData.svc");
		oModel.oHeaders = {
				"DataServiceVersion":"3.0",
				"MaxDataServiceVersion":"3.0"
		};
		sap.ui.getCore().setModel(oModel,"products");
		console.clear();
		console.log(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf products.Product
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf products.Product
*/
	onAfterRendering: function() {
		$("#formId").hide();
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf products.Product
*/
//	onExit: function() {
//
//	}
	
	mode: 0,
	
	resetForm : function(){
		$("#id").val('');
		$("#name").val('');
		$("#description").val('');
		$("#price").val('');
		$("#rating").val('');
	},
	
	create : function(){
		this.mode="create";
		this.resetForm();
		
		$("#formId").slideDown(300, function(){
			var id = sap.ui.getCore().byId("tableId")._getRowCount();
			$("#id").val(id);
		});
	},
	
	edit : function(){
		this.mode="edit";
		
		var oTable = sap.ui.getCore().byId("tableId");
		var selected = oTable.getSelectedIndex();
		if(selected == -1){
			alert("Select a row");
		}else{
			$("#formId").slideDown(300, function(){
				var data = oTable.getModel("products").oData["Products("+selected+")"];
				
				var id = data.ID;
				var name  = data.Name;
				var description = data.Description;
				var rating = data.Rating;
				var price = data.Price;
				
				$("#id").val(id);
				$("#name").val(name);
				$("#description").val(description);
				$("#rating").val(rating);
				$("#price").val(price);
				
				console.log(data);
			});
		}
	},
	
	removeId: 0,
	
	remove: function(){
		this.mode = "delete";
		var oTable = sap.ui.getCore().byId("tableId");
		var selected = oTable.getSelectedIndex();
		if(selected == -1){
			alert("Select a row");
		}else{
			var data = oTable.getModel("products").oData["Products("+selected+")"];				
			this.removeId = data.ID;
			this.save();
		}
	},
	
	save: function(){
		var requestObj = {
				requestUri : url,
				method : method,
				headers : {
					"X-Requested-With":"XMLHttpRequest",
					"Content-Type":"application/json;odata=minimalmetadata",
					"DataServiceVersion":"3.0",
					"MaxDataServiceVersion":"3.0",
					"Accept":"application/json;odata=minimalmetadata"
				},
			};
		
		var newData = {
			"odata.type":"ODataDemo.Product",
			"ID": $("#id").val(),
			"Name": $("#name").val(),
			"Description": $("#description").val(),
			"ReleaseDate": $("#date").val(),
			"Rating": $("#rating").val(),
			"Price": $("#price").val()
		};
		
		if(this.mode == "create"){
			var url = this.mainurl+"/Products";
			var method = "POST";
			
			requestObj.requestUri = url;
			requestObj.method = method;
			requestObj.data = newData;
		}else if(this.mode == "edit"){
			var id = $("#id").val();
			var url = this.mainurl+"/Products("+id+")";
			var method = "PUT";
			
			requestObj.requestUri = url;
			requestObj.method = method;
			requestObj.data = newData;			
		}else if(this.mode == "delete"){
			var url = this.mainurl+"/Products("+this.removeId+")";
			var method = "DELETE";
			requestObj.requestUri = url;
			requestObj.method = method;
			
		}
		
		OData.request(requestObj, function(){
			sap.ui.getCore().getModel("products").refresh();
			$("#formId").slideUp();
		});
	},

});