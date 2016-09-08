"use strict"

var checkmark = angular.module("core", [])

checkmark.filter("checkmark", function(){
	return function(input){
		return input ? "\u221a" : "\u2717"
	}
})
// \u221a \u2717

