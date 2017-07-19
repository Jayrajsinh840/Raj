var number1 :number = 9;
var number2 :number = 10;
var number3 :number = 2;

var total:number;
function number()
{
    total=number1*number2*number3;
}
number();
console.log(total);

var str2:number=<number><any>str2;   // this is a type assertion


var number1 :number = 9;
var number2 :number = 10;
function add()
{
    var number3:number=2;
    var number4:number=3;
    total=number1+number2+number3+number4;
}
add();
console.log(total);

var A:number=2;                           //Bitwise operator
var B:number=3;

console.log(A|B);

var A:number=2;
var B:number=3;
console.log(A^B);

var A:number=2;
var B:number=3;
console.log(A&B);

A<<2                                      
A>>1

var A:number=2;                             //Negation operator
var B:number=-A;
console.log(A);
console.log(B);

var a:number=3;                                //conditional operator
var value=a>2?"a is larger": "a is smaller";
console.log(value);

function ap(x:number,y?:number)               //optional operator
{
    console.log(x);
    console.log(y);
}
ap (5);
ap(6,5);
           
                                  //passing array as a parameter into function
                                  //x is known as rest parameter
 function porg1(...x:string[]):void
 {
     for(var i=0;i<x.length;i++)
     {
         console.log(x[i]);
     }
 }   
 porg1("abc","def","erg"); 

var res=(a:number,b:number)=>            //Anonymous function
{
    return a*a+b*b;
};
console.log(res(2,4));

var result=()=>console.log("hello world ");
result();

var result=():void=>console.log("heksbf,b s ");
var x:()=>string;
x=():string=> {return "heloo";};
console.log(x());

function foo1(x)                           //syntactic variartion
{
    if (typeof x=="number")
    {
        console.log(x+"is a number");
    }
    else if (typeof x=="string")
    {
        console.log(x+"is a sring");
    }
}
foo1(12);
foo1("hrhhhh");

function ch(x:number):void;   //function overloading
function ch(x:string,y:string):void;
function ch(x:string,y:string,z:string):void;
function ch(x:number,y:number,z:number):void;

function ch(x:any,y?:any,z?:any){
    console.log(x);
    console.log(y);
    console.log(z);
   
}
ch(5);
ch("abc","def");
ch("zzz","vvv","fff");
ch(5,6,7);

  //recursive function is a function which
  // call itself again and again untile its  reach to the  result

  function facNum (number){
      if (number<=0)
      {
          return 1;
      }
      else{
            return (number * facNum(number-1));
      } 
  }
  var ind=facNum(4);
  console.log(ind); 

var arr=[10,"hello","fff"];                  //Tuples (arrays)
for (var i=0; i<arr.length;i++)
console.log(arr[i]);

                                  //destructuring tuple
//we used this for breaking up the structure of entity

var j =[10,"hetwt"];
var [f,g]=j;
console.log(f);
console.log(g); 

//union has ability to commbine two or more types

var num:number|string|string[];                           
