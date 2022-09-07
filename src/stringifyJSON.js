// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //number bool
  //null
  //array
  //object
  //function
  //NaN
  //undefined
  //string

  // Brian's Solution ----------

  if (typeof obj === 'number' || typeof obj === 'boolean') { // number and boolean
    return '' + obj;
  } else if (obj === null) { //null case
    return 'null';
  } else if (Array.isArray(obj)) { //array
    var result = [];
    if (obj.length === 0) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'function' || obj[i] === undefined) { //return undefined for values
        result.push('null');
      } else { //call function of element
        result.push(stringifyJSON(obj[i])); //call on the element
      }
    }
    return '[' + result.join(',') + ']';
  } else if (typeof obj === 'object') {
    var result = [];
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    for (var key in obj) {
      var currentObj = {};
      if (typeof obj[key] === 'function' || obj[key] === undefined) { //return undefined for values
        obj[key] = '';
        key = '';
      }
      if (key !== '') { //call function of element
        var keyPart = '"' + key + '":';
        result.push(keyPart + stringifyJSON(obj[key])); //call on the value
      }
    }
    return '{' + result.join(',') + '}'; //format object
  } else if (obj === NaN) { //Not a number
    return 'NaN';
  } else if (typeof obj === 'string') { //string
    return '"' + obj + '"';
  }





  // Fernando's Solution ----------
  // declare an empty string
  // var result = '';
  // // if obj is array ---
  // if (Array.isArray(obj) === true) {
  //   // add bracket to empty string
  //   result += '[';
  //   // iterate through array
  //   for (var i = 0; i < obj.length; i++) {
  //     // add recursion function to empty string
  //     result += stringifyJSON(obj[i]);
  //     // if current value is not the last value in array
  //     if (obj[i] !== obj[obj.length - 1]) {
  //       // add comma to string
  //       result += ',';
  //     }
  //   }
  //   // add closing bracket to empty string
  //   result += ']';
  // } else if (typeof(obj) === 'object' && obj !== null) { // if obj is an object and not null ---
  //   // add curly bracke to string
  //   result += '{';
  //   // iterate through object
  //   for (var key in obj) {
  //     // if key equals undfined or function
  //     if (obj[key] === undefined || typeof(obj[key]) === 'function') {
  //       // delete key
  //       delete key;
  //       // if result has  a comma
  //       if (result.indexOf(',') !== -1) {
  //         // use slice to remove comma from string
  //         result = result.slice(0, -1);
  //       }
  //     } else {
  //       // add recursive case for key and key value into empty string
  //       result += ('"' + key + '":' + stringifyJSON(obj[key]));
  //     }
  //     // if current key is not the last key
  //     if (key !== Object.keys(obj)[Object.keys(obj).length - 1]) {
  //       // add coma to string
  //       result += ',';
  //     }
  //   }
  //   // add closing curly brackets
  //   result += '}';
  // } else if (typeof(obj) === 'string') { // if obj is a string ---
  //   // add value surrounded by commas to string
  //   result += '"' + obj + '"';
  // } else if (obj === undefined || typeof(obj) === 'function') { // if obj undefined and function ---
  //   // add undefined to string
  //   result += undefined;
  // } else { // otherwise (else) ---
  //   // add value to string
  //   result += obj;
  // }

  // // return result variable
  // return result;
};
