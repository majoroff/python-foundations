var interfaces;
(function (interfaces) {
    ;
    var squareItBasic = function (num) { return num * num; };
    ;
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 11 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
    ;
    var p = {
        name: "Colleen",
        secondName: "Jackson",
        age: 40,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            return this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        }
    };
})(interfaces || (interfaces = {}));
