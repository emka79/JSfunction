
function getTriangleArea (a, h) {
  var wynik = a*h/2
  if ((a <=0) || (h <=0)) {
    console.log('Nieprawidłowe dane');
  }
  else {
    console.log('Wynik prawidłowy')
  }
  return wynik;  
}
  console.log(getTriangleArea(10,6) )


var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTraingleArea(15,20);
var triangle3Area = getTriangleArea(20,25);