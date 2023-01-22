const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

if (shoppingCart.includes('Honey')) {
    const index = shoppingCart.indexOf('Honey');
    shoppingCart.splice(index, 1);
}

const index = shoppingCart.indexOf('Tea');
shoppingCart[index] = 'Green Tea';

console.log(shoppingCart);
