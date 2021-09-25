function plusMinus(arr) {
  const length = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((number) => {
    if (number > 0) {
      positive++;
    } else if (number < 0) {
      negative++;
    } else {
      zero++;
    }
  });

  process.stdout.write(
    `${positive / length}\n${negative / length}\n${zero / length}`
  );
}
