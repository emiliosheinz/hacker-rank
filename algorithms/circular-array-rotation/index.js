function circularArrayRotation(numbers, iterations, queries) {
  const fullCycleIterations = Number(
    String(iterations / numbers.length).split(".")[0]
  );
  const iterationsLeft =
    fullCycleIterations > 0
      ? iterations - fullCycleIterations * numbers.length
      : iterations;
  const breakIndex = numbers.length - iterationsLeft;

  const begin = numbers.slice(breakIndex);
  const final = numbers.slice(0, breakIndex);
  const result = [...begin, ...final];

  return queries.map((query) => result[query]);
}
