function prog1()
{
	var names=["jay","raj","sinh","parmar"];
	alert(names.shift());

}

function prog2()
{
	var names=["jay","raj","sinh","parmar"];
	var remove=names.shift();
	alert(remove);

	for ( x in names)
	{
		alert(names[x]);
	}
}

function prog3()       /*using unshift();*/
{
	var names=["jay","raj","parmar"];
    names.unshift("kkk","Ppp");

    for ( x in names)
    {
    	alert(names[x]);
    }

}


function prog4()
{
	var names=["jay","raj","parmar"];
    delete names[0];

    for (x in names)
    {
    	alert(names[x]);
    }
    alert(names.length);
}

function prog5()     /*using splice*/
{
	var names=["protek","con","chicago"];
	names.splice(0,1,/*"abc","def"*/);         /*IF WE PUT (2,1,abc,def)  VALUE WILL ADD AFTER ONE*/  
	for ( x in names)
	{
		alert(names[x]);
	}
}

function prog6()
{
var arr1 =["abc","def"];
var arr2 = ["jay","raj"];
var arr3 = ["manmeet"];
var concatenatedArray=arr1.concat(arr2,arr3);

for ( x in concatenatedArray )
	{
		alert(concatenatedArray[x]);
	}

}

function prog7()     /*using slice*/
{
  var arr1= ["jay","raj","sinh","parmar"]
  var newArr1=arr1.slice(1,3);

  	for ( x in newArr1)
	{
		alert(newArr1[x]);
	}
}