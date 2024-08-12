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

const rta = words.filter(item => item.length >= 6)

console.log( 'original' ,words);
console.log('newArray', rta);

