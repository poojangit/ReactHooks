// ^ Filter method returns a new array containing elements that pass a certain condition
// const numbers = [1,2,3,4,5,6]

// const evenNumbers = numbers.filter((even) => {
//     return even % 2 == 0
// })

// console.log(evenNumbers);

// const personDetails = [
//     {
//         pName : 'Pooja',
//         age : 23
//     },
//     {
//         pName : 'Preethi',
//         age : 20
//     },
//     {
//         pName : 'Bhavin',
//         age : 12
//     }
// ]

// const checkAdult = personDetails.filter(adult => {
//     if (adult.age >= 18) {
//         return true
//     }
//     else {
//         return false
//     }
// })

// console.log(checkAdult);

const numbers = [1,1,1, 2, 3, 4, 5, 6 , 6, 7, 7, 1]

const nums = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index
})

console.log(nums);