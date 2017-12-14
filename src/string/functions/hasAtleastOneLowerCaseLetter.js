const string_util = require('./util/isString');

/**
 * @function hasAtleastOneLowerCaseLetter: String has atleast one lower-cased letter.
 * @param {*} str 
 */
export default function hasAtleastOneLowerCaseLetter(str) {
    string_util.isString(str);
    let temp = false;
    let a = str.split("");
    a.forEach(function(key, index){
        if(a[index] === key.toLowerCase()) {
            temp = true;
        }
    });

    return temp;
}