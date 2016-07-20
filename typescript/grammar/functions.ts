module funcs {

    //lambda
    var myFunc1 = function(h:number, w:number){
        return h*w;
    };
    // equals to
    var myFunc2 = (h:number, w:number) => h*w;

    console.log(myFunc1(5, 10));
    console.log(myFunc2(11, 12));

    // 'void' => no return value

    var greetMe: (msg: string) => void;

    greetMe = function(msg:string){
        console.log(msg);
    };
    greetMe("Hello!");

    var helloWorld: (name?:string) => void;
    helloWorld = (name?:string) => {
        console.log("Hello, "+ (name || "unknown person!"));
    };

    helloWorld();
    helloWorld("Peter Jakson");


} 
