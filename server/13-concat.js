const elements = [1, 2, 3,4];
const othersElemts = [3, 3, 4, 4];

const newArray  = [...elements];
for (let index = 0; index < othersElemts.length; index++) {
    const element = othersElemts[index];
    newArray.push(element)
    
}
console.log('for =', newArray);
const rta = elements.concat(othersElemts);
const rta2 = [...elements, ...othersElemts];
console.log('concat =', rta);
console.log('...', rta2);

