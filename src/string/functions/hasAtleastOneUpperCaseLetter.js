const string_util = require('./util/isString');

/**
 * @function hasAtleastOneUpperCaseLetter: String has atleast one upper-cased letter.
 * @param {String} str - a string
 * @returns {Boolean}  
 */
const hasAtleastOneUpperCaseLetter = str => {
    string_util.isString(str);
    let temp = false;
    let a = str.split("");
    a.forEach(function(key, index){
      if(key.toUpperCase() === a[index]) {
        temp = true;
      }
    });
    return temp;
}

module.exports = hasAtleastOneUpperCaseLetter