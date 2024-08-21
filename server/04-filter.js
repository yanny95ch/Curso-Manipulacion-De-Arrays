const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6){
        newArray.push(item)
    } 
}
console.log( 'original' ,words);
console.log('newArray', newArray);

const rta = words.filter(item => item.length >= 6) // Con esta linea resumimos las lineas de la 3 a la 9 

console.log( 'original' ,words);
console.log('newArray', rta);

//-----------------------//-------------------

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
    {
        customerName: 'Vanessa',
        total: 456,
        delivered: true,
    }
]

const rta2  = orders.filter(item => item.delivered  && item.total >= 100)
console.log(rta2);

const search = (query) => {
    return orders.filter( item => {
        return item.customerName.includes(query)
    })
}
console.log(search('Va'));
