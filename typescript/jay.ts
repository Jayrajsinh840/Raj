
  //class inherits interface
interface first775interface
{
    fname211:string
}
class raj599{
     fname211:string;
    name23:string;
    name24:string;
    constructor(name38:string,name48:string,name789:string)
    {
        this.name23=name38;
        this.name24=name48;
        this.fname211=name789;
    }
    
}
var obj786=new raj599("boom","haha","sgs");
console.log(obj786.name23);

//objects
var golana={
    eng:"england",
    aus:"australia",
    ban:"bangladesh"
};
console.log(golana.eng);

var car={
    toyota:"england",
    jagvar:"australia",
    honda:()=>void{}

};
console.log(car.toyota);

//class in inheritance
class jam1{
    name56:string;
  show():void{
      console.log("new");
  }
}
class bhim extends jam1{
    disp():void{
        console.log("raj "+ this.name56);
    }
}
 var obj5=new bhim();
 obj5.disp()
