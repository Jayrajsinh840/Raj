var myspace;
(function (myspace) {
    var myclass = (function () {
        function myclass(a) {
            this.a = a;
        }
        return myclass;
    }());
    myspace.myclass = myclass;
})(myspace || (myspace = {}));
