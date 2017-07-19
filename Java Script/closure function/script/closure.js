function porg1()
{
	function outer()
	{
		var x=6;
		function inner ()
		{
			return x;
		}
		return inner ;
	}
	var result=outer();
	alert(result());
}

function porg2()
{
	function accept (username)
	{
		return function (password)
		{
			alert("username"+username+"matches password"+password);
		};
	}
	var myaccount=accept("raj");

	myaccount("1234")
}

function porg3()
{
	
}