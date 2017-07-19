var app= angular.module("myapp");    



app.controller("mycontrol",function($scope,$http,$log,$interval)
{
	$http.get("guitardata.json").then(function(response)
	{
		$scope.users=response.data;
	},
	function(reason)
	{
		$scope.errMessage=reason;
	});

	$log.info("going to start the service");
	$log.info("Data Retrived");
	$log.info("service Requested completed");

	var show=function()
	{
		console.log("jay swaminarayan");
	}

	$interval(show,2000);
});