// ^ the array map method executes a given functionm on every element from an array and returns a new array

// const numbers = [1,2,3,4,5]

// const multiplyArry = numbers.map(multiply)

// function multiply(value, index, arr){
//     return value * 2 
// }

// console.log(multiplyArry);

// const products = [
//     {
//         pName :'pen',
//         pPrice : 20,
//         qty : 1
//     },
//     {
//         pName : 'pencil',
//         pPrice : 10,
//         qty : 2
//     },
//     {
//         pName : 'eraser',
//         pPrice : 5,
//         qty : 10
//     }
// ]

// const productsValue = products.map(item=> ({
//     name : item.pName,
//     totalPrice : item.pPrice*item.qty
// }))

// console.log(productsValue);
// console.clear();

const string = ['1','2','3','4','5']

const numbers = string.map(Number)

console.log(numbers);