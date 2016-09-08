"use strict"

var myapp = angular.module("myApp", [
	"core",
	"ngRoute",
	"phoneList",
	"phoneDetail"
])

myapp.config(["$locationProvider", "$routeProvider", 
	function($locationProvider, $routeProvider){
		$locationProvider.hashPrefix("!")
		
		$routeProvider.when("/phones", {
			template: "<phone-list></phone-list>"
		}).when("/phones/:phoneId", {
			template: "<phone-detail></phone-detail>"
		}).otherwise("/phones")
	}
])