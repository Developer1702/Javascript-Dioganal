let dig = +prompt("Kvadrat tomoni uzunligini kiriting")
while (isNaN(dig) || dig == 0) {
  dig = +prompt("E bodring! Kvadrat tomoni uzunligini kirit")
}

if (dig % 2 == 0) {
  dig = dig + 1
}

let board = ""
for (let i = 0; i < dig; i++) {
  for (let k = 0; k < dig; k++) {
    if (i == k || i == 0 || k == 0 || k == dig - 1 || i == dig - 1 || i + k == dig - 1) {
      board = board + "[]"
    } else {
      board = board + "  "
    }
  }
  console.log(board);
  board = ""
}