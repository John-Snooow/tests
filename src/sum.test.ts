import { sum } from "./server"

describe("sum 1", () => {
    
    test("sum", () => {
        const result = sum (3, 7)
    
        expect(result).toBe(10)
    })
    
    
    test("sum of  2 + 2 must be 4", () => {
        const result = sum (2, 2)
    
        expect(result).toBe(4)   
    })

})


describe("sum 2", () => {
    
    test("sum", () => {
        const result = sum (30, 70)
    
        expect(result).toBe(100)
    })
    
    
    test("sum of  2 + 2 must be 4", () => {
        const result = sum (20, 25)
    
        expect(result).toBe(45)   
    })
    
})