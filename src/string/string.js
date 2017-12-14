import isBool from './functions/isBool';
import isEmpty from './functions/isEmpty';
import isEquals from './functions/isEquals';
import isMD5 from './functions/isMD5';
import isPalindrome from './functions/isPalindrome';
import isEndWith from './functions/isEndWith';
import isASCII from './functions/isASCII';
import isHexColor from './functions/isHexColor';
import isMACAddress from './functions/isMACAddress';
import isValidEmail from './functions/isValidEmail';
import isIPAddress from './functions/isIPAddress';
import isHexaDecimal from './functions/isHexaDecimal';
import isLowerCase from './functions/isLowerCase';
import isUpperCase from './functions/isUpperCase';
import isDataURI from './functions/isDataURI';

const stringfunc = {
    isItMD5: isMD5,
    isItEquals: isEquals,
    isItEmpty: isEmpty,
    isItBool: isBool,
    isItPalindrome: isPalindrome,
    isItEndWith: isEndWith,
    isItASCII: isASCII,
    isItHexColor: isHexColor,
    isItMACAddress: isMACAddress,
    isItAValidEmail: isValidEmail,
    isItAnIPAddress: isIPAddress,
    isItAHexDecimal: isHexaDecimal,
    isItLowerCased: isLowerCase,
    isItUpperCased: isUpperCase,
    isItADataURI: isDataURI
}

module.exports = {stringfunc};