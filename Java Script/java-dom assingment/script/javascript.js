function Religions()
{
	var paragraph = document.getElementsByClassName("Culture");

	var ChangeText = paragraph[0].style.color=" #cc00cc";

	for ( var i=0; i < paragraph.length; i++ )
{

paragraph[i].style.fontStyle ="italic";
}

}




function print1()
{
	var str=document.getElementById("myinput").value;
	document.getElementById("secondinput").value=str;
	document.getElementById("myinput").value="";

}
function porg1()
{
	document.getElementById("image").src="Images/two.jpg";

}

function show()
{
	
	document.getElementById("image").style.visibility="hidden";

}

function showone()
{
	document.getElementById("image").style.visibility="visible";
}
	
	 

    var i= 0;
    var arr=["Images/three.jpg","Images/four.jpg","Images/five.jpg","Images/six.jpg","Images/seven.jpg","Images/eight.jpg","Images/nine.jpg","Images/ten.jpg"];

    

function next()
{
	i=i+1;
	document.getElementById("imageone").src=arr[i];
}

function previous()
{
	i=i-1;
	document.getElementById("imageone").src=arr[i];
}


function check(){
	var number=prompt("Enter a number ");
	number= parseInt(number);
	number=number * 9/5 + 32;

	document.getElementById("mm").innerHTML=number;
}

function focus1()
{
 document.getElementById("porg1").focus();
}

function focus45()
{
	var x =  document.getElementById("porg2").value;
	if (x==2 || x==3) 
	{
      if(x==2)
      {
      	document.getElementById("porg3").focus();
      }
      else  if(x==3)
      {
      	document.getElementById("porg4").focus();
      }
	}
	else{
		alert("enter correct value");
	}

}


function checkseven()
{

	document.getElementById("porg6").style.visibility="hidden";
}
function checkseven1()
{
	
	document.getElementById("porg6").style.visibility="visible";
}