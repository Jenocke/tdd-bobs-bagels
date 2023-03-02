
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
        console.log(this.itemsArray);
        return true;
    }

    GetItems(){
        return this.itemsArray;
    }
}

module.exports = Basket;