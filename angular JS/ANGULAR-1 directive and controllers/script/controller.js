var app=angular.module("myapp");    /*linking to the myapp.js file*/

app.controller("mycontrol",function ($scope)    
	{
		$scope.myName="Jayrajsinh parmar from india";
		$scope.first="Raj love to travel";
	});

app.controller("mycontrol100",function ($scope)    
	{
		$scope.amt=10101;
		
	});

app.controller("mycontrol101",function ($scope)
{
	$scope.arr12=
	[
		
		{fname:"jay", lname:"raj"},
		{fname:"appu", lname:"swaminarayan"},
		{fname:"kraj", lname:"parmar"}

	];
});

