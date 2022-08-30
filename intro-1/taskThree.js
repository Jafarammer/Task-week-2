const printSegitiga = 9;
if (typeof printSegitiga === "string") {
  console.log("Data harus number");
} else if (printSegitiga <= 0) {
  console.log("Angka harus lebih besar dari 0");
} else {
  let string = "";
  for (let x = printSegitiga; x >= 1; x--) {
    for (let y = 0; y >= 1 - x; y--) {
      string += x;
    }
    string += "\n";
  }
  console.log(string);
}
