module.exports = {

  helloWorld: function(){
    // fill me in
    return "Hello World";
  },

  hello: function(string){
    // fill me in
    return "Hello " + string;
  },

  shout: function(string){
    return "Hello " + string.toUpperCase();
  },

  whisper: function(string){
    return "Hello " + string.toLowerCase();
  },

  separate: function(string) {
    return string.split("");
  },

  reverseJoin: function(array) {
    return array.reverse().join(",");
  },

  reverseJoinCompact: function(array) {
    return array.reverse().join("");
  },

  backwardsDay: function(string) {
    var s = string[0].toUpperCase() + string.slice(1)
    var reversed = s.split("").reverse().join("");
    return "Hello " + reversed;
  },

}
