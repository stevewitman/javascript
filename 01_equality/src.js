module.exports = {
  sameLength: function(string1, string2) {
    if (string1.length === string2.length) {
      return true;
    } else {
      return false;
    }
  },

  firstGreater: function(string1, string2) {
    if (string1 > string2) {
      return true;
    } else {
      return false;
    }
  },

  firstGreaterThanOrEqualTo: function(string1, string2) {
    if (string1 >= string2) {
      return true;
    } else if (string1 < string2) {
      return false;
    }
  },

  firstLengthGreater: function(string1, string2) {
    if (string1.length > string2.length) {
      return true;
    } else if (string1.length <= string2.length) {
      return false;
    }
  },

  secondGreater: function(string1, string2) {
    if (string1 < string2) {
      return true;
    } else if (string1 >= string2) {
      return false;
    }
  }

}
