'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var regexpattern = require('./utils/RegexPatterns').RegexPatterns;

var Strings = function () {
    function Strings() {
        _classCallCheck(this, Strings);
    }

    _createClass(Strings, [{
        key: 'anagram',

        /**
         * @function Both strings are anagrams
         * @param {String} str1 - First string
         * @param {String} str2  - Second String
         * @returns {Boolean} 
         */
        value: function anagram(str1, str2) {
            return str1.split('').sort().join('') === str2.split('').sort().join('');
        }

        /**
         * @function Camelize a string i.e CamelCase
         * @param {String} str - a String
         * @returns {String} 
         */

    }, {
        key: 'camelize',
        value: function camelize(str) {
            return str.replace(/\s(.)/g, function (val) {
                return val.toUpperCase();
            }).replace(/\s/g, '').replace(/^(.)/, function (val) {
                return val.toLowerCase();
            });
        }

        /**
         * @function Get ISO-8601 week number of a year
         * @param {Object} date: Date Object
         * @returns {Number}
         */

    }, {
        key: 'ISO8601WeekNumber',
        value: function ISO8601WeekNumber(date) {
            var d = new Date(date.valueOf());
            d.setDate(d.getDate() - (date.getDay() + 6) % 7 + 3);
            var temp = d.valueOf();
            d.setMonth(0, 1);
            if (d.getDay() !== 4) d.setMonth(0, 1 + (4 - d.getDay() + 7) % 7);
            return 1 + Math.ceil((temp - d) / 604800000);
        }

        /**
         * @function Calculate the days between two dates
         * @param {Object} date1: First date object
         * @param {Object} date2: Second date object 
         * @returns {Number}
         */

    }, {
        key: 'differenceBetweenDates',
        value: function differenceBetweenDates(date1, date2) {
            var difference = (date2.getTime() - date1.getTime()) / 1000;
            difference /= 60 * 60 * 24;
            return Math.abs(Math.round(difference));
        }

        /**
         * @function Escape characters from string
         * @param {String} str - a String 
         * @returns {String}
         */

    }, {
        key: 'escape',
        value: function escape(str) {
            if (!str) {
                throw new Error('error');
            } else {
                var map = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#039;'
                };
                return str.toString().replace(/[&<>"']/g, function (m) {
                    return map[m];
                });
            }
        }

        /**
         * @function Filter out falsy values from an array
         * @param {Array} arr - an array  
         * @returns {Array}
         */

    }, {
        key: 'filterFalsy',
        value: function filterFalsy(arr) {
            return arr.filter(function (val) {
                if (val !== false || val !== null || val !== 0 || val !== "") {
                    return val;
                }
            });
        }

        /**
         * @function Filter out an element from an array
         * @param {Array} arr: an array 
         * @param {Element} elem: an element 
         * @returns {Array}
         */

    }, {
        key: 'filter',
        value: function filter(arr, elem) {
            return arr.filter(function (val) {
                return val === elem ? val : null;
            });
        }

        /**
         * @function Generate random hex color
         * @returns {String}
         */

    }, {
        key: 'generateHexColor',
        value: function generateHexColor() {
            var letters = '0123456789ABCDEF',
                color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        /**
         * @function Generate random RGB color
         * @returns {String}
         */

    }, {
        key: 'generateRGBColor',
        value: function generateRGBColor() {
            return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        }

        /**
         * @function Generate a Global Unique Identifier
         * @param {Number} len - length 
         * @returns {String}
         */

    }, {
        key: 'guid',
        value: function guid(len) {
            var arr = [],
                chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                length = len || 32;

            for (var i = 0; i < length; i++) {
                arr[i] = chars.charAt(Math.floor(Math.random() * chars.length));
            }

            return arr.join('');
        }

        /**
         * @function String Hamming Distance
         * @param {String} str1 - a string
         * @param {String} str2 - a string
         * @returns {Number}
         */

    }, {
        key: 'stringHammingDistance',
        value: function stringHammingDistance(str1, str2) {
            var distance = 0;
            str1 = str1.toLowerCase(), str2 = str2.toLowerCase();

            for (var i in str1) {
                if (str2[i] && str2[i] !== str1[i]) {
                    distance += Math.abs(str1.charCodeAt(i) - str2.charCodeAt(i)) + Math.abs(str2.indexOf(str1[i])) * 2;
                } else if (!str2[i]) {
                    distance += distance;
                }
            }
            return distance;
        }

        /**
         * @function hasAtleastOneLowerCaseLetter: String has atleast one lower-cased letter.
         * @param {String} str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'hasAtleastOneLowerCaseLetter',
        value: function hasAtleastOneLowerCaseLetter(str) {
            var temp = false;
            var a = str.split("");
            a.forEach(function (key, index) {
                if (a[index] === key.toLowerCase()) {
                    temp = true;
                }
            });

            return temp;
        }

        /**
         * @function hasAtleastOneUpperCaseLetter: String has atleast one upper-cased letter.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'hasAtleastOneUpperCaseLetter',
        value: function hasAtleastOneUpperCaseLetter(str) {
            var temp = false;
            var a = str.split("");
            a.forEach(function (key, index) {
                if (key.toUpperCase() === a[index]) {
                    temp = true;
                }
            });
            return temp;
        }

        /**
         * @function Converts hex color to RGB
         * @param {String} hex - a hex string
         * @returns {Array}
         */

    }, {
        key: 'hexToRgb',
        value: function hexToRgb(hex) {
            hex = hex.replace(/^#/, '');
            if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            var temp = parseInt(hex, 16);

            return [temp >> 16, temp >> 8 & 255, temp & 255];
        }

        /**
         * @function Humanize a number
         * @param {Number} num - a number
         * @returns {String} 
         */

    }, {
        key: 'humanizeNumber',
        value: function humanizeNumber(num) {
            var array = ["th", "st", "nd", "rd"];
            if (num === undefined) return "";
            var lstDg = num % 10;
            return lstDg < 4 ? num + array[lstDg] : num + array[0];
        }

        /**
         * @function initials: Get the intitials of a person's name
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'initials',
        value: function initials(str) {
            var output = '';
            str = str.split("");
            output = str[0];
            str.forEach(function (val, index) {
                if (val.indexOf(' ') != -1) {
                    output += str[index + 1];
                }
            });
            return output;
        }

        /**
         * @function isASCII: String contains ASCII characters
         * @param {String} str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'isASCII',
        value: function isASCII(str) {
            var regex = regexpattern('ascii');
            return regex.test(str);
        }

        /**
         * @function isBool: String contains true, false, 0 or 1
         * @param {String} str - a string 
         * @returns {Boolean} 
         */

    }, {
        key: 'isBool',
        value: function isBool(str) {
            return str === 'true' || str === 'false' || parseInt(str) === 0 || parseInt(str) === 1;
        }

        /**
         * @function isDataURI: String is a data uri format.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isDataURI',
        value: function isDataURI(str) {
            return regexpattern('dataURI').test(str);
        }

        /**
         * @function String is an emoji
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isEmoji',
        value: function isEmoji(str) {
            return regexpattern('emoji').test(str);
        }

        /**
         * @function isEmpty: String is empty or not
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isEmpty',
        value: function isEmpty(str) {
            return str === null || str === 'undefined' || str.length === 0;
        }

        /**
         * @function isEndWidth: String ends with target.
         * @param {String} str 
         * @param {String} target 
         * @returns {Boolean} 
         */

    }, {
        key: 'isEndWith',
        value: function isEndWith(str, target) {
            if (target) {
                return str.substr(-target.length) === target ? true : false;
            }
        }

        /**
         * @function isEquals: Compares the two strings entered
         * @param {String} str - a string
         * @param {String} elem - an element 
         */

    }, {
        key: 'isEquals',
        value: function isEquals(str, elem) {
            return str === elem;
        }

        /**
         * @function Value is a function
         * @param {Argument} val 
         * @returns {Boolean}
         */

    }, {
        key: 'isFunction',
        value: function isFunction(val) {
            return typeof val === 'function';
        }

        /**
         * @function isHexaDecimal: String is hexadecimal.
         * @param {String} str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'isHexaDecimal',
        value: function isHexaDecimal(str) {
            return regexpattern('hexdecimal').test(str);
        }

        /**
         * @function isHexColor: String is a hex color.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isHexColor',
        value: function isHexColor(str) {
            var hex = regexpattern('hexcolor');
            return hex.test(str);
        }

        /**
         * @function isIPAddress: String is an IP address.
         * @param {String} str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'isIPAddress',
        value: function isIPAddress(str) {
            return regexpattern('ip').test(str);
        }

        /**
         * @function String is a JSON object
         * @param {String} str
         * @returns {Boolean} 
         */

    }, {
        key: 'isJSON',
        value: function isJSON(str) {
            try {
                var obj = JSON.parse(str);
                return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
            } catch (e) {}
            return false;
        }

        /**
         * @function isLowerCase: String is all lower-cased.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isLowerCase',
        value: function isLowerCase(str) {
            return str === str.toLowerCase();
        }

        /**
         * @function isMACAddress: String is a MAC Address.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isMACAddress',
        value: function isMACAddress(str) {
            var mac = regexpattern('mac');
            return mac.test(str);
        }

        /**
         * @function isMD5: Validate MD5
         * @param {String} - str - a string
         * @returns {Boolean} 
         */

    }, {
        key: 'isMD5',
        value: function isMD5(str) {
            var md5 = regexpattern('md5');
            return md5.test(str);
        }

        /**
         * @function isPalindrome: String is a palindrome.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isPalindrome',
        value: function isPalindrome(str) {
            var reverse = str.toLowerCase().replace(/[\W_]/g, '').split("").reverse().join("");
            return str.toLowerCase().replace(/[\W_]/g, '') === reverse;
        }

        /**
         * @function isUpperCase: String is all upper-cased.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isUpperCase',
        value: function isUpperCase(str) {
            return str === str.toUpperCase();
        }

        /**
         * @function isValidEmail: String is a valid email id.
         * @param {String} str - a string
         * @returns {Boolean}  
         */

    }, {
        key: 'isValidEmail',
        value: function isValidEmail(str) {
            var regex = regexpattern('email');
            return regex ? regex.test(str) : null;
        }

        /**
         * @function to Kebab Case
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'kebabCase',
        value: function kebabCase(str) {
            return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').toLowerCase();
        }

        /**
         * @function Remove tags from an HTML statement
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'removeTags',
        value: function removeTags(str) {
            str = str.toString();
            return str.replace(/<[^>]*>/g, '');
        }

        /**
         * @function Reverse words of a sentence in place
         * @param {String} str - a string
         * @returns {String}  
         */

    }, {
        key: 'reverseInPlace',
        value: function reverseInPlace(str) {
            return str.split(' ').reverse().join(' ').split('').reverse().join('');
        }

        /**
         * @function rgbToHex: RGB to Hex format
         * @param {Number} red 
         * @param {Number} green 
         * @param {Number} blue
         * @returns {String} 
         */

    }, {
        key: 'rgbToHex',
        value: function rgbToHex(red, green, blue) {
            var hex = '';
            hex = "#" + ("0" + parseInt(red, 10).toString(16)).slice(-2) + ("0" + parseInt(green, 10).toString(16)).slice(-2) + ("0" + parseInt(blue, 10).toString(16)).slice(-2);

            return hex;
        }

        /**
         * @function Romanize a number
         * @param {Number} num - a number
         * @returns {String} 
         */

    }, {
        key: 'romanize',
        value: function romanize(num) {
            if (!+num) throw new Error('Some error');
            var digits = String(+num).split(""),
                key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                romanNum = "",
                temp = 3;
            while (temp--) {
                romanNum = (key[+digits.pop() + temp * 10] || "") + romanNum;
            }return Array(+digits.join("") + 1).join("M") + romanNum;
        }

        /**
         * @function Secures your email using asterisks
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'secureEmail',
        value: function secureEmail(str) {
            var str1 = void 0,
                temp = void 0,
                asterisks = void 0;
            str1 = str.split("@");
            asterisks = str1[0].length - str1[0].length * 0.8;
            temp = str1[0].substring(0, Math.floor(asterisks));

            return '' + temp + '*'.repeat(str1[0].split("").length - asterisks) + '@' + str1[1];
        }

        /**
         * @function Secure password using astrisks
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'securePassword',
        value: function securePassword(str) {
            return '*'.repeat(str.length);
        }

        /**
         * @function to Snake Case
         * @param {String} str - a string 
         * @returns {String}
         */

    }, {
        key: 'snakeCase',
        value: function snakeCase(str) {
            return str.indexOf(" ") !== -1 ? str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '_').toLowerCase() : str.replace(/([A-Z])/g, function ($1) {
                return "_" + $1.toLowerCase();
            });
        }

        /**
         * @function Sort string characters in alphabetical order
         * @param {String} str - a string
         * @returns {String} 
         */

    }, {
        key: 'sortChar',
        value: function sortChar(str) {
            return str.toLowerCase().match(/\w/g).sort().join("");
        }

        /**
         * @function splitName: Return the first name and the last name of a person's name.
         * @param {String} str - a string
         * @returns {Array}
         */

    }, {
        key: 'splitName',
        value: function splitName(str) {
            return str.split(" ");
        }

        /**
         * @function Seperate thousands using commas
         * @param {Number} num - a number
         * @returns {String} 
         */

    }, {
        key: 'thousandSeperator',
        value: function thousandSeperator(num) {
            var parts = num.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }

        /**
         * @function Parse string to float value
         * @param {String} str - a string
         * @returns {Number} 
         */

    }, {
        key: 'toFloat',
        value: function toFloat(str) {
            return parseFloat(str);
        }

        /**
         * @function Parse string to integer value
         * @param {String} str - a string
         * @returns {Number} 
         */

    }, {
        key: 'toInt',
        value: function toInt(str, radix) {
            return parseInt(str, radix || 10);
        }

        /**
         * @function Convert string to titleCase
         * @param {String} str - a string
         * @returns {String}
         */

    }, {
        key: 'toTitleCase',
        value: function toTitleCase(str) {
            return str.toString().replace(/\w\S*/g, function (text) {
                return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
            });
        }

        /**
         * @function Remove leading and trailing zeroes from an array
         * @param {Array} arr - an array
         * @returns {Array} 
         */

    }, {
        key: 'trailingAndLeading',
        value: function trailingAndLeading(arr) {
            return arr.join("").replace(/^0+(\d)|(\d)0+$/gm, '$1$2');
        }

        /**
         * @function Truncate a string at provided position 
         * @param {String} str - a string
         * @param {Number} pos - position is array
         * @returns {String}
         */

    }, {
        key: 'truncate',
        value: function truncate(str, pos) {
            return str.split(" ").splice(0, pos).join(" ");
        }

        /**
         * @function Unescape the string
         * @param {String} str - an escaped string
         * @returns {String} 
         */

    }, {
        key: 'unescape',
        value: function unescape(str) {
            return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
        }

        /**
         * @function Generate a UUID i.e universally unique identifier
         * @returns {String}
         */

    }, {
        key: 'uuid',
        value: function uuid() {
            var date = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (val) {
                var r = (date + Math.random() * 16) % 16 | 0;
                date = Math.floor(date / 16);
                return (val == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }

        /**
         * @function Count the number of vowels in a string
         * @param {String} str - a string
         * @returns {Number}
         */

    }, {
        key: 'countVowels',
        value: function countVowels(str) {
            var vowels = 'aeiouAEIOU',
                count = 0;
            str = str.trim().split("");
            str.forEach(function (val) {
                if (vowels.indexOf(val) !== -1) count++;
            });
            return count;
        }

        /**
         * @function Zerofill a number to the given length
         * @param {Number} number - a number
         * @param {*} len - length
         */

    }, {
        key: 'zeroFill',
        value: function zeroFill(number, len) {
            return '0'.repeat(len - number.toString().length) + number;
        }
    }]);

    return Strings;
}();

module.exports = Strings;