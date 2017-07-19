var app= angular.module("myapp"); 

app.controller("mycontrol",function($scope,mycacheService,$parse)
{
	$scope.addtocache=function(key,value)
	{
		return mycacheService.put(key,value);
	};
	$scope.readfromcache=function(key)
	{
		return mycacheService.get(key);
	};
	$scope.getcachestats=function()
	{
		return mycacheService.info();
	};

	var res=$parse("1+2");
	console.log(res());

});