const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("getRole method", () => {
        it("should return employee role", () => {
            const manager = new Manager("Barb", 1001128, "barb@greenleaf.com", "1026")
            expect(manager.getRole()).toBe("Manager");
        });
    });
});