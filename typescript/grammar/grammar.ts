module demo_02_03 {
    
    var person = "John Papa"; // type "string"
    

    var another_person;
    another_person = "Papa John"; // type "any"
    // will cause non-clear error, so
    // var another_person:string;
    console.log(another_person.substring(1,4));

    another_person = {
        name: 'Colleen',
        age: 25,
    }

    console.log(another_person.substring(1,4));

}