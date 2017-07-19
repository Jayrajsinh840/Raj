var app=angular.module("myapp",['ngRoute','ngResource']);

app.config(function($routeProvider,$locationProvider){
 $routeProvider.when('/newEvent',{
 	templateUrl:"newhtml.html",
 	controller:"maincontrol"
 });
 $routeProvider.when('/allEvents',{
 	templateUrl:"Allevents.html",
 	controller:"eventcontroller"
 });
  $routeProvider.when('/eachEvents/:eventId',{
 	templateUrl:"eachevent.html",
 	controller:"eacheventcontroller"
 });
  
});