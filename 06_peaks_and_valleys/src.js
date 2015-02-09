/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return "/\\";
  },

  valley: function () {
    return "___";
  },

  peaks: function(n) {
    var result = "";
    for (i=0;i<n;i++) {
      result = result + "/\\";
    }
    return result;
  },

  valleys: function(n) {
    var result = "";
    for (i=0;i<n;i++) {
      result = result + "___";
    }
    return result;
  },

  peaksAndValleys: function(p,v) {
    var result = "";
    for (i=0;i<p;i++) {
      result = result + "/\\";
    }
    for (i=0;i<v;i++) {
      result = result + "___";
    }
    return result;
  }
}
