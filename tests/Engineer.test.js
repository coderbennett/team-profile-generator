const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

    describe("getGithub method", () => {
        it("should return the engineer's github username", () => {
            const engineer = new Engineer("Beatrice", 1012395, "bea@greenleaf.com", "bealanore");
            expect(engineer.getGithub()).toBe("bealanore");
        })
    });

    describe("getRole method", () => {
        it("should return the employee's role", () => {
            const engineer = new Engineer("Beatrice", 1012395, "bea@greenleaf.com", "bealanore");
            expect(engineer.getRole()).toBe("Engineer");
        })
    });

    describe("getName method", () => {
        it("should return employee id", () => {
            const engineer = new Engineer("Kyle", 1014421, "kyle@greenleaf.com", "whilekyle");
            expect(engineer.getName()).toBe("Kyle");
        })
    });

    describe("getId method", () => {
        it("should return employee id", () => {
            const engineer = new  Engineer("Trevor", 1091223, "trevor@greenleaf.com", "trevorforever");
            expect(engineer.getId()).toBe(1091223);
        })
    });

    describe("getEmail method", () => {
        it("should return employee email", () => {
            const engineer = new Engineer("Helena", 1421412, "helena@greenleaf.com", "helenahhh");
            expect(engineer.getEmail()).toBe("helena@greenleaf.com");
        })
    });
});