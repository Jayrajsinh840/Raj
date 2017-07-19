/*var raj=[1,2,45,47,75,68];
alert (raj.length);
raj[2]=25;
alert(raj[0]);
alert(raj[1]);
alert(raj[2]);
alert(raj[3]);
alert(raj[5]);
alert(raj[6]);

raj[2]=25;
alert(raj[2]);

 
var animal =["cat","rat","bat","pet"];
alert (animal.length);

alert(animal[0]);
alert(animal[1]);
alert(animal[2]);
alert(animal[3]);


animal[2]="owl";
alert(animal[2]);

animal.push("cow");
alert(animal[4]);

var country =["UK","USA","IND","BAN"];

for ( var i = 0; i < country.length ; i++)
 {
 	alert(country[i]);
 }

var jjj=[1,2,45,47,75,68];

for (x in jjj )
{
	
	alert(jjj[x]);
}
*/




function prog3()    /*   using pop();*/
{
var myFish=['angel', 'clown', 'mandarin', 'sturgeon'];
document.write(myFish);
document.write("<br />");
document.write("after pop");

document.write("<br />");
myFish.pop();
document.write(myFish); 

}

function prog4()    /*using toString();*/
{
	var names = ["jay","raj","sinh"];
	alert(names.toString());
}

function prog5()    /*using join();*/
{
	var names = ["jay","raj","sinh"];
	document.write(names.join("*"));
}
