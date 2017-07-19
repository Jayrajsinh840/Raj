function save()
{
	var a= document.getElementById("name").value;
	document.getElementById("name2").value=a;
	document.getElementById("name").value=" ";

	var b=document.getElementById("lastname").value;
	document.getElementById("lastname2").value=b;
	document.getElementById("lastname").value=" ";

	var c=document.getElementById("phone").value;
	document.getElementById("phone2").value=b;
	document.getElementById("phone").value=" ";

	var result=document.getElementById("male").checked;
	document.getElementById("male1").checked=result;
	document.getElementById("male").checked=false;
	
	var result1=document.getElementById("female").checked;
	document.getElementById("female2").checked=result1;
	document.getElementById("female").checked=false;


	
}

function edit()
{
	var a= document.getElementById("name2").value;
	document.getElementById("name").value=a;
	document.getElementById("name2").value=" ";

	var b=document.getElementById("lastname2").value;
	document.getElementById("lastname").value=b;
	document.getElementById("lastname2").value=" ";

	var c=document.getElementById("phone2").value;
	document.getElementById("phone").value=b;
	document.getElementById("phone2").value=" ";
	
	var result2=document.getElementById("male1").checked;
	document.getElementById("male").checked=result2;
	document.getElementById("male1").checked=false;


	var result1=document.getElementById("female2").checked;
	document.getElementById("female").checked=result1;
	document.getElementById("female2").checked=false;
}


function porg1()
{


var num=document.getElementById("a").value;




    if (num.match(/[^a-z]/gi))
    {
        alert("user entering number");
    }


    if (num.match(/[^0-9]/gi))
    {
        alert("user enter  alphabet");
    }


}

function show()
{
	console.log("WelCome");

}
function stop()
{
	setTimeout(show,3000);
}

