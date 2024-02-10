function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  if (v1 < v2) {
    return "NO";
  }

  if ((x2 - x1) % (v1 - v2) === 0) {
    return "YES";
  }

  return "NO";
}
