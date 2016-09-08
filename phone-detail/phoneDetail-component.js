"use strict"

var phonedetail = angular.module("phoneDetail", [
	"data",
	"ngRoute"
])

phonedetail.component("phoneDetail", {
	templateUrl: "phone-detail/phoneDetail.html",
	controller: ["$routeParams", "phone", function($routeParams, phone){
		var self = this
		
		self.phone = phone.get({phoneId: $routeParams.phoneId}, function(phone){
			self.setImageUrl(phone.images[0])
		})
		
		self.setImageUrl = function(imgUrl){
			self.mainImageUrl = imgUrl
		}
		//self.phone = phone.query()
	}]
})