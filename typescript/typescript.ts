
var number1:number=9
var number2:number=10

var number3=number1+number2
console.log(number3)

var country:string[] =["UK","USA","IND","BAN"];

for ( var i = 0; i < country.length ; i++)
 {
 	console.log(country[i]);
 }


var arr:number[]=new Array(4);
arr=[1,2,3,4];
var sum:number=0;
for ( var i= 0 ; i < arr.length ; i++)
{
	sum=sum+arr[i];
}
console.log(sum);

var sam:number|string|string[];
sam=9;
console.log(sam);
sam="hello";
console.log(sam);

