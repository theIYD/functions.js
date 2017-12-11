import isBool from './functions/isBool';
import isEmpty from './functions/isEmpty';
import isEquals from './functions/isEquals';
import isMD5 from './functions/isMD5';
import isPalindrome from './functions/isPalindrome';

const stringfunc = {
    isItMD5: isMD5,
    isItEquals: isEquals,
    isItEmpty: isEmpty,
    isItBool: isBool,
    isItPalindrome: isPalindrome
}

module.exports = {stringfunc};