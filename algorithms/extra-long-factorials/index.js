function extraLongFactorials(n) {
  const bigN = BigInt(n);

  function factorial(number) {
    if (number === 1n) return number;

    return number * factorial(number - 1n);
  }

  console.log(String(factorial(bigN)));
}
