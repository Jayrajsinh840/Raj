function convert(degree)
 {
    var x;
    if (degree == "C") 
    {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    } 
    else 
    {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}

function porg2()
{
	alert("Well come to my page");
}

function show()
{
	
	document.getElementById("newpara").style.visibility="hidden";

}

function showone()
{
	document.getElementById("newpara").style.visibility="visible";
}
	

function checkseven()
{

    document.getElementById("porg6").style.visibility="hidden";
}
function checkseven1()
{
    
    document.getElementById("porg6").style.visibility="visible";
}

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


     if (document.getElementById("male").checked && document.getElementById("female").checked)
    {
                alert("select only one");

        
    }

    if (document.getElementById("male").checked || document.getElementById("female").checked)
    {
        alert("Every things is Good ");

    }


     if (document.getElementById("india").checked && document.getElementById("australia").checked)
     {
         alert("Something is wrong in selection of country");

     }

    if (document.getElementById("india").checked || document.getElementById("australia").checked)
     {
         alert(" select country");
     }

     if (document.getElementById("porg11").unchecked)
     {
        alert("check the box");
     }

     
    else
    {
        alert("Every things good");
    }

}






