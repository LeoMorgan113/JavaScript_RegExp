# JavaScript Regular Expressions

The **RegExp** object is used for matching text with a pattern.

There is two ways to create a **RegExp** object: a *literal notation* and a *constructor*.

```javascript
let regexp = /ab+c/i; // literal notation
let regexp = new RegExp('ab+c', 'i') // constructor with string pattern as first argument
let regexp = new RegExp(/ab+c/, 'i') // constructor with regular expression literal as first argument (Starting with ECMAScript 6)
```

### RegExp Syntax Table:

| Regex      | Meaning                                      |
|------------|----------------------------------------------|
| [abx-z]    | One character of: a, b, or the range x-z     |
| [^abx-z]   | One character except: a, b, or the range x-z |
| ^          | 	Beginning of the string                     |
| $          | 	End of the string                           |
| \d         | 	A digit (same as [0-9])                     |
| \D         | 	A non-digit (same as [^0-9])                |
| \w	        | A word character (same as [_a-zA-Z0-9])      |
| \W	        | A non-word character (same as [^_a-zA-Z0-9]) |
| \s	        | A whitespace character                       |
| \S	        | A non-whitespace character                   |
| \b	        | A word boundary                              |
| \B	        | A non-word boundary                          |
| \n	        | A newline                                    |
| \t	        | A tab                                        |
| a &#x7c; b | a or b                                       |
| a?         | Zero or one a's (greedy)                     |
| a??        | Zero or one a's (lazy)                       |
| a*         | Zero or more a's (greedy)                    |
| a*?        | Zero or more a's (lazy)                      |
| a+         | One or more a's (greedy)                     |
| a+?        | One or more a's (lazy)                       |
| a{4}       | Exactly 4 a's                                |
| a{4,8}     | Between (inclusive) 4 and 8 a's              |
| a{9,}      | 9 or more a's                                |
| (?=...)	   | A positive lookahead (if followed by)        |
| (?!...)    | 	A negative lookahead (if not followed by)   |
| (?:...)    | A non-capturing group                        |
| (...)      | A capturing group                            |
|  \cY	      | The control character with the hex code Y    |
| \xYY	      | The character with the hex code YY           |
| \uYYYY	    | The character with the hex code YYYY         |
| .	         | Any character                                |
| \Y         | 	The Y'th captured group                     |


### Simple RegExp examples 

- Check does string contain date(format: XX/XX/XXXX):
```javascript
let regexp = /(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
console.log(regexp.test('Albert Einstein was born in Ulm, on 14/03/2019'))
```

- Check is string a time(format: XX:XX:XX):
```javascript
let regexp = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;
console.log(regexp.test('12:38:01'))
```

- Pattern that matches e-mail addresses:
```javascript
let regexp = /^[A-Z|a-z]+[0-9]*?[!#@\$%&\+-\/=\?\^_`\{\|\}~]+[A-Z|a-z]+[0-9]*?.\w{2,3}/
console.log(regexp.test("me-info@example.com"))
```

- Check is string a hexcolor:
```javascript
let regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
console.log(regexp.test("#00F"))
```

- Add thousands separators:
```javascript
function thousands_separators(num, separator){
    // Return value with thousands separators
    let value = num.toString().split('.');
    value[0] = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return value.join(".");
}
console.log(thousands_separators(10000, ","))
```

- Delete comment from code:
```javascript
function stripCommeпts(code){
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
};
console.log(stripCommeпts("1 /* а */+/* b */ 1"));
console.log(stripCommeпts("1 + 1 //a+b"));
```

- Replace single qoute with double:
```javascript
let regexp = /(^|\W)'|'(\W|$)/g;
let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(regexp, '$1"$2'));
```

> More functions can be found in *regexp.js* file.
