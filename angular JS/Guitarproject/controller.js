var app=angular.module("myapp");
 
 app.controller("eventcontroller",function($scope,$location,eventservice,$resource){
   
    eventservice.getEvent().$promise.then(function(event){
    	$scope.event=event;
    	console.log(event);
    },function(response){console.log(response);
    });
    
 });