// the guide: https://xuanthulab.net/lop-trong-javascript.html
// define class name Product
class Product {
    // constructor a method
    constructor (name, price) {
        this.name = name;
        this.price = price;
        this.information = `${name} - ${price}`;
    }

    // define a method
    checkStore(storeId) {
        console.log(`${this.name} in store ${storeId}`);
    }

    // define a method getter
    get info() {
        console.log('get info():', this.information);
        return this.information;
    }

    // define a method setter
    set info(i) {
        console.log('set info(i):', i);
        this.information = i;
    }

    // define a static method
    static convertMoney(m) {
        console.log('static convertMoney(m):', m);
        return `${m} VND`;
    }
}

// using the class
let pro = new Product('Iphone', 1000);

pro.name = 'IphoneX was modified...';

// access property
console.log(pro.name);

// call a method
pro.checkStore(100);

// call setter
pro.info = "production information...";

// call getter
console.log(pro.info);

// call a static method
Product.convertMoney(1000000);