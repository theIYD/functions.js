const fs = require('fs');
const path = require('path');
const funcs = require('./allfunctions');

const generated = './';
let func_generated_table = `## Methods \n\n| Method Name | Category | Description | Return Type |
| ------------| ------------| ------------| ------------|`;

const header = `![](https://github.com/theIYD/functions.js/blob/master/media/functionsjs.png)\n
# functions.js\n
> **functions.js** is a hub of various functions or methods which act differently according to their functionality.\n
 - Please feel free to contribute, read the <a href="https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md">contributing guide</a>.
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

const marked = '```';

const jscode = `const func = require('functions.js');\n\nconsole.log(func.StringFunc.SecureEmail('helloworld@example.com'));\n//returns 'he********@example.com'\n\nconsole.log(func.MathFunc.EuclideanDistance([3,4,5], [8,7,9]));\n//returns '7.0710678118654755'\n\nconsole.log(func.AlgoFunc.Reverse([17,65,100,32,98,14,25]));\n//returns '[25,14,98,32,100,65,17]'\n\nconsole.log(func.StringFunc.hasAtleastOneLowerCaseLetter('HELLoWORLD'));\n//returns 'true'\n` + marked + '\n';

const install = `## Install\n\nThe project is up on <a href="https://www.npmjs.com/package/functions.js">npm</a> and can be used in a project by: \n\n` + marked + `\nnpm install --save functions.js\n\n` + marked + '\n';

const usage = `## Usage\n\nBelow is an example on how to use the library into your projects.\n\n` + marked + 'js\n\n' + jscode;

const about = `\n## About\n The project is a continuation to a package previously owned by me named **<a href="https://www.npmjs.com/package/okay-string">okay-string</a>**. I thought of renaming it to <em>functions</em> & learn more by actually practicing functions. That's how <code>functions.js</code> was created.😍\n`;

const license = `\n## License\n The project is licensed under <a href="https://github.com/theIYD/functions.js/blob/master/LICENSE">MIT</a>`;
output = header + install + usage + func_generated_table + about + license;

const contributing_guide_header = `# Contributing ✏️\n To this project, you can contribute by sending pull requests for new functions that might solve some problem or reduce the complexity of a problem.\n`;

const contributing_guide_content = `\n### Guide for new functions\n 
-  The function should be created in <code>src/{category}/functions/{filename.js}</code>. Add the function names to <code>category.js</code> and <code>allfunctions.js</code>.

- While adding the function names to above mentioned files, make sure to maintain the **alphabetical order**.

- The function should be explained above the function declaration itself with the help of **JSDOC**. 

- The code written should be preferably in **ES6** standard.

- Be sure to **test** the function before making a pull request. 

- If you have a new category to be included, feel free to make a pull request. 

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
