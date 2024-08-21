const items = [1, 2, 3, 4, 3, 2, 3, 3];
const rta = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item]= 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {})
console.log(rta);


const data = [
    {
        name:'Nicolas',
        level: 'low',
    },
    {
        name:'Andrea',
        level: 'medium',
    },
    {
        name:'Zulema',
        level: 'hight',
    },
    {
        name:' Santiago',
        level: 'low',
    },
    {
        name:'Valentina',
        level: 'medium',
    },    {
        name:'Lucia',
        level: 'hight',
    },    {
        name:'Oscar',
        level: 'hight',
    },
];
const rta2 = data
.map(item => item.level)
.reduce((obj, item) => {
    if(!obj[item]){
        obj[item]= 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {})

console.log(rta2);
