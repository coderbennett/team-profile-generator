const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNo) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNo = officeNo;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;