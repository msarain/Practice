sap.ui.jsview("demo.Page1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo.Page1
	*/ 
	getControllerName : function() {
		return "demo.Page1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo.Page1
	*/ 
	createContent : function(oController) {
		/*
		var oText = new sap.ui.commons.TextView({
			text: "This is Page1"
		});
		
		var oInput = new sap.ui.commons.TextField(this.createId("secretId"),{
			value:"{/mySecret}"
		});
		
		var oButton = new sap.ui.commons.Button({
			text:"Submit",
			press: function(){
				oController.navigateToPage2("Page2");
			}
		});
		
		var ele = [oText, oInput, oButton];
		*/
		//NorthWind Data
		var oTable = new sap.ui.table.Table({
			tableId:"mytable",
			firstVisibleRow:5,
			visibleRowCount:5,
			editable:false,
		});
		
		var oControl = new sap.ui.commons.TextView({text:"{northwind>ContactName}"});
		oTable.addColumn(new sap.ui.table.Column({
			label:"Contact Name",
			visible:true,
			template:oControl,
		}));
		
		var oControl = new sap.ui.commons.TextView({text:"{northwind>ContactTitle}"});
		oTable.addColumn(new sap.ui.table.Column({
			label:"Contact Title",
			visible:true,
			template:oControl
		}));
		//Using ajax
		//oTable.bindRows("/");
		
		//direct URL in Json Model
		oTable.bindRows("northwind>/value");

		//ajaxtown Data
		var oTable1 = new sap.ui.table.Table({
			tableId:"mytable1",
			firstVisibleRow:5,
			visibleRowCount:5,
			editable:false,
		});
		
		var oControl = new sap.ui.commons.TextView({text:"{ajaxtown>firstName}"});
		oTable1.addColumn(new sap.ui.table.Column({
			label:"First Name",
			visible:true,
			template:oControl,
		}));
		
		var oControl = new sap.ui.commons.TextView({text:"{ajaxtown>lastName}"});
		oTable1.addColumn(new sap.ui.table.Column({
			label:"Last Title",
			visible:true,
			template:oControl
		}));
		oTable1.bindRows("ajaxtown>/");
		
		var oTables = [oTable,oTable1];
		return oTables;
	}

});
