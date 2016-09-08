"use strict"

var phonelist = angular.module("phoneList", [
	"data"
])

phonelist.component("phoneList", {
	templateUrl: "phone-list/phoneList.html",
	controller: ["phone","$interval", function(phone, $interval){
		var self = this

		self.phones = phone.query()
		self.orderProp = "age"
		
		self.time = new Date()
		
		$interval(function(){
			if(self.time !== new Date()){
				self.time = new Date()
			}
		},1000)
	}]
})