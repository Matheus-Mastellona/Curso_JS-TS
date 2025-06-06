function get(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else if (x == y) {
    return "equal";
  }
}

console.log(get(1, 2));
