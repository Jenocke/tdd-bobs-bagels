
class Basket{
    constructor(){
        this.itemsArray = [];
    }

    AddBagel(bagelToAdd){
        const itemIndex = this.itemsArray.findIndex((item) => item.bagel.sku === bagelToAdd.sku)
        if(itemIndex == -1)
        {
            this.itemsArray.push({bagel: bagelToAdd, quantity: 1});
        }
        else
        {
            this.itemsArray[itemIndex].quantity ++;
        }
        return true;
    }

    GetItems(){
        return this.itemsArray;
    }

    RemoveBagel(bagel){
        const itemIndex = this.itemsArray.findIndex((item) => item.bagel.sku === bagel.sku)
        if(this.itemsArray[itemIndex].quantity <=1)
            this.itemsArray.splice(itemIndex, 1);
        else
            this.itemsArray[itemIndex].quantity --;
    }
}

module.exports = Basket;