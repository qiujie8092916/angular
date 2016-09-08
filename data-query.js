"use strict"

var data = angular.module("data", [
	"ngResource"
])

data.factory("phone", ["$resource", 
	function($resource){
		return $resource("phones/:phoneId.json", {}, {
			query: {
				method: "get",
				params: {phoneId: "phones"},
				isArray: true
			}
		})
	}
])