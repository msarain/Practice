sap.ui.jsview("demo.Page2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo.Page2
	*/ 
	getControllerName : function() {
		return "demo.Page2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo.Page2
	*/ 
	createContent : function(oController) {
		var oText = new sap.ui.commons.TextView({
			text: "{/mySecret}"	//"This is Page2"
		});
		return oText;
	}

});

//Example of JavaScript Object
/*
 * var User = {
 * 	 username:"Sibtain",
 *   setUserName: function(para){
 * 	   this.username=para;
 *   }
 * }
 * Checking Object
 * User.setUserName("Sibtain");
 * console.log(User.username);
 * 
 * One Way binding UI(input box=>logic=>model=>automatically=>view
 * Two Way binding UI(input box=>model=>automatically=>view
 */
 
