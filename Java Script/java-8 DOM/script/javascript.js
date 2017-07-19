
function print1()
{
	var str=document.getElementById("myinput").value;
	document.getElementById("secondinput").value=str;
	document.getElementById("myinput").value="";

}

function swap()
{
	var strone=document.getElementById("one").value;
	var strtwo=document.getElementById("two").value;
	var strthree=document.getElementById("three").value;

	document.getElementById("two").value=strone;
	document.getElementById("three").value=strtwo;
	document.getElementById("one").value=strthree;

}

function checkone()
{
	var num=document.getElementById("check").value;

	if (num%2==0)
	{
		alert("even");
	}

	else 
	{
		alert("odd");
	}
}

function checktwo()
{
	var num=document.getElementById("oneone").value;

	if (num==1)
	{
		alert("one");
	}

	else if (num==2)
	{
		alert("two");
	}

	else if (num==3)
	{
		alert("three");

	}
	else
	{
		alert("error");
	}
}

function checkthree()
{
	var num=document.getElementById("porg1").value;


	if (num.match(/[^0-9]/gi))
	{
		alert("Enter only number");
	}
}

function checkfour()
{
	var num=document.getElementById("porg2").value;


	if (num.match(/[^a-z]/gi))
	{
		alert("Enter only alphabet");
	}
}



function checkfive()
{
	var num=document.getElementById("porg3").value;

 if (num%2==0)
{
	alert("even");
}
else
{
	alert("odd");
}

}


function show()
{
	 var x = document.getElementById("porg4").value;
	 alert(x);
   
}

/*function checksix()
{
	var x =document.getElementById("porg5").value;
	alert("hello");
}
*/
function checkseven()
{

	alert("hello out");
}
function checkseven1()
{
	
	alert("hello in");
}

function porg7()
{
	alert("welcome to my page");
}

function porg8()
{
	




