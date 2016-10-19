var formContent = document.getElementsByClassName("form-content")[0];
var botaoPt1 = document.getElementsByClassName("botoes-acao")[0];
var formContent2 = document.getElementsByClassName("form-content-part2")[0];
var botaoVoltar = document.getElementsByClassName("botoes-acao-voltar")[0];

botaoPt1.onclick=function(){
  formContent.style.display="none";
  formContent2.style.display="block";
}
botaoVoltar.onclick=function(){
  formContent2.style.display = "none";
  formContent.style.display="block";
}
