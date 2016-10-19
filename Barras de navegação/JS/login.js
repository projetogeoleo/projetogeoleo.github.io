var loginboxxx = document.getElementById("login-box");
var barra = document.getElementsByClassName("navegador-superior")[0];
var ul = barra.getElementsByTagName("ul")[0];
var li = ul.getElementsByTagName("li")[0];
var a = li.getElementsByTagName("a")[0];

a.onclick = function(){
  if (loginboxxx.style.display=="block") {
    loginboxxx.style.display = "none";
    document.getElementsByTagName("a")[0].className = "link-menu";
  }
  else {
    loginboxxx.style.display = "block";
    document.getElementsByTagName("a")[0].className = "botao-menu-ativo";
  }
}
