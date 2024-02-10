/**
 *
 * @param s initial house index
 * @param t end house index
 * @param a apple tree position
 * @param b orange tree position
 * @param apples distance where the apple is from its tree
 * @param oranges distance where the orange is from its tree
 */
function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  let applesOnTheHouse = 0;
  apples.forEach((distance) => {
    const index = a + distance;
    if (index >= s && index <= t) {
      applesOnTheHouse++;
    }
  });

  let orangesOnTheHouse = 0;
  oranges.forEach((distance) => {
    const index = b + distance;
    if (index >= s && index <= t) {
      orangesOnTheHouse++;
    }
  });

  console.log(applesOnTheHouse);
  console.log(orangesOnTheHouse);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
