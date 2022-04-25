class generateHTML {
    constructor(teamArray) {
        this.teamArray = teamArray;
    }

    generateContent() {
        return `<!DOCTYPE html>
        <html data-theme="corporate" lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/daisyui@2.14.2/dist/full.css" rel="stylesheet" type="text/css" />
            <title>Team Profile</title>
        </head>
        <body>
            <div class="navbar bg-primary">
                <a class="btn btn-ghost normal-case text-xl text-base-100">Our Team</a>
            </div>
            <div id="cards" class="flex flex-wrap justify-evenly">
                ${this.iterateTeam(this.teamArray)}
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://kit.fontawesome.com/afdfd2c8fa.js" crossorigin="anonymous"></script>
        </body>
        </html>`
    }

    iterateTeam() {
        let string = ``;
        for(let i = 0; i < this.teamArray.length; i++) {
            string += this.generateCards(this.teamArray[i]);
        }
        return string;
    }

    generateCards(employee) {
        let type = employee.getRole();
        let property;
        if (type === 'Manager') {
            property = "Office number: " + employee.officeNo;
            type = '<i class="fa-solid fa-glasses"></i>' + type;
        } else if (type === 'Engineer') {
            property = `GitHub: <a href='https://github.com/${employee.github}' target='_blank'>${employee.github}</a>`;
            type = '<i class="fa-solid fa-code"></i>' + type;
        } else {
            property = "School: " + employee.school;
            type = '<i class="fa-solid fa-graduation-cap"></i>' + type;
        }
    
        return `
    
    <div class="card w-96 bg-secondary shadow-xl m-4">
        <div class="bg-primary">
            <h2 class="card-title m-3 text-base-100">${employee.name}</h2>
            <h2 class="card-title m-3 text-base-100">${type}</h2>
        </div>
        <div class="card-body">
            <p class="bg-base-100 rounded p-2">ID: ${employee.id}</p>
            <p class="bg-base-100 rounded p-2">Email: <a href='mailto:${employee.email}'>${employee.email}</a></p>
            <p class="bg-base-100 rounded p-2">${property}</p>
        </div>
    </div>
        `
    }
}

module.exports = generateHTML;