const elements = ['fire', 'air', 'water'];

const separator = '--';
let rtaFInal = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFInal  = rtaFInal + element + separator;
    
}
console.log('for = ',rtaFInal);
const rta = elements.join('--')
console.log('join =', rta);

const tittle = 'Curso manipulacion de arrays';
tittle.split(' ');
console.log(tittle.split(' '));


const urlFinal = tittle.split(' ').join('-').toLocaleLowerCase();
console.log(urlFinal);

