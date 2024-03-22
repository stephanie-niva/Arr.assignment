let fruits = ['Mango', 'Banana', 'Orange'];

let arr = new Array(20,30);

console.log({fruits});
console.log({arr});

console.log('fruit', fruits[1]);

fruits[2] = 'Kiwi';
console.log({fruits});

console.log('last item', fruits[fruits.length -1]);
let sliceFruit = fruits.slice(-1);
console.log({sliceFruit});

//Adding items at end of Array//
let addEnd = fruits.push('Pawpaw');
console.log({fruits});
//Adding items at start//
let addStart = fruits.unshift('Pineapple');
console.log({fruits});
//remove at end of array//
let removeEnd = fruits.pop();
console.log({fruits});
//remove at start of array//
let removeStart = fruits.shift();
console.log({fruits});

let items = [20,30,40,50,60];
//adding all items in araray//
let add = items.reduce((acc, curr)=> acc + curr);
console.log({add});
//multiply each item by 2//
let multiply = items.map(item => item * 2);
console.log({multiply});
//
let square = []
items.forEach(item => {
    const multiply = item * item;
    console.log({multiply});
    square.push(multiply)
});
console.log({square});