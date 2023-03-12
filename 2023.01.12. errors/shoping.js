"use strict";

(function () {
    var banana = new Product("Banana", 179.503433434, "12/31/2024");
    var lemon = new Product("Lemon", 199.2154879, "12/30/2024");
    var kiwi = new Product("Kiwi", 128.12345, "12/25/2024");
    var chocolate = new Product("Chocolate", 379.159753, "12/30/2025");
    var basket = new ShopingBag();
    basket.addProduct(banana);
    basket.addProduct(kiwi);
    basket.addProduct(chocolate);
    // console.log(JSON.stringify(basket) );
    console.log(basket.averagePrice()); 
    console.log(basket.getMostExpensive());
    console.log("Your bill is " + basket.calculateTotalPrice() + " dinars!");
    var card = new PaymentCard(500, "active", "12/25/2025");
    console.log(checkoutAndBuy(basket,card));
})();

function Product(name, price, expirationDate) {
    this.productId = Math.floor(10000 + Math.random() * 90000);
    this.name = name;
    this.price = Number(price.toFixed(2)) ;
    this.expirationDate = new Date(expirationDate);
    this.productCode = name.slice(0, 2).toUpperCase() + this.productId;
    this.getInfo = function () {
        console.log(this.productCode + ", " + this.name + ", " + this.price); 
    }
}

function ShopingBag() {
    this.productList = [];
    this.addProduct = function (product) {
        var date = new Date();
        if (product.expirationDate.getTime() > date.getTime()) {
            this.productList.push(product);
        }
        else {
            console.log("Product has expired!");
        }
    }
    this.averagePrice = function () {
        var sum = 0;
        var arr = this.productList;
        const avg = arr.reduce((total, next) => total + next.price, 0) / arr.length;
        return "Average product price is " + avg.toFixed(3) + " dinars";
    }
    this.getMostExpensive = function () {
        var prices = this.productList.map(obj => {
            return obj.price;
        });
        var max = prices.indexOf(Math.max(...prices));
        return "Product with the highest price is " + JSON.stringify(this.productList[max])  + ".";
    }
    this.calculateTotalPrice = function () {
        var sum = 0;
        this.productList.forEach(item => {
            sum += item.price;
        });
        // console.log("Your bill is " + sum.toFixed(3) + " dinars.");
        return sum;
    }
}

function PaymentCard(accountBalance, status, valid) {
    this.accountBalance = accountBalance;
    this.status = status;
    this.valid = valid;
}

function checkoutAndBuy(shopingBag, paymentCard) {
    if (paymentCard.accountBalance >= shopingBag.calculateTotalPrice()) {
        return "Succesful!!!";
    } else {
        return "Purchase was not succesful. There is missing " + 
        (shopingBag.calculateTotalPrice() - paymentCard.accountBalance).toFixed(2) +
        " dinars to finish transaction!";
    }
}