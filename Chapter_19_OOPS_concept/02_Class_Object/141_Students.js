class students {
    //static variable
    static batch_name = "playwright2x";

    //static metod
    static display() {
        console.log("batch", students.batch_name);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //non static method
    display2() {
        console.log(this.name + " " + this.age);
    }

}

//static method call
students.display();

//create 10 student details
const s1 = new students("abc", 23);
const s2 = new students("abc", 23);
const s3 = new students("abc", 23);
const s4 = new students("abc", 23);
const s5 = new students("abc", 23);
const s6 = new students("abc", 23);
const s7 = new students("abc", 23);
const s8 = new students("abc", 23);
const s9 = new students("abc", 23);
const s10 = new students("abc", 23);




s1.display2();
s2.display2();
s3.display2();
s4.display2();
s5.display2();
s6.display2();
s7.display2();
s8.display2();
s9.display2();
s10.display2();

