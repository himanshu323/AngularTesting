import * as component from "./getCurrencies"

describe("Test the currecy suite",()=>{


    it("should return 3 arrary values",()=>{

    let res=component.getCurrencies();

    expect(res).toContain('USD');

    expect(res).toContain('AUD');



    })
})