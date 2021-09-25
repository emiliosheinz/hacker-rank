function compareTriplets(a, b) {
  let ares = 0;
  let bres = 0;

  function compare(first, second) {
    if (first > second) {
      ares++;
    } else if (second > first) {
      bres++;
    }
  }

  compare(a[0], b[0]);
  compare(a[1], b[1]);
  compare(a[2], b[2]);

  return [ares, bres];
}
