class Bagel{
    constructor(id, price, name, variant){
        this.sku = id;
        this.price = price;
        this.name = name;
        this.variant = variant;
    }

    getPrice()
    {
        return this.price;
    }
}

module.exports = Bagel;