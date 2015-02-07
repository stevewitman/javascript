module.exports = {

  first: function(array) {
    var result = array[0];
    return result;
  },

  last: function(array) {
    var result = array[array.length-1];
    return result;
  },

  empty: function(array) {
    var result = false;
    if (array.length === 0) result = true;
    return result;
  },


  // look for a more elegant solution for this one
  first_n: function(array, n) {
    var result = [];
    if (n > array.length) n = array.length;
    for (i=0; i<n; i++) {
      result.push(array[i]);
    }
    return result;
  },

  last_n: function(array, n) {
    var result = [];
    if (n > array.length) n = array.length;
    for (i = (array.length - n); i < array.length; i++) {
      result.push(array[i]);
    }
    return result;
  },

  drop: function (array, n) {
    var result = [];
    if (n > array.length) n = 0;
    result = array.splice((array.length-n), n);
    return result;
  },

  union: function (array_1, array_2) {
    var result = array_1;
    for (i = 0; i < array_2.length; i++) {
      result.push(array_2[i]);
    }
    return result;
  },

  intersection: function (array_1, array_2) {
    var result = [];
      for (i = 0; i < array_1.length; i++) {
        for (var j = 0; j < array_2.length; j++) {
          if (array_1[i] === array_2[j]) {
            result.push(array_1[i]);
          }
        }
      }
    return result;
  }

}
