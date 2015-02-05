/*
  In each of these examples some Ruby code is provided inline. Your job is to translate
  the Ruby code into JavaScript. Individual line comments (//) indicate where code should
  be placed.
*/

// require 'json' # <= any ruby constant in this file is available (runs the file)
// JSON.parse

module.exports = {
  /*
    def return_array
      [1,2,3,4]
    end
  */

  returnArray: function() {
    return [1,2,3,4]
  },

  /*
    def divide(numerator, denominator)
      numerator / denominator
    end
  */

  divide: function (a, b) {
    return a/b;
  },

  /*
    def add(a,b)
      a + b
    end
  */

  add: function (a, b) {
    return a+b;
  },

  /*
    def power(base, exponent)
      base ** exponent
    end
  */

  power: function (b,e) {
    return Math.pow(b,e);
  },

  /*
    def concatenate(string_1, string_2)
      string_1 + string_2
    end
  */

  concatenate: function (string_1, string_2) {
    return string_1 + string_2;
  },

  /*
    def sub(string, char, replacement)
      string.sub(char, replacement)
    end
  */

  sub: function (string_1, char_old, char_new) {
    var new_string = "";
    var n = string_1.indexOf(char_old);
    for (var i=0; i < string_1.length; i++) {
      if (i === n) {
        new_string = new_string + char_new;
      } else {
        new_string = new_string + string_1[i];
      }
    }
    return new_string;
  }

}
