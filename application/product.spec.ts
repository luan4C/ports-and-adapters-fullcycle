import { DISABLED, ENABLED } from "./contracts/ProductDefinition"
import Product from "./product"

describe("Product", () => {
    test("should enable product when valid", () => {
        const product = new Product("ab1","product_1",1.56, DISABLED)
        
        product.Enable()
        expect(product.GetStatus()).toBe(ENABLED)
    })
    test("should throws error product is invalid", () => {
        const product = new Product("ab1","product_1",-1.56, DISABLED)
        
        expect(product.Enable()).toThrow()
        expect(product.GetStatus()).toBe(DISABLED)
    })
})