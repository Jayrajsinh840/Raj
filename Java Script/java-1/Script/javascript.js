var a=2;
var b=5;
var c=a+b;
alert (c);


var years=35;
var sometext="years old";
var age=years+sometext;
alert (age);

function myFunction()
{
	var myfirstVariable=22;
	var mynextVariable="a";
	document.write ( myfirstVariable + mynextVariable );
}
function FullName()
{
	var myfirstName="Jayrajsinh";
	var myLastName="Parmar";
	document.write ( myfirstName + myLastName );
}
function Cars()
{
	var myfirstcar="Honda";
	var myLastcar="Tesla";
	document.write ( myfirstcar + myLastcar);
}
function Division()
{
	var a="55";
	var b="11";
	document.write ( a / b);
}
function Subtraction()
{
	var x="78";
	var y="45";
	document.write (x - y);
}


/*This is the Closures*/
var bikeone="honda";
var biketwo="ducati";
function myfavcar(){
	var firstcar="toyota";
	var secondcar="bmw";
	function myb(){
		document.write(firstcar+biketwo);  /*In child we can function itself , parents and global variable*/
}
	/*document.write(firstcar+secondcar+bikeone);*/
	myb();
	}
	/*document.write(firstcar+secondcar);*/
function citi(){
	var citieone="london";   /*this is the parent function*/
	var cititwo="paris";
function country(){
	var countryone="india";    /*this is the child function*/
	var countrytwo="usa";
	
	}
	
	document.write(citieone+cititwo);     /*here we can call only parents and global element not the child outside of the scope*/
}
function batting(player,distance){
	var more = player + "hit the ball" + distance+"meters";
	document.write(more);
}
batting ("Raj",98) 

function bowling(style,speed){
	var cricket = style +"bowlling speed is  " + speed + "km/ hours";
	document.write(cricket);
}
bowling("Raj",150)

function add(x,y){
	var z=5;
	alert(x+y+z);
}
add(3,2)

function add(k,l){
	var p=7;
	var h=2;

function add2(u,i){
	var q=5;
	var w=6;
	document.write(k+i+w);
}
add2(4,5);
}

var moviesone = "bajirao";
function movies( aag,rtdm)
{
	var moviestwo = "ramlela";
	function hero (ranveer,amir)
	{
		var heroone =" boby";
		var herotwo ="sunny";
	}
	document.write(moviesone+moviestwo);
}


var a=2;
var b=3;
var c=4;
var d=8;
var e=1;

if (a+b+c==d+e){
	document.write(you are correct);
}

