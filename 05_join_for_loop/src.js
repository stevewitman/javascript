/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    var result = "";
    for (i=0; i < list.length; i++) {
      result = result + list[i];
    }
    return result;
  },

  joinWithForAndIndex: function(list) {
    var result = "";
    for (i=0; i < list.length; i++) {
      result = result + list[i];
      result = result + i;
    }
    return result;
  },

  joinWithoutOddCharacters: function(list) {
    var result = "";
    for (i=0; i < list.length; i++) {
      if (i%2 === 0) {
        result = result + list[i];
      }
    }
    return result;
  },

  joinWithForAndToken: function(array, token) {
    var result = array.join(token);
    return result;
  },

  joinWithForAndAlternatingTokens: function (array, token_odd, token_even) {
    var result = "";
      for (i = 0; i < array.length; i++) {
        result = result + array[i];
        if (i < array.length-1) {
          if (i%2 === 0) {
            result = result + token_odd;
          } else {
            result = result + token_even;
          }
        }
      }
    return result;
  }
}
