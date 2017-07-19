var app=angular.module("myapp",['ngRoute','ngResource']);

app.config(function($routeProvider,$locationProvider){
 $routeProvider.when('/product',{
 	templateUrl:"index.html",
 	controller:"eventcontroller"
 });

});