class Engine {
    horsePower: number;
    engineType: string;

    constructor(horsePower, engineType){
        this.horsePower = horsePower;
        this.engineType = engineType;
    } 

}

class Car {
    private _engine : Engine;
    
    constructor(engine:Engine){
        this.engine = engine;
    }

    get engine(){
        return this._engine
    }

    set engine(value: Engine){
        if (value === undefined) throw 'Supply an engine';

        this._engine = value;
    }

    start(){
        console.log("Engine started: "+this._engine.engineType);
    }

    stop(){
        alert("Engine stopped: "+this.engine);
    }
}

window.onload = function(){
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);

    console.log(car.engine.engineType);
    car.start();
}