function miniMaxSum(arr) {
  const sums = arr.map((_, mapIdx) => {
    return arr.reduce(
      (accumulator, number, reduceIdx) =>
        mapIdx === reduceIdx ? accumulator : accumulator + number,
      0
    );
  });

  let min = sums[0];
  let max = sums[0];

  sums.forEach((value) => {
    if (value < min) min = value;
    if (value > max) max = value;
  });

  console.log(`${min} ${max}`);
}
