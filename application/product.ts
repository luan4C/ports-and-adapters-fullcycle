import { DISABLED, ENABLED, type ProductDefinition } from "./contracts/ProductDefinition";

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
    Disable():  void {
        if(this.Price ==0)
        {
            this.Status = DISABLED;
        }
        else
            throw new Error("Cannot disable product with price greater than 0!");

    }

    IsValid(): ({ valid: boolean; error?: Error; }) {
        if(this.Status == ""){
            this.Status = DISABLED;
        }

        if(this.Status != ENABLED && this.Status != DISABLED){
            return {valid: false, error: new Error("the status must be enabled or disabled")}
        }

            if(this.Price < 0){
            return {valid: false, error: new Error("the price must be greater then or equal 0")}
        }

        return {valid: true}
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