const paragrafo = document.getElementById("paragrafo");
const frase = document.getElementById("texto");

function lidarInput(){
    console.log(frase.value);
}
//olhar no html a chamada das funções
function lidarBotao(){
    paragrafo.innerHTML = frase.value;
    frase.value = ""
}


