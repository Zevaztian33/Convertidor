document.getElementById("kilos").addEventListener("input", function(e) {
  let kgs = e.target.value;
  document.getElementById("libras").innerHTML = kgs * 2.205 + " lb";
  document.getElementById("tonelada").innerHTML = kgs / 1000 + " oz";
  document.getElementById("onzas").innerHTML = kgs * 35.274 + " t";
});

document.getElementById("metros").addEventListener("input", function(e) {
    let mts = e.target.value;
    document.getElementById("pulgadas").innerHTML = mts * 39.37 + " in";
    document.getElementById("pies").innerHTML = mts * 3.281 + " ft";
    document.getElementById("millas").innerHTML = mts / 1609 + " mi";
});
document.getElementById("grados").addEventListener("input", function(e) {
    let grd = e.target.value;
    document.getElementById("farenheit").innerHTML = (grd * 9/5) + 32 + " ºF";
    document.getElementById("kelvin").innerHTML = grd + 273.15 + " ºK.";
});