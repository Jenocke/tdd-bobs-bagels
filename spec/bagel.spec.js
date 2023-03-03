const Bagel = require(`../src/classes/Bagel.js`);

describe("Bagel Class", () => {
    //testing if we can see the price
    it("should show the price", () =>{
        //setup
        const bagel = new Bagel(`BGLO`, 0.49, `Bagel`, `Onion`);
        const bagel2 = new Bagel(`COF`, 0.99, `Bagel`, ``);
        //execute
        const expectedResult = bagel.getPrice();
        const expectedResult2 = bagel2.getPrice();
        //verify
        expect(expectedResult).toEqual(0.49);
        expect(expectedResult2).toEqual(0.99);
    })
})
