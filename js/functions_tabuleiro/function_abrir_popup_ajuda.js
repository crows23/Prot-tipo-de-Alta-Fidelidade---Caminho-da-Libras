var botaoAjuda = document.getElementById("botaoAjuda").querySelector("input");

botaoAjuda.onclick = function() {
	alert("Popup de ajuda ainda em desenvolvimento");
}

botaoAjuda.onmouseover = function() {
	this.style.cursor = "pointer";
}

botaoAjuda.onmouseout = function() {
	this.style.cursor = "default";
}