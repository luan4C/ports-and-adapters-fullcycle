
export interface ProductDefinition {
    IsValid(): ({valid:boolean, error?:Error})
    Enable(): void
    Disable(): void
    GetId():  string
    GetName(): string
    GetStatus(): string
    GetPrice():  number
}
export const DISABLED = "disabled"
export const ENABLED = "enabled"
