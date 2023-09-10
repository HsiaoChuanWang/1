//Assignment 1:
function max(numbers) {
    var maximum = numbers[0];
    for(let i =1; i < numbers.length; i++){         
        if (maximum < numbers[i]){
            maximum = numbers[i];            
        }
    }
    return maximum;
}

//Assignment 2:
function calculate(args) {
    var value;
    if(args.op === '+'){
        value = args.n1 + args.n2;
    }
    else if(args.op === '-'){
        value = args.n1 - args.n2;
    }
    else{
        value = 'Not supported';
    }
    return value;
}

//Assignment 3:
function calculate(data) {
    var taxed = 0; 
    for (let i = 0; i < data.products.length; i++){
        taxed += data.discount * data.products[i].price;
    }
    return taxed;
}
const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});
console.log(discountedPrice)

