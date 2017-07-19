interface person {
    fname:string|string[],
    lname:string|string[],
    sayhi:()=>void
}
var person1:person={
    fname:"jay",
    lname:"raj",
    sayhi:()=>{console.log("person1.fname")}
};

var person2:person={
    fname:["jay","abv","ddd"],
    lname:["raj","ddd","ddf"],
    sayhi:()=>{console.log("person.lname")}
};

for (var i=0; i<person2.fname.length;i++)
{
console.log([i]);
}





interface pappu{
    jname:string,
    kname:string,
    sayhi:()=>void
    jack:()=>void
}
var pappu1:pappu={
    jname:"boom",
    kname:"boom1",
    sayhi:()=>{console.log("new")},
    jack:()=>{console.log("world")}
};

pappu1.jname;

var pappu2:pappu={
    jname:"boom",
    kname:"boom1",
    sayhi:()=>{console.log("new")},
    jack:()=>{console.log("world")}
};

pappu2.jack();

//interface and arrays

interface arrface{
    [index:number]:string
}
var arr1:arrface=["ccc","sds","sfsf"];
console.log(arr1[0]);

//inheretance in interfaces  its also called single inheritance

interface firstinterface
{
    fname:string
}

interface secondinterface extends firstinterface
{
    lname:string
}
var boom5:secondinterface={
    fname:"jayrajsinh",
    lname:"parmar",
}
console.log(boom5.fname);

//multipel inheretance
interface first5interface
{
    fname1:string
}

interface second5interface
{
    la1:string
}
interface third5interface extends first5interface,second5interface
{
    age:number
}

var myperson:third5interface=
{
    fname1:"jay",
    la1:"bhavani",
    age:45
};
console.log(myperson.fname1);






interface first55interface
{
    fname11:string
}

interface second55interface
{
    lname11:string
}
interface third55interface
{
    age:number
}
interface fourthinterface extends first55interface,second55interface,third55interface
{
  rara:()=>void
  jaja:()=>void
}

var zoom12:fourthinterface=
{
    fname11:"jay",
    lname11:"bhavani",
    age:45,
    rara:()=>{console.log("new")},
    jaja:()=>{console.log("world")}
};
zoom12.jaja();




interface first555interface
{
    fname111:number[]|string[]
    second:number|string
}

interface two5555 extends first555interface
{
      bara:()=>void

}

var zoom122:two5555=
{
    fname111:[4,5,6],
    second:"hello",
    bara:()=>{console.log("new")},

};

zoom122.fname111;
for (var i=0; i<zoom122.fname111.length;i++)
{
console.log(zoom122.fname111[i]);
}

//classes in typescript

class person4555{
        name:string;
        constructor(name1:string){
            this.name=name1;
        }
        disp():void{
            console.log("name is" + this.name);
        }
}
var obj=new person4555("protek");
obj.disp();

class raj855{
    name1:string;
    name2:string;
    constructor(name3:string,name4:string)
    {
        this.name1=name3;
        this.name2=name4;
    }
    disp():void{
        console.log("my city name is" + this.name1)
    }
    porg1():void{
        console.log("traveling is " + this.name2)
    }
}
var obj1=new raj855("chicago","hobby");
obj1.disp();
obj1.porg1();

obj1.name1="los angles";    // to change the name 
obj1.disp();

//inheretance in classes

class abc11{
    name56:string;
    constructor(name1:string)
    {
        this.name56=name1;
    }
}
class employee extends abc11{
    disp():void{
        console.log("my name is "+ this.name56);
    }
}
 var obj5=new employee("badshaa");
 obj5.disp()

 //multi level inheretance in classes
class firstclass11{
    name:string;
}
class secondclass2222 extends firstclass11
  {

}          
class thirdclass33 extends secondclass2222  
{

}
var obj2=new thirdclass33();
obj2.name="noon";
console.log(obj2.name);

//method overriding
class first78{
    disp():void{
        console.log("in class1");
    }
}
class second extends first78 {
    disp():void{ 
        super.disp()                    //overriding method of parent class
        console.log("in class 2");
    }
}
var obj25=new second();
obj25.disp();

//static key word

class joom1{
    static name99:string;
    static display():void{
        console.log("name is"+ this.name99)
    }
}
joom1.name99="bapu";
joom1.display();


class ind{
   private name41:string="baba"
    lname65:string;
    fname96:string;
}
var obj36=new ind;    //this all known as excess specifire they are public,private
                      // and procted this are known as access specifiers.
obj36.name41       //cant access 




