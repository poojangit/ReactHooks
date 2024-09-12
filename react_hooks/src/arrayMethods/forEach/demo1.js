// ^ this forEach method executes every elements of an array

// const numbers = [1,2,3,4,5]

// numbers.forEach(demo);

// function demo(item, index, arr) {
   // console.log(item + '[' + index + ']');
//     console.log(arr);
// }

// const numbers = [11,12,13,14,15]

// let sum = 0

// const sumOfEach = numbers.forEach(item => {
//     sum = sum + item 
// })

// console.log(sum);

const letter = ['a','b','c','d', 'a', 'a', 'b']

let count = {}

letter.forEach((item)=>{
    if(count[item]) {
        count[item]++
    }
    else {
        count[item] = 1
    }
})

console.log(count);