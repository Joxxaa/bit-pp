class CoffeeShop {
    constructor(name, menu) {
        (this.name = name),
            (this.menu = menu),
            (this.orders = [])
    }
    addOrder(order) {
        if (this.menu.map((or) => or.itemName).includes(order)) {
            this.orders.push(order);
            return "Order added!";
        } else {
            return "This item is currently unavailable!";
        }
    }
    fulfillOrder() {
        if (this.orders.length != 0) {
            return `The ${this.orders.shift()} is ready!`;
        } else {
            return "All orders have been fulfilled!";
        }
    }
    listOfOrders() {
        return this.orders;
    }
    dueAmount() {
        var sum = 0;
        for (const order of this.orders) {
            this.menu.forEach((menuItem) => {
                if (menuItem.itemName === order) {
                    sum += menuItem.price;
                    return sum;
                }
            });
        }
        return sum.toFixed(2);
    }
    cheapestItem() {
        return this.menu.slice().sort((a, b) => a.price - b.price).at(0).itemName;
    }
    drinksOnly() {
        return this.menu.filter((order) => order.itemType === "drink")
            .map((order) => order.itemName);
    }

    foodOnly() {
        return this.menu.filter((order) => order.itemType === "food")
            .map((order) => order.itemName);
    }

}
