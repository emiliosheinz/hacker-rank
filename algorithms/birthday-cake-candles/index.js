function birthdayCakeCandles(candles) {
  const findTallest = () =>
    candles.reduce(
      (tallest, currentValue) => Math.max(tallest, currentValue),
      0
    );

  const countTallestCandles = (tallest) =>
    candles.reduce(
      (accumulator, currentValue) =>
        currentValue === tallest ? accumulator + 1 : accumulator,
      0
    );

  const tallest = findTallest();

  return countTallestCandles(tallest);
}
