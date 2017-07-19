var app=angular.module("myapp");
app.controller("maincontrol",function($scope,$location){
console.log('absUrl :',$location.absUrl());
console.log('protocol :',$location.protocol());
console.log('port :',$location.port());
console.log('host :',$location.host());
console.log('search :',$location.search());
console.log('hash :',$location.hash());
console.log('url :',$location.url());


  $scope.fname="Manmeet";
  $scope.lname="Arora";
  $scope.go=function(){
  $location.path("/newEvent");
  };
   $scope.events=function(){
   	$location.replace(); //removes the history. Can not go back to the previous page
    $location.path("/allEvents");
    };
   
});