var botaoOpcoes = document.getElementById("botaoOpcoes").querySelector("input");

botaoOpcoes.onclick = function() {
	alert("Popup de opções ainda em desenvolvimento");
}

botaoOpcoes.onmouseover = function() {
	this.style.cursor = "pointer";
}

botaoOpcoes.onmouseout = function() {
	this.style.cursor = "default";
}