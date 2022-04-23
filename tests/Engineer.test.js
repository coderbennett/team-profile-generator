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
});