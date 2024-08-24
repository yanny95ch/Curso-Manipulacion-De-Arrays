const products = [
    {title: 'pizza', price: 121, id: '🍕'},
    {title: 'Burger', price: 124, id: '🍔'},
    {title: 'Hot Cakes', price: 150, id: '🥞'},
    {title: 'Hog Dog', price: 110, id: '🌭'}
];

const myProducts =[];
console.log('pruducts', products);
console.log('myProducts', myProducts)
console.log('-'.repeat(10));
const productIndex = products.findIndex(item => item.id === '🍔');
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    products.splice(productIndex,1)
}


console.log('pruducts', products);
console.log('myProducts', myProducts)
console.log('-'.repeat(10));
//--------------------------//-------------------------//-----------

const productsV2 = [
    {title: 'pizza', price: 121, id: '🍕'},
    {title: 'Burger', price: 124, id: '🍔'},
    {title: 'Hot Cakes', price: 150, id: '🥞'},
    {title: 'Hog Dog', price: 110, id: '🌭'}
];
const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'Delicius'
    }
}
const productIndex1 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndex1]= {
    ...productsV2[productIndex1],
    ...update.changes,
}
console.log(productsV2);

