

// {
//     let people = [

//         { name: "Alice", age: 30, city: "New york" },
//         { name: "Bob", age: 25, city: "los angels" },
//         { name: "Alice", age: 30, city: "New york" },
//         { name: "Alice", age: 30, city: "New york" },
//         { name: "Alice", age: 30, city: "New york" }

//     ];
//     console.log("people :", people);

//     console.log("\n\n\n\n\n\n\n\n\n\n\n")


//     let result = people.forEach((item) => {
//         console.log("item :",item);
        
    
//     })

// }

// console.log("\n\n\n")

// constructor

// {
//     // using funtion


//     function Person(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.mark = city;

//         this.greeting = function () {
//             console.log(`hai ${this.name}, your mar ${this.mark}`)
//         }
//     }
//     let person1 = new Person('naveeen', 20, 20);
//     console.log("person1:", person1);
//     person1.greeting();

// } {

//     // using class


//     class Person {

//         name;
//         age;
//         mark;

//         constructor(name, age, mark) {
//             this.name = name;
//             this.age = age;
//             this.mark = mark;
//         }

//         greeting() {
//             console.log(`Hello ${this.name}, your age is ${this.age}, and your Mark is ${this.mark}`);

//         }
//     }

//     let person1 = new Person("naveen", 21, 100);
//     console.log("person1 :", person1);
//     person1.greeting();

// }

// //

// console.log("\n\n\n")


// {
//     class Animal {

//         anim;
//         gender;

//         constructor(anim,gender){
//             this.anim = anim;
//             this.gender = gender;

//         }
//         greeting() {
//             console.log(`It is a ${this.gender} ${this.anim}`);
//         }


//     }

//     let animal1 = new Animal("tiger","male");
//     console.log("animal1 :",animal1)
//     animal1.greeting();
// }

// {
//     class Animal {

//         name;

//         constructor(name) {
//             this.name = name;
//         }

//         walking() {
//             console.log(`${this.name} is a dog`);
//         }
//     }

//     let animal2 = new Animal("max");
//     console.log("animal2 :", animal2);
//     animal2.walking();


//     class Cat extends Animal {

//         color;

//         constructor(name, color) {
//             super(name)
//             this.color = color;
//         }

//         walking() {
//             console.log(`${this.name} is a ${this.color} cat`)
//         }

//     }

//     let cat1 = new Cat("moc", "green");
//     console.log("cat1 :", cat1);
//     cat1.walking();
// }

// console.log("\n\n")

// {
//     class Car {

//         name;

//         constructor(name) {
//             this.name = name;
//         }

//         info() {
//             console.log(`${this.color} color car is a ${this.name}`)
//         }

//         set Color(color) {
//             this.color = color;

//         }


//         get Color() {
//             return this.Color;
//         }

//     }

//     let car1 = new Car("Audi rs6");
//     car1.color = "red";

//     console.log("car1 :", car1);
//     car1.info();

//     console.log("car1 :", car1.color);


// }

console.log("\n\n\n")


    let button = document.getElementById('bttn');
    let color = ["green","blue","red","yellow","purple","black"];
    let i = 0 ;
    
    button.addEventListener("click", function() {
        document.body.style.background = color[i];
        i = (i + 1)% color.length;
    });



   



