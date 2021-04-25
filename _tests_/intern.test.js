const Intern = require("../utils/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object of type Intern.", () => {
            const obj = new Intern('Justin', 1, 'justin@here.com','State U');
            expect(obj instanceof Intern).toEqual(true);
        })

        it("Should return the intern's name", () => {
            const obj = new Intern('Justin', 1, 'justin@here.com','State U');
            expect(obj.getName()).toEqual("Justin");
        })

        it("Should return the intern's ID number", () => {
            const obj = new Intern('Justin', 1, 'justin@here.com','State U');
            expect(obj.getID()).toEqual(1);
        })

        it("Should return the intern's email", () => {
            const obj = new Intern('Justin', 1, 'justin@here.com','State U');
            expect(obj.getEmail()).toEqual("justin@here.com");
        })

        it("Should return the intern's school", () => {
            const obj = new Intern('Justin', 1, 'justin@here.com','State U');
            expect(obj.getSchool()).toEqual("State U");
        })

        it("Should return the engineer's role", () => {
            const obj = new Intern('Justin', 1, 'justin@here.com','JustinNByrd');
            expect(obj.getRole()).toEqual("Intern");
        })
    })
});