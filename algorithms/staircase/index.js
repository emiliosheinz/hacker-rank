function staircase(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    const x = n - row;

    for (let column = 1; column <= n; column++) {
      if (column <= x) {
        result += " ";
      } else {
        result += "#";
      }
    }

    result += "\n";
  }

  process.stdout.write(result);
}
