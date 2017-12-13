const fs = require('fs');
const path = require('path');
const funcs = require('./allfunctions');

const generated = './';
let func_generated_table = `## Methods \n\n| Method Name | Topic | Description | Return Type |
| ------------| ------------| ------------| ------------|`;

const header = `# ![functions.js](https://github.com/theIYD/functions.js/blob/master/media/functionsjs.png)\n
# functions.js\n
> **functions.js** is a hub of various functions or methods which act differently according to their functionality.\n
 - Please feel free to contribute, read the ![contributions guide]().
 - The code is written in ES6.\n
`;

func_generated_table += '\n';
try {

    for(let func of funcs) {
        func_generated_table += `|${func.title} |${func.topic} |${func.description} |${func.return_type} |\n`;
    }

} catch(err) {
    throw new Error(`Error : ${err}`);
}

func_generated_table += '\n';

const license = `\n## License\n The project is licensed under ![MIT](https://github.com/theIYD/functions.js/blob/master/LICENSE)`;
output = header + func_generated_table + license;

fs.writeFileSync(path.join(generated, 'README.md'), output, function(err) {
    console.log(err);
})