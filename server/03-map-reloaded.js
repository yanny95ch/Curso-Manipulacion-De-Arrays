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
    }
]
//console.log('Original', orders);
 const rta = orders.map(item => item.total)
 console.log('rta', rta);
 
 //const rta2 = orders.map(item => {
    //item.tax = .19;
    //return item
 //})
 
 //console.log('rta2', rta2);

 const rta3 = orders.map(item => {//No copiar la referencia en memoria, sino crear uno totalmente nuevo, para no modificar el array original 
    return {
        ...item,
        tax:.18
    }
 })
 console.log('Original', orders);
 console.log('rta3', rta3);