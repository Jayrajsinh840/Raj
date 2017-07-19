function quotes()
{
var country =["UK","USA","IND","BAN","BALL","ENG","NEPAL","CRICKET","TENNIS","HOCKEY"];

for ( var i = 0; i < country.length ; i++)
 {
 	alert(country[i]);
 }
}

function porg2()
{
var country =["UK","USA","IND","BAN","BALL","ENG","NEPAL","CRICKET","TENNIS","HOCKEY"];


document.write(country);
document.write("<br />");
document.write("after pop");

document.write("<br />");
country.pop();
document.write(country); 
document.write("<br />");
document.write(country.length);
}

function porg3()
{
var country =["UK","USA","IND","BAN","BALL","ENG","NEPAL","CRICKET","TENNIS","HOCKEY"];
country.reverse();
console.log(country);

console.log(country[7]);
}

function porg4()
{
var country =["UK","USA","IND","BAN","BALL","ENG","NEPAL","CRICKET","TENNIS","HOCKEY"];
var b=country.shift();

console.log(country);
console.log(country.length);

}

function porg5()
{
var country =["UK","USA","IND","BAN","BALL","ENG","NEPAL","CRICKET","TENNIS","HOCKEY"];
country.sort();

document.write(country);
}

function porg6()
{

 var arr =prompt("Enter number");
 var country =["UK","USA","IND","BAN","BALL","ENG","NEPAL","CRICKET","TENNIS","HOCKEY"];

 country.push(arr);

 console.log(country);

}

function porg7()
{
var arr =prompt("Enter number");
 var country =["UK","USA","IND","BAN","BALL","ENG","NEPAL","CRICKET","TENNIS","HOCKEY"];

 country.unshift(arr);

 console.log(country);
}

function porg8()
{
	var arr =prompt("Enter number");
 var country =["UK","USA","IND","BAN","BALL","ENG","NEPAL","CRICKET","TENNIS","HOCKEY"];

 country.splice(0,1,"jan","Boom");

 console.log(country);
}

function porg9()
{

var arr =prompt("Enter number");
 var country =["UK","USA","IND","BAN","BALL","ENG","NEPAL","CRICKET","TENNIS","HOCKEY"];

 country.slice(0,3);

 console.log(country);
}

function porg10()
{
	var first=[28,88,79,10,13];
	var second=[10,96,13,55,28];

	for (var i=0; i<first.length; i++ )
	{
		for ( var j=0; j<second.length; j++ )
		{
			if (first[i]===second[j])
			{
				alert("Match at" + i +"indext and "+j);
			}
		}
	}
}

function porg11()
{
	
	var days=["monday","tuesday","wednesday","thrusday","friday","saturday","sunday"];
	var inputday=prompt("Enter name of the week");
	inputday=inputday.toLowerCase();

	if (inputday=="sunday")
	{
		alert("This is a last days of the week");
	}

	var x= days.indexOf(inputday);
	for (var i=x+1; i<days.length; i++)
	{
		console.log(days[i]);
	}
	
}





function show()
{
	
	document.getElementById("newpara").style.visibility="hidden";

}

function showone()
{
	document.getElementById("newpara").style.visibility="visible";
}
	

