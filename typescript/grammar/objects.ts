module objects {
    var points1 = {x:10, y:20};

    var points2: {};
    points2 = {x:10, y:20};

    var points3: Object = {x:10, y:20};

    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function() {
            return this.h*this.w;
        }
    };

    var squareIt = function(rect : {h:number; w?:number}){
        if (rect.w === undefined){
            return rect.h*rect.h
        }
        return rect.h*rect.w
    };

    var sq1 = squareIt({h:10});
    //console.log(sq1);
    var sq2 = squareIt({h:10, w:40});
    //console.log(sq2);

}