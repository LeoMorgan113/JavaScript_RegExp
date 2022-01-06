function verifyRegExp(regexp, str){
    return regexp.test(str);
}


function isFirstUpperCase(s){
    // Check if the first character is uppercase
    let re = /^[A-Z]/;
    return re.test(s)
}
// console.log(firstUpperCase('Sell'))


function isAlphaDashUnderscore(s){
    let re = /^[a-z0-9\-_]+$/i;
    return re.test(s)
}
// console.log(isAlphaDashUnderscore("23-45"));


function isAlphaNumeric(s) {
    // Check whether a given value is alphanumeric or not
    let re = /^[A-Za-z0-9]+$/;
    return re.test(s)
}
// console.log(isAlphaNumeric("123fv"))


function isNumber(s){
    // Check whether a given value is a number
    let re = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
    return re.test(s);
}
let nums = ["1a", "+-1", "1.2.3", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4"];
for(let str of nums){
    console.log(isNumber(str))
}


function changeFormat(s){
    // change string from 'Firstname, Lastname' to 'Lastname FirstName'
    return s.replace(/ (\w+),(\w+)/g, "$2 $1")
}
// console.log(changeFormat("Liskov, Barbara\nMcCarthy, John\nWadler, Philip"));


function isHexColor(s){
    // Check whether a given value is hexcolor value or no
    let regex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    return regex.test(s)
}
// console.log(isHexColor("#00F"))


function isHtml(s){
    // Check whether a given value contains html or not
    let regex = /<([a-z]+) *[^/]*?>/g;
    return regex.test(s);
}
// console.log(isHtml("<div>some text</div>"))
// console.log(isHtml("some text</div>"))


function removeComments(code){
    // Remove comments from code
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
};
// console.log(removeComments("1 /* а */+/* Ь */ 1"));
// console.log(removeComments("1 + 1 //a+b"));


function replaceQuotes(s){
    // Replace single quotes with double where needed
    return s.replace(/(^|\W)'|'(\W|$)/g, '$1"$2')
}
// console.log(replaceQuotes("'I'm the cook,' he said, 'it's my job.'"));


function thousands_separators(num, separator){
    // Return value with thousands separators
    let value = num.toString().split('.');
    value[0] = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return value.join(".");
}
// console.log(thousands_separators(10000, ","))


function isCreditCard(s){
    // Check a credit card number
    let re = /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}/
    return re.test(s);
}
// console.log(checkCreditCard('1234-3345-5677-6543'))


function isValidEmail(s) {
    // Validate an email
    // Uppercase (A-Z) and lowercase (a-z) English letters.
    // Digits (0-9).
    // Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
    // Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
    let re = /^[A-Z|a-z]+[0-9]*?[!#@\$%&\+-\/=\?\^_`\{\|\}~]+[A-Z|a-z]+[0-9]*?.\w{2,3}/
    return re.test(s);
}
// console.log(checkEmail("me-info@example.com"))


function isDate(s){
    // Check if date(format: XX/XX/XXXX) within a string
    let re = /(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
    return re.test(s);
}
// console.log(checkDate('Albert Einstein was born in Ulm, on 14/03/2019'))


function isTime(time) {
    // Check if time(format: XX:XX:XX) within a string
    let re = /([01]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])/;
    return re.test(time);
}
// console.log(isTime('23:53:14'))

function trimWithRegExp(s, replaceText){
    // Trim function (string) using regular expression
    let re = /^\s+|\s+$/g;
    return s.replace(re, replaceText);
}
// console.log(trimWithRegExp("   Hello, man   ", ""))


function isValidUrl(s) {
    // Check whether a given value is a valid URL or not
    let re = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return re.test(s)
}
// console.log(isValidUrl("gmail.com"))


function isDomain(str) {
    // Check whether a given value represents a domain or not
    let regexp = /^[a-z0-9]+([\-\.][a-z0-9]+)*\.[a-z]{2,6}$/i;
    return regexp.test(str);
}
// console.log(isDomain('www.example.com'));
// console.log(isDomain('https://www.npm.co.uk'));


function isIP(ip) {
    // Check whether a given value is IP value or not.
//     let regexp =  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:)
//     {7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]
// \d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)
//     (\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:
//         ((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]
//     {1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))
// |(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)
//     (\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:
//     ((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:
//     ((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

    // return regexp.test(ip);
}
// console.log(isIP('198.156.23.5'));


function countVowels(s){
    // Count vowels in a given string
    return s.match(/[aeuio]/gi).length
}
// console.log(countVowels('United States'));

function countWordsWithRegExp(s){
    // - Remove white-space from start and end position.
    let trimStartEndWs = s.replace(/^\s+|\s+$/gi, "");
    // - Convert 2 or more spaces to 1.
    let convertWs = trimStartEndWs.replace(/[ ]{2,}/gi, ' ');
    // - Exclude newline with a start spacing.
    let excludeNewline = convertWs.replace(/\n/, '\n');

    return excludeNewline.split(' ').length;
}
// console.log(countWordsWithRegExp("   Hello,  man   "));


function isUsZipCode(s){
    // Check whether a given value is US zip code or not
    let regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return regex.test(s);
}
// console.log(isZipCode("03201-2150"))

function isUkPostCode(str) {
    // Check whether a given value is UK Post Code or not
    let regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
    return regexp.test(str);
}
// console.log(isUkPostCode("B294HJ"));


function isCanadaPostalCode(str) {
    // Check whether a given value is Canada Post Code or not
    let regexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
    return regexp.test(str);
}
// console.log(isCanadaPostalCode("K8V3Y1"));
// console.log(isCanadaPostalCode("K8V 3Y1"));


function isUkrainePostalCode(str) {
    // Check whether a given value is Ukraine Post Code or not
    let regexp = /^[0-9]{5}$/;
    return regexp.test(str);
}
// console.log(isUkrainePostalCode("01135"));


function isSocialSecurityNumber(str) {
    // Check whether a given value is a social security number or not
    let regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
    return regexp.test(str);
}
// console.log(isSocialSecurityNumber("019-0090-9878"));


function isValidPhoneNumber(str) {
    // Check whether a given value is ukrainian phone number
    let regexp = /^\+?(38)?\(?0(39|67|68|96|97|98|50|66|95|99|63|93|91|92|94|73)\)?-?\d{3}-?\d{2}-?\d{2}$/;
    return regexp.test(str);
}
// console.log(isValidPhoneNumber("+38(096)-054-29-71"));
// console.log(isValidPhoneNumber("0930678234"));


function parseINI(string) {
    // Parse INI file
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\)$/)) {
            section = result[match[1]] = {};
        }else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("String '" + line + "' is incorrect.");
        }
    });
    return result;
}
// console.log(parseINI('name=Vasilis[address]city=Tessaloniki'));
// Output: {name: "Vasilis", address: {city: "Tessaloniki"}}






