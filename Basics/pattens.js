function printRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*" + " ");
    }
    console.log(" ");
  }
}

function printRightTriangleNumbers(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log(" ");
  }
}

function printRightTriangleAlphabets(n) {
  let aV = "A".charCodeAt(0);
  for (let i = aV; i < aV + n; i++) {
    for (let j = aV; j <= i; j++) {
      process.stdout.write(String.fromCharCode(j) + " ");
    }
    console.log(" ");
  }
}

function printInvertedRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (j = n; j >= i; j--) {
      process.stdout.write("*" + " ");
    }
    console.log(" ");
  }
}

function printMirroredRightTriangle(n) {
  // Write your logic here
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" " + " ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*" + " ");
    }
    console.log(" ");
  }
}

function printVShapePattern(n) {
  for (let i = 1; i <= n; i++) {
    for (j = 1; j < 2 * n; j++) {
      if (i == j || i == 2 * n - j) {
        process.stdout.write("*" + "");
        continue;
      }
      process.stdout.write(" " + "");
    }
    console.log(" ");
  }
}

function printXShapePattern(n) {
  // Write your logic here
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == j || i == n - j + 1) {
        process.stdout.write("*" + "");
        continue;
      }
      process.stdout.write(" " + "");
    }
    console.log(" ");
  }
}
