const user = {
    name: 'kim',
    active: true,
    cart: [],
    purchase: []
}

const items = {
    name: 'mango',
    price: 399
}

var tax = function () {
    let sum;
    let percent = 3;
    const price = items.price;
    //solving for the sum
    sum = percent * price;
    //converting percentage to decimal
    let percentage = percent/100;
    sum = percentage*price;
    return sum + price;
}

var purchaesItems = function () {
    return user.cart.push({'name':items.name,'price': tax()});
}

var pur = function () {
        for(let i = 0; i < user.cart.length; i++) {
        user.purchase.push(user.cart[i]);
    } 
    return user.cart.pop(); 
}
