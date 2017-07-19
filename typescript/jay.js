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
var raj599 = (function () {
    function raj599(name38, name48, name789) {
        this.name23 = name38;
        this.name24 = name48;
        this.fname211 = name789;
    }
    return raj599;
}());
var obj786 = new raj599("boom", "haha", "sgs");
console.log(obj786.name23);
//objects
var golana = {
    eng: "england",
    aus: "australia",
    ban: "bangladesh"
};
console.log(golana.eng);
var car = {
    toyota: "england",
    jagvar: "australia",
    honda: function () { return void {}; }
};
console.log(car.toyota);
//class in inheritance
var jam1 = (function () {
    function jam1() {
    }
    jam1.prototype.show = function () {
        console.log("new");
    };
    return jam1;
}());
var bhim = (function (_super) {
    __extends(bhim, _super);
    function bhim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bhim.prototype.disp = function () {
        console.log("my name is " + this.name56);
    };
    return bhim;
}(jam1));
var obj5 = new bhim();
obj5.disp();
