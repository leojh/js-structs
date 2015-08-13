var euclid_gcd_recursive = function(a, b) {
  if (b === 0) {return a;}

  return euclid_gcd_recursive(b, a % b);
};
