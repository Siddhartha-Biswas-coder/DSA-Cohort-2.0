let n = 4;
towerOfHanoi(n, "src", "help", "dest");

function towerOfHanoi(n, src, hel, des) {
  if (n == 1) {
    console.log(`move ${n}th plate from ${src} to ${des}`);
    return;
  }
  towerOfHanoi(n - 1, src, des, hel);
  console.log(`move ${n}th plate from ${src} to ${des}`);
  towerOfHanoi(n - 1, hel, src, des);
}
