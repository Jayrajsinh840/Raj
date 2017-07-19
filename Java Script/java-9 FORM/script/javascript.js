function submitbutton()
{
	var num=document.getElementById("porg1").value;
	var numone=document.getElementById("porg2").value;
	var numthree=document.getElementById("porg3").value;

	if (num.match(/[^a-z]/gi))
	{
		alert("Enter only alphabet");
	}



	if (numthree.match(/[^a-z]/gi))
	{
		alert("Enter only alphabet");
	}



	if (numone.match(/[^0-9]/gi))
	{
		alert("Enter only number");
	}

	else
	{
		alert("Every things good");
	}

}


function gender()
{
	if (document.getElementById("male").checked && document.getElementById("female").checked)
	{
				alert("Something is wrong");

		
	}

	else if (document.getElementById("male").checked || document.getElementById("female").checked)
	{
		alert("Every things is Good ");

	}


	else
	{
		alert("Every thing is wrong ");
	}
}


function checkone()
{
	var number=document.getElementById("check").value;
	number=number * 2;

	document.getElementById("jjj").innerHTML=number;
}

















