var app=angular.module("myapp");

app.controller("mycontrolone",function ($scope)    
	{
		$scope.jay=" i want to go india and ";
		$scope.raj="travel";
		$scope.sinh="all north state";
	});
app.controller("mycontroltwo",function ($scope)
{
	$scope.jayone="i want to see ";
		$scope.rajone="the taj mahal";
		$scope.sinhone="and delhi";
});
app.controller("mycontrolfive",function ($scope)
{
	$scope.myvalue=false;
});
app.controller("mycontrol11",function ($scope)
{
	$scope.myvalue=false;
});
app.controller("mycontrol22",function ($scope)
{
	$scope.myvalue=true;
});


app.controller("mycontrol44",function ($scope)
{
	$scope.myvalue=true;
	$scope.show=function()
	{
		$scope.myvalue=false;
	}
});

app.controller("mycontrol55",function ($scope)
{
	$scope.arr=["abc","def","ghj"];
});

app.controller("mycontrol66",function ($scope)
{
	$scope.arr=
	[
		
		{fname:"jay", lname:"raj"},
		{fname:"jay", lname:"swaminarayan"},
		{fname:"raj", lname:"parmar"}

	];
});

app.controller("mycontrol67",function ($scope)
{
	$scope.arr12=
	[
		
		{fname:"bjay", lname:"xraj"},
		{fname:"ajay", lname:"yswaminarayan"},
		{fname:"craj", lname:"zparmar"}

	];
});




