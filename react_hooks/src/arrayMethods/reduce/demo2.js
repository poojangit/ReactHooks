const products = [
    {
        product : 'Laptop',
        price : 10000,
        qty : 2
    },
    {
        product : 'Mobile',
        price : 20000,
        qty : 3
    },
    {
        product : 'watch',
        price : 5000,
        qty : 2
    },
    {
        product : 'earpods',
        price : 1200,
        qty : 2
    },
]

const totalPrice = products.reduce((acc,value) => acc + value.price * value.qty, 0
)

console.log(totalPrice);