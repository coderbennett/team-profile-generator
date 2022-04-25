const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("should return the intern's school property", () => {
            const intern = new Intern("Gloria", 1034193, "gloria@greenleaf.com", "Imperial Valley College");
            expect(intern.getSchool()).toBe("Imperial Valley College");
        });
    });

    describe("getRole method", () => {
        it("should return employee role", () => {
            const intern = new Intern("Stephanie", 1034194, "stephanie@greenleaf.com", "California State University, East Bay");
            expect(intern.getRole()).toBe("Intern");
        });
    });

    describe("getName method", () => {
        it("should return employee id", () => {
            const intern = new Intern("Sean", 1014144, "sean@greenleaf.com", "California State University, Monterey Bay");
            expect(intern.getName()).toBe("Sean");
        })
    });

    describe("getId method", () => {
        it("should return employee id", () => {
            const intern = new Intern("Timothy", 1094514, "timothy@greenleaf.com", "Northridge");
            expect(intern.getId()).toBe(1094514);
        })
    });

    describe("getEmail method", () => {
        it("should return employee email", () => {
            const intern = new Intern("Ysidro", 1412441, "ysidro@greenleaf.com", "UCLA");
            expect(intern.getEmail()).toBe("ysidro@greenleaf.com");
        })
    });
});