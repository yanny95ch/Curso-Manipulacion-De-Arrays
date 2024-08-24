const months = ['March', 'Jan', 'Feb','Dec'];
const numbers = [ 1, 30, 21, 100000];
const words = ['reserve', 'Premier', 'communiqué', 'café', 'adieu','perro', 'hola'];
const orders = [
    {
        customerName: 'Nicolas',
        total : 600,
        delivered: true,

    },
    {
        customerName: 'Zulema',
        total : 120,
        delivered: false,

    },
    {
        customerName: 'Santiago',
        total : 1840,
        delivered: false,

    },
    {
        customerName: 'Azrieta',
        total : 4500,
        delivered: true,

    }
];

numbers.sort((a,b) => a-b);
months.sort();
//words.sort()
words.sort((a,b) => a.localeCompare(b));
orders.sort((a,b) => b.total - a.total);
console.log(months);
console.log(numbers);
console.log(words);
console.log(orders);



const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta = array.flat();
console.log(rta);

const array1 = ['a', 'bb', 'ccc']; 
const rta1= array1.map(item => item.length);
console.log(rta1);

