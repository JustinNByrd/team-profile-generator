const Manager = require("../utils/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object of type Manager.", () => {
            const obj = new Manager('Justin', 1, 'justin@here.com',15);
            expect(obj instanceof Manager).toEqual(true);
        })

        it("Should return the manager's name", () => {
            const obj = new Manager('Justin', 1, 'justin@here.com',15);
            expect(obj.getName()).toEqual("Justin");
        })

        it("Should return the manager's ID number", () => {
            const obj = new Manager('Justin', 1, 'justin@here.com',15);
            expect(obj.getID()).toEqual(1);
        })

        it("Should return the manager's email", () => {
            const obj = new Manager('Justin', 1, 'justin@here.com',15);
            expect(obj.getEmail()).toEqual("justin@here.com");
        })

        it("Should return the manager's school", () => {
            const obj = new Manager('Justin', 1, 'justin@here.com',15);
            expect(obj.getOfficeNum()).toEqual(15);
        })

        it("Should return the manager's role", () => {
            const obj = new Manager('Justin', 1, 'justin@here.com',15);
            expect(obj.getRole()).toEqual("Manager");
        })
    })
});