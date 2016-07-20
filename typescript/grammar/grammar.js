var demo_02_03;
(function (demo_02_03) {
    var person = "John Papa"; // type "string"
    var another_person;
    another_person = "Papa John"; // type "any"
    console.log(another_person.substring(1, 4));
    another_person = {
        name: 'Colleen',
        age: 25
    };
    console.log(another_person.substring(1, 4));
})(demo_02_03 || (demo_02_03 = {}));
