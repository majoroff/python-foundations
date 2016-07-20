module interfaces {
    interface SquareFunction {
        (x: number): number;
    };

    var squareItBasic: SquareFunction = (num:number)=>num*num;

    // this would cause an error
    //var squareItBasicWrong: SquareFunction = (num:number, a:string)=>num*num;

    interface Rectangle {
        h: number,
        w?: number
    };

    var squareIt: (rect: Rectangle) => number;

    var rectA = {h: 7};
    var rectB = {h: 7, w: 11};

    squareIt = function(rect){
        if (rect.w === undefined){
            return rect.h*rect.h
        }
        return rect.h*rect.w;
    }

    console.log(squareIt(rectA));
    console.log(squareIt(rectB));

    interface Person {
        name: string,
        age?: number,
        kids: number,
        calcPets: ()=>number,
        makeYounger: (years: number)=>void,
        greet: (msg:string)=>string,
    };

    var p: Person = {
        name: "Colleen",
        age: 40,
        kids: 4,
        calcPets: function(){
            return this.kids*2
        },
        makeYounger: function(years: number){
            return this.age -= years
        },
        greet: function(msg:string){
            return msg + ', ' + this.name
        }
    };
    

}