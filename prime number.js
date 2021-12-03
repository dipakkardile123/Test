for (var a = 2; a < 10; a++) {
  var b = 2
  var isprimenumber=true;
  while (b < a) {
    if (a % b == 0) {
      isprimenumber = false;
    }
    b++;
  }
  if (isprimenumber) {
    console.log(a);
  }
  
}
