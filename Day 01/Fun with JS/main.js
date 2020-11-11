function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.print = function() {
        console.log('Hello, I am a person');
        console.log('my name is ' + this.firstName + ' ' + this.lastName);
    }
}

function max(a, b) {
    if (a>b) return a;
    return b;
}

var p1 = new Person('John', 'Smith');
var p2 = new Person('Jane', 'Smith');

p1.print();

setTimeout(p1.print.bind(p1), 2000);


// // var m1 = new max(10, 5);
// // var m2 = max(10, 5);

// // var mistake = Person('Kobi', 'Hari');

// p1.print();

// var xyz = p1.print;

// xyz();

// var xyz2 = xyz.bind(p1);
// xyz2();