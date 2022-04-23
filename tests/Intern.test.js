const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("should return the intern's school property", () => {
            const intern = new Intern("Gloria", 1034193, "gloria@greenleaf.com", "Imperial Valley College");
            expect(intern.getSchool().toBe("Imperial Valley College"));
        });
    });

    describe("getRole method", () => {
        it("should return employee role", () => {
            const intern = new Intern("Stephanie", 1034194, "stephanie@greenleaf.com", "California State University, East Bay");
            expect(intern.getRole().toBe("Intern"));
        });
    });
});