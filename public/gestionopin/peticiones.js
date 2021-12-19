let endpoints = {
    0 : "/pares",
    1 : "/fibonacci",
    3 : "/seriefactorial",
    14 : "/factorial"
  }

  function probandopeti(enpoint,numero) {
    let _data = {
      numero
    } 
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML =
          this.responseText;
        }
      };
      xhttp.open("POST", enpoint, true);
      xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhttp.send(JSON.stringify(_data));
    }

function getidselec(){
    let select = document.getElementById("ejercicio").value
    let elnumero = document.getElementById("elnumero").value
  
    if(!elnumero){
      document.getElementById("demo").innerHTML = "DEBE SELECCCIONAR NUMERO"
      return
}
probandopeti(endpoints[select],elnumero)
}
