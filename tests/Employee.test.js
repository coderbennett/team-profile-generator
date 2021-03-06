const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("should return employee name", () => {
            const employee = new Employee("Edgar", 1012243, "edgar@greenleaf.com");
            expect(employee.getName()).toBe("Edgar");
        });
    });

    describe("getId method", () => {
        it("should return employee ID", () => {
            const employee = new Employee("Savannah", 1012341, "savannah@greenleaf.com");
            expect(employee.getId()).toBe(1012341);
        });
    });

    describe("getEmail method", () => {
        it("should return employee email", () => {
            const employee = new Employee("Flora", 1001126, "flora@greenleaf.com");
            expect(employee.getEmail()).toBe("flora@greenleaf.com");
        });
    });

    describe("getRole method", () => {
        it("should return employee role", () => {
            const employee = new Employee("Bruce", 1023314, "bruce@greenleaf.com");
            expect(employee.getRole()).toBe("Employee");
        });
    });
});