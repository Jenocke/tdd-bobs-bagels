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

    //Adding Bagel tests
    it("Should add a Bagel in the basket", function(){
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`);
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
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`);
        const expectedBasket = [{bagel: bagel, quantity: 2}];
        basket.AddBagel(bagel);
        //execute
        const expectedResult = basket.AddBagel(bagel);
        //verify
        expect(expectedResult).toBeTrue();
        expect(basket.GetItems()).toEqual(expectedBasket);
    })

    //capacity tests
    it("can't add more than size", function(){
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`);
        const expectedBasket = [{bagel: bagel, quantity: 5}];
        basket.AddBagel(bagel);
        basket.AddBagel(bagel);
        basket.AddBagel(bagel);
        basket.AddBagel(bagel);
        basket.AddBagel(bagel);
        //execute
        const expectedResult = basket.AddBagel(bagel);
        //verify
        expect(basket.GetItems()).toEqual(expectedBasket);
        expect(expectedResult).toBeFalse();
    })
    it("can't add more than size - test2", function(){
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`);
        const bagel2 = new Bagel(`BGLE`, 0.49, `Bagel`, `Everything`);
        const expectedBasket = [{bagel: bagel, quantity: 3}, {bagel: bagel2, quantity: 2}];
        basket.AddBagel(bagel);
        basket.AddBagel(bagel);
        basket.AddBagel(bagel);
        basket.AddBagel(bagel2);
        basket.AddBagel(bagel2);
        //execute
        const expectedResult = basket.AddBagel(bagel);
        //verify
        expect(basket.GetItems()).toEqual(expectedBasket);
        expect(expectedResult).toBe(false);
    })

    //bagel removal tests
    it("should remove bagel", function() {
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`);
        const bagel2 = new Bagel(`BGLE`, 0.49, `Bagel`, `Everything`);
        const expectedBasket = [{bagel: bagel, quantity: 2}];
        basket.AddBagel(bagel);        
        basket.AddBagel(bagel);
        basket.AddBagel(bagel2);
        //execute
        basket.RemoveBagel(bagel2);
        //verify
        expect(basket.GetItems()).toEqual(expectedBasket);
    })
    it("should remove bagel -sku", function() {
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`);
        const bagel2 = new Bagel(`BGLE`, 0.49, `Bagel`, `Everything`);
        const expectedBasket = [{bagel: bagel, quantity: 2}];
        basket.AddBagel(bagel);        
        basket.AddBagel(bagel);
        basket.AddBagel(bagel2);
        //execute
        basket.RemoveBagel(`BGLE`);
        //verify
        expect(basket.GetItems()).toEqual(expectedBasket);
    })
    it("should decrease quantity", function() {
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`);
        const bagel2 = new Bagel(`BGLE`, 0.49, `Bagel`, `Everything`);
        const expectedBasket = [{bagel: bagel, quantity: 1}, {bagel: bagel2, quantity: 1}];
        basket.AddBagel(bagel);        
        basket.AddBagel(bagel);
        basket.AddBagel(bagel2);
        //execute
        basket.RemoveBagel(bagel);
        //verify
        expect(basket.GetItems()).toEqual(expectedBasket);
    })
    it("should decrease quantity - sku", function() {
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`);
        const bagel2 = new Bagel(`BGLE`, 0.49, `Bagel`, `Everything`);
        const expectedBasket = [{bagel: bagel, quantity: 1}, {bagel: bagel2, quantity: 1}];
        basket.AddBagel(bagel);        
        basket.AddBagel(bagel);
        basket.AddBagel(bagel2);
        //execute
        basket.RemoveBagel(`BGLO`);
        //verify
        expect(basket.GetItems()).toEqual(expectedBasket);
    })
}
)