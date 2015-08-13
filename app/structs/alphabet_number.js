var alphabet_number = function() {
  var _alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var self = this;

  self.toDecimal = function(alphaNumber) {
    var _alphaNumber = alphaNumber.toUpperCase();
    var decimalValues = _alphaNumber.split("").reverse().map(function(char, index) {
      return self.charToDecimal(char) * Math.pow(26, index);
    });

    return decimalValues.reduce(function(memo, num) {
      return memo + num;
    }, 0);
  };

  self.toAlphaNumber = function(decimal) {
    var remainders = [], remainder = 0;

    for (var counter = 1; remainder != decimal; counter++) {
      remainder = decimal % (Math.pow(26, counter));
      remainders.push(remainder);
    }

    var mappedChars = remainders.map(function(remainder, index) {
      var charCode = Math.floor(remainder / (Math.pow(26, index)));

      return self.decimalToChar(charCode);
    });

    return mappedChars.reverse().join("");
  };

  self.charToDecimal = function(char) {
    return _alphabet.indexOf(char) + 1;
  };

  self.decimalToChar = function(decimal) {
    return _alphabet.substring(decimal - 1, decimal);
  };

  return self;
}();
