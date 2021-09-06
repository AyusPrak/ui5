sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Fragment) {
		"use strict";

		return Controller.extend("leavem.controller.leave", {
			onInit: function () {

                this.student = {
                    id:this.giStudentId,
                    firstName:"",
                    middleName:"",
                    lastName:"",
                    gender:0,
                    genderText:"Female",
                    EmailID:"",
                    dateofBirth:"",
                    leaveFrom:"",
                    leaveTo:""
                };
                this.data={      //data creation for table model
                    students:[],
                    student:this.student
                };

            },
            onAfterRendering:function(){
                var oModel=new sap.ui.model.json.JSONModel(this.data);  //model creation for table
                this.getView().setModel(oModel);                        // setting model to view


            },
            handleRequestLeave: function (oEvent){
                if(!this._Dialog){
                    this._Dialog = sap.ui.xmlfragment("leavem.view.leaveFragment",this);
                    var oModel = new sap.ui.model.json.JSONModel();
                    this._Dialog.setModel(oModel);
                }
                var data= JSON.parse(JSON.stringify(this.student));
                this._Dialog.getModel().setData(data);
                this._Dialog.open(); 
            },

            handleCancelBtnPress: function(){
                this._Dialog.close();

            },
            handleSaveBtnPress:function(oEvent){
                var oModel=oEvent.getSource().getModel();  //getsource give me dialogue box and then the model  of that dialog
                var oDialogData= oModel.getData();        //gives data of dialog data

                var oViewData= this.getView().getModel().getData();  //getting the data of view it will gives us student object
                oViewData.students.push(oDialogData);               //pushing the dialog data into table
                this.getView().getModel().setData(oViewData);      //seting  the data to view
                this._Dialog.close();                             // used  for closing the dialog after save

            }
		});
	});
