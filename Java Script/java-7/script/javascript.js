function print()                  /* This is a mactching array with number */
{
	var first=[6,8,9,10,3];
	var second=[10,9,7,5,4];

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

function print1()                /*This is a matching array with string*/
{
	var first=["jay","raj","sinh","parmar","bapu"];
	var second=["raj","bapu","ram","shyam","darbar"];

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


function print2()            /*This is matching inside array*/
{
var numbers=[6,4,1,2,4,3,6,1,2,10,1,9];
	for (var i=0; i<numbers.length; i++ )
	{
		for (var j=i+1; j<numbers.length; j++)
		{
			if (numbers[i]==numbers[j])
			{
				document.write("Match at index"+i+"with index"+ j);
				document.write("<br>");
			}
		}
	}
}

function print3()   /*This is spliting a string*/
{
	var quote="Hello-we are-at protek-chicago";
	var arr=quote.split("-");

	for (var i=0; i<arr.length; i++)
	{
		document.write(arr[i] );
		document.write("<br />");
	}
}

function print4()     /*This replace by string*/
{
	var quote="Hello we are at protek chicago";
	var newarr=quote.replace("chicago","consulting");

	
	
		document.write(newarr);
		document.write("<br />");
	
}

function print5()  /*this is a .match*/
{
	var str="Hello HELLO hel how are you ?";
	var str1=str.match(/el/g);
	var str2=str.match(/el/gi);

	document.write(str1);
	document.write("<br>");
	document.write(str2);
}

function print6()   /*This is a for indexOf*/
{
	var arr =["abc","def","jfk"];
	var result=arr.indexOf("jfk");
	console.log (result);
}

function print7()
{
	document.getElementById("myimage").src="Images/two.jpg";
}


function show()
{
	var ivar=document.getElementById("myinput").value;
	document.getElementById("mypara").innerHTML=ivar;
}

function newone()
{
	document.getElementById("newtwo").style.borderColor="black";
	document.getElementById("newtwo").style.height="200px";
	document.getElementById("newtwo").style.width="300px";
	document.getElementById("newtwo").style.borderRadius="50px";
	document.getElementById("name").style.color="green";
}