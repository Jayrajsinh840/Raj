function porg1()
{
	function show()
	{
		return 1;
	}
	var result=show();
	alert(result);
}

function porg2()
{
	function add(a,b)
	{
		return a+b;
	}


var addition= add(6,8);
alert(addition);

}

function porg3()
{
	var result = function (a,b)

	{
		return a+b;
	}
	alert(result(6,8));
}

function porg4()
{
	var result=function()
	{
		alert("welcome to page");
	};
	function greeting (message)
	{
		message();
	}
	greeting(result);
}

function porg5()
{
	var numbers=[1,2,3,4];
	var result=numbers.map(function(a)
	{
		return a*2;
	}
	);

	for (x in result)                          
	{
		console.log(result[x]);
	}

}

function porg6()
{
	function check ()
	{
		var a = prompt("Enter a number");
		 a= parseInt(a);
		if (a%2==0)
		{
			return function()
			{
				alert("Even number");
			}
		}
		else
		 {
		 		return function()
		 		{
		 			alert("add number");
		 		}
		 }	
		
	}
check()();
}