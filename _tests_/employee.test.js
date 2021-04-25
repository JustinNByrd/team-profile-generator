const Employee = require("../utils/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object of type Employee.", () => {
            const obj = new Employee('Justin', 1, 'justin@here.com');
            expect(obj instanceof Employee).toEqual(true);
        })

        it("Should return the employee's name", () => {
            const obj = new Employee('Justin', 1, 'justin@here.com');
            expect(obj.getName()).toEqual("Justin");
        })

        it("Should return the employee's ID number", () => {
            const obj = new Employee('Justin', 1, 'justin@here.com');
            expect(obj.getID()).toEqual(1);
        })

        it("Should return the employee's email", () => {
            const obj = new Employee('Justin', 1, 'justin@here.com');
            expect(obj.getEmail()).toEqual("justin@here.com");
        })

        it("Should return the employee's role", () => {
            const obj = new Employee('Justin', 1, 'justin@here.com');
            expect(obj.getRole()).toEqual("Employee");
        })
    })
});