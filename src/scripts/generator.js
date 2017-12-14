const fs = require('fs');
const path = require('path');
const funcs = require('./allfunctions');

const generated = './';
let func_generated_table = `## Methods \n\n| Method Name | Category | Description | Return Type |
| ------------| ------------| ------------| ------------|`;

const header = `![](https://github.com/theIYD/functions.js/blob/master/media/functionsjs.png)\n
# functions.js\n
> **functions.js** is a hub of various functions or methods which act differently according to their functionality.\n
 - Please feel free to contribute, read the ![contributions guide](https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md).
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

const contributing_guide_header = `# Contributing\n To this project, you can contribute by sending pull requests for new functions that might solve some problem or reduce the complexity of a problem.\n`;

const contributing_guide_content = `\n### Guide for new functions\n 
-  The function should be created in <code>src/{category}/functions/{filename.js}</code> Add the particular function entry to category.js.

- The function should be explained above the function declaration itself with the help of multi-line comments. 

- The code written should be in **ES6** only.

- Be sure to test the function before making a pull request. 

`;

fs.writeFileSync(path.join(generated, 'README.md'), output, function(err) {
    console.log(err);
});

contributing_guide = contributing_guide_header + contributing_guide_content;
try {
    fs.writeFileSync(path.join(generated, 'CONTRIBUTING.md'), contributing_guide, function(err) {
        console.log(err);
    });
} catch(err) {
    throw new Error(err);
}
