const fs = require("fs");

// содать json file
const obj = {
    "course": "node js 2024",
    "sprints": 12,
    "task": 165,
    "tags": [
        "fs", "file", "db"
    ]
}

fs.writeFileSync("./j_1.json", JSON.stringify(obj), {encoding: "utf8", flag: "w"});