var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.print = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return Person;
}());
var p1 = new Person('John', 'Smith');
p1.print();
