var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person1 = {
    fname: "jay",
    lname: "raj",
    sayhi: function () { console.log("person1.fname"); }
};
var person2 = {
    fname: ["jay", "abv", "ddd"],
    lname: ["raj", "ddd", "ddf"],
    sayhi: function () { console.log("person.lname"); }
};
for (var i = 0; i < person2.fname.length; i++) {
    console.log([i]);
}
var pappu1 = {
    jname: "boom",
    kname: "boom1",
    sayhi: function () { console.log("new"); },
    jack: function () { console.log("world"); }
};
pappu1.jname;
var pappu2 = {
    jname: "boom",
    kname: "boom1",
    sayhi: function () { console.log("new"); },
    jack: function () { console.log("world"); }
};
pappu2.jack();
var arr1 = ["ccc", "sds", "sfsf"];
console.log(arr1[0]);
var boom5 = {
    fname: "jayrajsinh",
    lname: "parmar"
};
console.log(boom5.fname);
var myperson = {
    fname1: "jay",
    la1: "bhavani",
    age: 45
};
console.log(myperson.fname1);
var zoom12 = {
    fname11: "jay",
    lname11: "bhavani",
    age: 45,
    rara: function () { console.log("new"); },
    jaja: function () { console.log("world"); }
};
zoom12.jaja();
var zoom122 = {
    fname111: [4, 5, 6],
    second: "hello",
    bara: function () { console.log("new"); }
};
zoom122.fname111;
for (var i = 0; i < zoom122.fname111.length; i++) {
    console.log(zoom122.fname111[i]);
}
//classes in typescript
var person4555 = (function () {
    function person4555(name1) {
        this.name = name1;
    }
    person4555.prototype.disp = function () {
        console.log("name is" + this.name);
    };
    return person4555;
}());
var obj = new person4555("protek");
obj.disp();
var raj855 = (function () {
    function raj855(name3, name4) {
        this.name1 = name3;
        this.name2 = name4;
    }
    raj855.prototype.disp = function () {
        console.log("my city name is" + this.name1);
    };
    raj855.prototype.porg1 = function () {
        console.log("traveling is " + this.name2);
    };
    return raj855;
}());
var obj1 = new raj855("chicago", "hobby");
obj1.disp();
obj1.porg1();
obj1.name1 = "los angles"; // to change the name 
obj1.disp();
//inheretance in classes
var abc11 = (function () {
    function abc11(name1) {
        this.name56 = name1;
    }
    return abc11;
}());
var employee = (function (_super) {
    __extends(employee, _super);
    function employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    employee.prototype.disp = function () {
        console.log("my name is " + this.name56);
    };
    return employee;
}(abc11));
var obj5 = new employee("badshaa");
obj5.disp();
//multi level inheretance in classes
var firstclass11 = (function () {
    function firstclass11() {
    }
    return firstclass11;
}());
var secondclass2222 = (function (_super) {
    __extends(secondclass2222, _super);
    function secondclass2222() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return secondclass2222;
}(firstclass11));
var thirdclass33 = (function (_super) {
    __extends(thirdclass33, _super);
    function thirdclass33() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return thirdclass33;
}(secondclass2222));
var obj2 = new thirdclass33();
obj2.name = "noon";
console.log(obj2.name);
//method overriding
var first78 = (function () {
    function first78() {
    }
    first78.prototype.disp = function () {
        console.log("in class1");
    };
    return first78;
}());
var second = (function (_super) {
    __extends(second, _super);
    function second() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    second.prototype.disp = function () {
        _super.prototype.disp.call(this); //overriding method of parent class
        console.log("in class 2");
    };
    return second;
}(first78));
var obj25 = new second();
obj25.disp();
//static key word
var joom1 = (function () {
    function joom1() {
    }
    joom1.display = function () {
        console.log("name is" + this.name99);
    };
    return joom1;
}());
joom1.name99 = "bapu";
joom1.display();
var ind = (function () {
    function ind() {
        this.name41 = "baba";
    }
    return ind;
}());
var obj36 = new ind; //this all known as excess specifire they are public,private
// and procted this are known as access specifiers.
obj36.name41; //cant access 
//name spaces in typescript
