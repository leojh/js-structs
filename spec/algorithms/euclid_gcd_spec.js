var testCases = [
  {a: 372, b: 72, gcd: 12},
  {a: 12, b: 18, gcd: 6},
  {a: 1000, b: 35, gcd: 5},
  {a: 45, b: 54, gcd: 9},
];

describe('euclid_gcd_recursive', function() {
  it('euclid_gcd_recursive should find GDC for pair of numbers', function() {

    testCases.forEach(function(testCase) {
      expect(euclid_gcd_recursive(testCase.a, testCase.b)).toBe(testCase.gcd);
    });

  });
});


// describe('euclid_gdc_functional', function() {
//   it('euclid_gdc(372,84) = 12', function() {
//     expect(euclid_gcd(372, 84)).toBe(12);
//   });
// });
