
class Basket{
    constructor(size = 5){
        this.itemsArray = [];
        this.size = size;
    }

    GetCurrentCapacity(){
        let capacity = 0;
        this.itemsArray.forEach(element => {
            capacity+=element.quantity;
        });
        return capacity;
    }

    AddBagel(bagelToAdd){
        let capacity = this.GetCurrentCapacity();
        if(capacity == this.size)
            return false;
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
    
    RemoveBagel(bagel){
        let itemIndex;
        let test = typeof(bagel);
        if(test === "string")
        {
            itemIndex = this.itemsArray.findIndex((item) => item.bagel.sku === bagel)
        }
        else
        itemIndex = this.itemsArray.findIndex((item) => item.bagel.sku === bagel.sku)
        if(this.itemsArray[itemIndex].quantity <=1)
        this.itemsArray.splice(itemIndex, 1);
        else
        this.itemsArray[itemIndex].quantity --;
    }
    
    GetItems(){
        return this.itemsArray;
    }

    
}

module.exports = Basket;