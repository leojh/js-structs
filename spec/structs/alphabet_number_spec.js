describe('alphabet_number', function() {

  var valuesToTest = [
    {alphabet: "AAA", decimal: 703},
    {alphabet: "ADK", decimal: 791},
    {alphabet: "ALG", decimal: 995},
    {alphabet: "CPU", decimal: 2465},
    {alphabet: "CUB", decimal: 2576},
    {alphabet: "DID", decimal: 2942},
    {alphabet: "EDA", decimal: 3485},
    {alphabet: "EVU", decimal: 3973},
    {alphabet: "EWU", decimal: 3999}
  ];

  var addAlphaNumbers = function(operands) {
    var result = operands.reduce(function(memo, alphaNumber) {
      var decimalNumber = alphabet_number.toDecimal(alphaNumber);
      return memo + decimalNumber;
    }, 0);

    return alphabet_number.toAlphaNumber(result);
  };

  var charMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function(char, index) {
    return {char: char, val: ++index};
  });

  it('should return the decimal value of the alphabet number', function() {
    valuesToTest.forEach(function(item) {
      expect(alphabet_number.toDecimal(item.alphabet)).toBe(item.decimal);
    });
  });

  it('should return alpha value of individual decimal number', function() {
    charMap.forEach(function(item) {
      expect(alphabet_number.decimalToChar(item.val)).toBe(item.char);
    });
  });

  it('should return decimal value of individual alphabet character', function() {
    charMap.forEach(function(item) {
      expect(alphabet_number.charToDecimal(item.char)).toBe(item.val);
    });
  });

  it('should convert decimal number to alphabet number', function() {
    valuesToTest.forEach(function(item) {
      expect(alphabet_number.toAlphaNumber(item.decimal)).toBe(item.alphabet);
    });
  });

  it ('should allow you to do some arithmetic using letters', function() {
    var testCases = [
      {operands: ['A','A'], result: 'B', operation: addAlphaNumbers},
      {operands: ['C','C'], result: 'F', operation: addAlphaNumbers},
      {operands: ['A','B'], result: 'C', operation: addAlphaNumbers},
      {operands: ['Z','A'], result: 'AA', operation: addAlphaNumbers}
    ];

    testCases.forEach(function(testCase) {
      expect(testCase.operation(testCase.operands)).toBe(testCase.result);
    });
  });
});
