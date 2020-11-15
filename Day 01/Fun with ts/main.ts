class Person {
    constructor(private firstName: string, private lastName: string){}

    print() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}


let p1 = new Person('John', 'Smith');
p1.print();