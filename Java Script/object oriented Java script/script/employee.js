function chicago()
{

	function employee(firstname1,lastname1,age1,gender1)

	{
	this.firstname=firstname1;
	this.lastname=lastname1;
	this.age=age1;
	this.gender=gender1;
	}

	var employee1 = new employee("jay","raj","25","male");
	var employee2 = new employee("Karshansinh","parmar","65","male");


                                                  /*this method is using alert*/

/*alert(employee1.firstname);
alert(employee1.lastname);
alert(employee1.age);
alert(employee1.gender);

alert(employee2.firstname);
alert(employee2.lastname);
alert(employee2.age);
alert(employee2.gender);*/
                                
	for (x in employee1)                               /*this is second method using for loops*/
	{
		console.log(employee1[x]);
	}

	for (x in employee2)
	{
		console.log(employee2[x]);
	}
}



function raj(){


function employee(firstname1,lastname1,age1,gender1)    

{                                           /*  we have add new properties to the exitone fullname*/
	this.firstname=firstname1;
	this.lastname=lastname1;
	this.age=age1;
	this.gender=gender1;

	this.fullname = function()
	{
		alert(this.firstname+" "+this.lastname);
	}
}

var employee1 = new employee("jay","raj","25","male");
var employee2 = new employee("Karshansinh","parmar","65","male");

employee1.fullname();
employee2.fullname();


}


function add()
{
	function asm(a,b,c)
	{
		this.add=function()
		{
			alert(a+b+c);
		}
	
		this.sub=function()
		{
			alert(a-b-c);
		}
		 
		this.mul=function()
		{
			alert(a*b*c);

		}
	}


	var result1 = new asm(10,2,4);

	result1.mul();
	result1.sub();
	result1.add();

}

function addproperties()
{
	function employee(name,age,gender)
	{
		this.name=name;
		this.age=age;
		this.gender=gender;
	}
	var employee1=new employee("protek","30","male");
	employee1.lastname="consulting";

	for (x in employee1)                          
	{
		console.log(employee1[x]);
	}


	var employee2=new employee("jayrajsinh","25","male");
	employee2.lastname="parmar";

	for (x in employee2)
	{
		console.log(employee2[x]);
	}

}

function reverse()
{
	var str="jayrajsinh";
	alert(str.split("").reverse().join(""))
}

function porg45()
{
	var funexp= function ()
	{
		alert("helooe")
	};
	funexp();
}