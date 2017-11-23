var botaoOpcoes = document.getElementById("botaoOpcoes").querySelector("input");

botaoOpcoes.onclick = function() {
	var fundoPopup = document.getElementById("fundoPopup");
	var popupDadosEquipe = document.getElementById("popupDadosEquipe");
	var botaoOkDados = document.getElementById("botaoOkDados").querySelector("input");

	popupDadosEquipe.style.display = "block";
	fundoPopup.style.display = "block";

	botaoOkDados.onclick = function() {
		popupDadosEquipe.style.display = "none";
		fundoPopup.style.display = "none";
		this.onclick = null;
	}

	botaoOkDados.onmouseover = function() {
		this.style.cursor = "pointer";
	}

	botaoOkDados.onmouseout = function() {
		this.style.cursor = "default";
	}
}

botaoOpcoes.onmouseover = function() {
	this.style.cursor = "pointer";
}

botaoOpcoes.onmouseout = function() {
	this.style.cursor = "default";
}