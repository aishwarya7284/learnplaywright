class person {
    //Constructor
    constructor() {
        console.log("I will be created when Obj is created!");
    }
    //Attribute
    name;
    email;

    //Behaviour
    walk() { }
    sleep() { }

}

let obj_ref = new person();
// obg_ref = Is called the object reference (address)
// new Person(); -> Is the object with the new keyword

// console.log(obj_ref);