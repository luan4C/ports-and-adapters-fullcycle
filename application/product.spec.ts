import { DISABLED, ENABLED } from "./contracts/ProductDefinition"
import Product from "./product"

describe("Product tests", () => {
    test("should enable product when valid", () => {
        const product = new Product("ab1","product_1",1.56, DISABLED)
        
        product.Enable()
        expect(product.GetStatus()).toBe(ENABLED)
    })
    test("should throw error product is invalid", () => {
        const product = new Product("ab1","product_1",-1.56, DISABLED)
        
        expect(() => product.Enable()).toThrow("Cannot enabled product with invalid price")
        expect(product.GetStatus()).toBe(DISABLED)
    })
    test("Should disable product when prices is 0", () => {
        const product = new Product("ab1","product_1",0, ENABLED)
        
        product.Disable()
        expect(product.GetStatus() == DISABLED );        
    })

    test("Should throw when disabling product with price greater than 0", () => {
        const product = new Product("ab1","product_1",0.5, ENABLED)
        
        expect(() => product.Disable()).toThrow();
        expect(product.GetStatus() == ENABLED);                
    })

    test("Should return and Error when invalid", () => {
        const product = new Product("ab1","product_1",0.5, "any")

        const valid = product.IsValid()
        expect(valid.valid).toBe(false);
        expect(valid.error?.message).toBe("the status must be enabled or disabled");

    })
})