function porg1()
{
var honda={color:"white",doors:2, price:"$15000",weight:"800KG",country:"USA"};

alert (honda["color"]);
alert (honda["doors"]);
alert (honda["price"]);
alert (honda["weight"]);
alert (honda["country"]);
}

function porg2()    /*in this we add and edit the value of country and price*/
{
	var laptop={
		color:"blue",
		size:"15.5I N",
		price:"$900",
	};


	laptop.country="usa";
	alert(laptop.country);

	laptop.color="red";
	alert(laptop.color);
	alert(laptop.size);
	alert(laptop.price);

}

function porg3()
{
	var str= new String("hello");
	alert(str);
}

function porg4()
{
	var str = new String ();
	str = "Hello";
	alert(str);
}

function porg5()
{
	var x=new Date();
	document.write(x);
}


function abc()
{
var honda={color:"white",doors:2, price:"$15000",weight:"800KG",country:"USA"};

alert (honda.color);
alert (honda.doors);
alert (honda.price);
alert (honda.weight);
alert (honda.country);
}

function aus()
{
var honda={
	color:"white",
	doors:2,
	 price:"$15000",
	 weight:"800KG",
	 country:"USA",
	 show:function ()
	 {
	 	alert("hello");
	 }
	};

honda.show ();   This the second way to alert proprty

}



