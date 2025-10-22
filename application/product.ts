import { ENABLED, type ProductDefinition } from "./contracts/ProductDefinition";

class Product implements ProductDefinition {
    
    public Id: string;

    public Name: string;

    public Price: number;

    public Status: string;

    constructor(id: string, name: string, price: number, status: string) {
        this.Id = id;
        this.Name = name;
        this.Price = price;
        this.Status = status;
    }
    Enable(): void {
        if(this.Price <= 0)
            throw new Error("Cannot enabled product with invalid price");
        else
            this.Status = ENABLED;
    }
    Disable(): () => void {
        throw new Error("Method not implemented.");
    }

    IsValid(): () => ({ valid: boolean; error?: Error; }) {
        throw new Error("Method not implemented.");
    }
    
    GetId():  string {
        throw new Error("Method not implemented.");
    }
    GetName():  string {
        throw new Error("Method not implemented.");
    }
    GetStatus():  string {
        return this.Status
    }
    GetPrice():  number {
        throw new Error("Method not implemented.");
    }
    
}

export default Product