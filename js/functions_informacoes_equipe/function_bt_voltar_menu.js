var btVoltar = document.getElementById("botaoVoltar").querySelector("input");
var iconeBotaoVoltar = document.getElementById("iconeBotaoVoltar");

btVoltar.onclick = function() {
	voltarMenu();
}

iconeBotaoVoltar.onclick = function() {
	voltarMenu();
}

btVoltar.onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "4px solid #283891";
	this.style.borderRight = "none";

	iconeBotaoVoltar.style.border = "4px solid #283891";
	iconeBotaoVoltar.style.width = "172px";
	iconeBotaoVoltar.style.height = "82px";
}

btVoltar.onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "none";

	iconeBotaoVoltar.style.border = "none";
	iconeBotaoVoltar.style.width = "180px";
	iconeBotaoVoltar.style.height = "90px";
}

iconeBotaoVoltar.onmouseover = function() {
	this.style.border = "4px solid #283891";
	this.style.width = "172px";
	this.style.height = "82px";
	this.style.cursor = "pointer";

	btVoltar.style.border = "4px solid #283891";
	btVoltar.style.borderRight = "none";
}

iconeBotaoVoltar.onmouseout = function() {
	this.style.border = "none";
	this.style.width = "180px";
	this.style.height = "90px";
	this.style.cursor = "default";

	btVoltar.style.border = "none";	
}

function voltarMenu() {
	window.location = "../index.html";
	localStorage.clear();
}