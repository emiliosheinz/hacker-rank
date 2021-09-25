function diagonalDifference(arr) {
  const mainDiag = [];
  const secondDiag = [];

  const rows = arr.length;

  let column = 0;
  for (let row = 0; row < rows; row++) {
    mainDiag.push(arr[row][column]);
    secondDiag.push(arr[rows - row - 1][column]);
    column++;
  }

  const x = mainDiag.reduce((result, current) => result + current, 0);
  const y = secondDiag.reduce((result, current) => result + current, 0);

  return Math.abs(x - y);
}
