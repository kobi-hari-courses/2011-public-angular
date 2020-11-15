class Person {
    constructor(private firstName: string, private lastName: string) {}

    print() {
        console.log(`my name is ${this.firstName} ${this.lastName}`);
    }
}

let p = new Person('John', 'Smith');

p.print();
