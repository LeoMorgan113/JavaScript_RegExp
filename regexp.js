// 1. Write a JavaScript program to test the first character of a string is uppercase or not.

console.log(/^[A-Z]/.test('Sell'))

// 2. Write a JavaScript program to check a credit card number.

console.log(/^\d{4}-\d{4}-\d{4}-\d{4}|\d{16}/.test('1234-3345-5677-6543'))

// 3. Write a pattern that matches e-mail addresses.
// The personal information part contains the following ASCII characters.
//
// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
//     Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

console.log(/^[A-Z|a-z]+[0-9]*?[!#@\$%&\+-\/=\?\^_`\{\|\}~]+[A-Z|a-z]+[0-9]*?.\w{2,3}/.test("me-info@example.com"))

console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/.test("test@gmail.com"))


// 4. Write a JavaScript program to search a date within a string.

console.log(/\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/.test('today is 1-1-2022 10:00'))
console.log(/(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/.test('Albert Einstein was born in Ulm, on 14/03/2019'))

// 5. Write a JavaScript program that work as a trim function (string) using regular expression.
console.log("   Hello, man   ".replace(/^\s+|\s+$/g, ""))

// 6. Write a JavaScript program to count number of words in string.
// Note :
// - Remove white-space from start and end position.
// - Convert 2 or more spaces to 1.
// - Exclude newline with a start spacing.
let clean = "   Hello,  man   ".replace(/^\s+|\s+$/gi, "").replace(/[ ]{2,}/gi, ' ')
    .replace(/\n/, '\n')
let count = clean.split(' ').length
console.log(count)


// 7. Write a JavaScript function to check whether a given value is IP value or not.

// regexp =  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^
//     (([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:)
// {7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]
// \d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)
// (\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:
//     ((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]
// {1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))
// |(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)
// (\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:
// ((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:
// ((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;


// 8. Write a JavaScript function to count the number of vowels in a given string.
// Test Data :
//     console.log(alphabetize_string('United States'));
// Output :
//     "SUadeeinsttt"

function alphabetize_string(s){
    return s.match(/[aeuio]/gi).length
}
console.log(alphabetize_string('United States'));

// 9. Write a JavaScript function to check whether a given value is an valid url or not.

// let regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)
// (?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])
// (?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*
//     [a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))
// (?::\d{2,5})?(?:\/\S*)?$/;

// console.log(regex.test("gmail.com"))

// 10. Write a JavaScript function to check whether a given value is alpha numeric or not.

console.log(/^[A-Za-z0-9]+$/.test("123fv"))


// 11. Write a JavaScript function to check whether a given value is time string or not.

console.log(/^(0?[1-9]|1[0-9]|2[0-4]):(0?[1-9]|[1-5][0-9]):(0?[0-9]|[1-5][0-9])$/.test('23:53:74'))
console.log(/^([01]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/.test('23:53:74'))

// 12. Write a JavaScript function to check whether a given value is US zip code or not.

function isZipCode(s){
    let regex = /^[0-9]{5}(?:-[0-9]{4})?$/; //(?: - can be or not
    return regex.test(s);
}
console.log(isZipCode("03201-2150"))

// 13. Write a JavaScript function to check whether a given value is UK Post Code or not.
function is_ukPostCode(str) {
    regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;

    return regexp.test(str);
}

console.log(is_ukPostCode("B294HJ"));

// 14. Write a JavaScript function to check whether a given value is Canada Post Code or not.

function is_caPostalCode(str) {
    regexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;

    return regexp.test(str);
}

console.log(is_caPostalCode("K8V3Y1"));
console.log(is_caPostalCode("K8V 3Y1"));

// 15. Write a JavaScript function to check whether a given value is a social security number or not.
function is_socialSecurity_Number(str) {
    regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

    return regexp.test(str);
}

console.log(is_socialSecurity_Number("019-0090-9878"));

// 16. Write a JavaScript function to check whether a given value is hexadecimal value or not.
function is_Hexadecimal(s){
    let regex = /^[0-9A-Fa-f]+$/;

    return regex.test(s);
}

console.log(is_Hexadecimal("ffffff"))

// 17. Write a JavaScript function to check whether a given value is hexcolor value or not.
function is_HexColor(s){
    let regex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    return regex.test(s)
}
console.log(is_HexColor("#00F"))

// 18. Write a JavaScript function to check whether a given value represents a domain or not.
function is_domain(str) {
    let regexp = /^[a-z0-9]+([\-\.][a-z0-9]+)*\.[a-z]{2,6}$/i;

    return regexp.test(str);
}

console.log(is_domain('www.example.com'));
console.log(is_domain('https://www.npm.co.uk'));

// 19. Write a JavaScript function to check whether a given value is html or not.
function isHtml(s){
    let regex = /<([a-z]+) *[^/]*?>/;
    return regex.test(s);
}
console.log(isHtml("<div>"))

// 20. Write a JavaScript function to check a given value contains alpha, dash and underscore.

console.log(/^[a-z0-9\-_]+$/i.test("23-45"))

// 21. Write a JavaScript function to print an integer with commas as thousands separators.
//
// Test Data :
//     console.log(thousands_separators(1000));
// "1,000"
// console.log(thousands_separators(10000.23));
// "10,000.23"
// console.log(thousands_separators(100000));
// "100,000"

function thousands_separators(s){
    let num = s.toString().split('.');
    num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num.join(".");
}
console.log(thousands_separators(10000))

// parse INI file
function parseINI(string) {
// Начинаем с объекта для хранения nолей верхнего уровня
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\)$/)) {
            section = result[match[1]] = {};
        }else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Cтpoкa '" + line + "' некорректна.");
        }
    });
    return result;
}
console.log(parseINI('name=Vasilis[address]city=Tessaloniki'));
// ~ {name: "Vasilis", address: {city: "Tessaloniki"}}

// delete comment from code
function stripCommeпts(code){
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
};
console.log(stripCommeпts("1 /* а */+/* Ь */ 1"));
console.log(stripCommeпts("1 + 1 //a+b"));

// change string from 'Firstname, Lastname' to 'Lastname FirstName'
console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/ (\w+),(\w+)/g, "$2 $1"));

