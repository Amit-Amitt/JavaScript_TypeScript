function identify<T>(value: T): T {
    console.log(value);
    return value;   // must return the value
}

let data = identify<number>(10);
let data2 = identify<string>("Amit");
