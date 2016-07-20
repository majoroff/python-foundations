var funcs;
(function (funcs) {
    //lambda
    var myFunc1 = function (h, w) {
        return h * w;
    };
    // equals to
    var myFunc2 = function (h, w) { return h * w; };
    console.log(myFunc1(5, 10));
    console.log(myFunc2(11, 12));
    // 'void' => no return value
    var greetMe;
    greetMe = function (msg) {
        console.log(msg);
    };
    greetMe("Hello!");
    var helloWorld;
    helloWorld = function (name) {
        console.log("Hello, " + (name || "unknown person!"));
    };
    helloWorld();
    helloWorld("Peter Jakson");
})(funcs || (funcs = {}));
