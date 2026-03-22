class Box<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }

    display(): T {
        return this.content;
    }
}

let b1 = new Box<number>(10);
let b2 = new Box<string>("Hello");
console.log(b1.display());
console.log(b2.display());
