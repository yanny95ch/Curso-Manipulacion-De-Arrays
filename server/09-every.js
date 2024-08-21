const numbers = [1, 30, 45,88,21,87,63,14];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40){
        rta = false
    }
}
console.log('for' ,rta);
const rta2  =  numbers.every(item => item <= 40);
console.log('every' , rta2);
