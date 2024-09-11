function Demo8() {
    let count = 0
    return function() {
        count ++;
        return count
    }
}

const counter1 = Demo8()
const counter2 = Demo8()

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());

