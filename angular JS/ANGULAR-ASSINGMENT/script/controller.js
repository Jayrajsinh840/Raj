var app= angular.module("myapp"); 


app.controller("newctrl",function ($scope)
{
$scope.myinput="protekwwc";
});

app.controller("newctrl11",function ($scope)
{
$scope.myinput="hello";
});

app.controller("newctrl22",function ($scope)
{
$scope.myinput="world";
});

app.controller("mycontrol67",function ($scope)
{
	$scope.arr12=
	[
		
		{fname:"ejay", age:25, gender:"male",height:"5feet"},
		{fname:"djay", age:26, gender:"female",height:"6feet"},
		{fname:"craj", age:27, gender:"male",height:"7feet"},
		{fname:"bjay", age:28, gender:"male",height:"8feet"},
		{fname:"ajay", age:29, gender:"female",height:"9feet"}

	];
});
