type Param<T> = {
    value: T;
}

function identity<T>(value: T) :T {
    return value;
}

function identity2<T>(value: T): T{
    return value;
}

console.log(identity<number>(1)) // 1
console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello
console.log(identity<number[]>([1,2,3])); // [1, 2, 3]