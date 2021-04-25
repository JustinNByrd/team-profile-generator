const Engineer = require("../utils/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object of type engineer.", () => {
            const obj = new Engineer('Justin', 1, 'justin@here.com','JustinNByrd');
            expect(obj instanceof Engineer).toEqual(true);
        })

        it("Should return the engineer's name", () => {
            const obj = new Engineer('Justin', 1, 'justin@here.com','JustinNByrd');
            expect(obj.getName()).toEqual("Justin");
        })

        it("Should return the engineer's ID number", () => {
            const obj = new Engineer('Justin', 1, 'justin@here.com','JustinNByrd');
            expect(obj.getID()).toEqual(1);
        })

        it("Should return the engineer's email", () => {
            const obj = new Engineer('Justin', 1, 'justin@here.com','JustinNByrd');
            expect(obj.getEmail()).toEqual("justin@here.com");
        })

        it("Should return the engineer's GitHub username", () => {
            const obj = new Engineer('Justin', 1, 'justin@here.com','JustinNByrd');
            expect(obj.getGitHub()).toEqual("JustinNByrd");
        })

        it("Should return the engineer's role", () => {
            const obj = new Engineer('Justin', 1, 'justin@here.com','JustinNByrd');
            expect(obj.getRole()).toEqual("Engineer");
        })
    })
});