const Basket = require(`../src/classes/Basket.js`);
const Bagel = require(`../src/classes/Bagel.js`);

describe(`Basket Class`, () => {
    let basket;
    beforeEach(() => {
        basket = new Basket(); // create a new basket container and save it into basket var
        // this is before each it() runs.
      }) 


    it("Initial basket should be empty", function() {
        expect(basket.GetItems()).toEqual([]);
    })

    it("Should add a Bagel in the basket", function(){
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`)
        const expectedBasket = [{bagel: bagel, quantity: 1}];
        //execute
        const expectedResult = basket.AddBagel(bagel);
        //verify
        expect(expectedResult).toBeTrue();
        expect(basket.GetItems().length).toEqual(1);
        expect(basket.GetItems()).toEqual(expectedBasket);
    })

    it("should increase quantity", function(){
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`)
        const expectedBasket = [{bagel: bagel, quantity: 2}];
        basket.AddBagel(bagel);
        //execute
        basket.AddBagel(bagel);
        //verify
        expect(basket.GetItems()).toEqual(expectedBasket);
    })
}
)