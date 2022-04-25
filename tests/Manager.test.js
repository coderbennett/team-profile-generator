const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("getRole method", () => {
        it("should return employee role", () => {
            const manager = new Manager("Barb", 1001128, "barb@greenleaf.com", "1026");
            expect(manager.getRole()).toBe("Manager");
        });
    });

    describe("getName method", () => {
        it("should return employee id", () => {
            const manager = new Manager("Claire", 1013314, "claire@greenleaf.com", "1031");
            expect(manager.getName()).toBe("Claire");
        })
    });

    describe("getId method", () => {
        it("should return employee id", () => {
            const manager = new Manager("Theodosia", 1002402, "theodosia@greenleaf.com", "1231");
            expect(manager.getId()).toBe(1002402);
        })
    });

    describe("getEmail method", () => {
        it("should return employee email", () => {
            const manager = new Manager("Ysabelle", 1013401, "ysabelle@greenleaf.com", "1023");
            expect(manager.getEmail()).toBe("ysabelle@greenleaf.com");
        })
    });
});