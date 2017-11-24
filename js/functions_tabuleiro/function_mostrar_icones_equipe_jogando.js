var nEquipes = window.localStorage.getItem("nEquipes");

var primeiraEquipeJogandoAgora = document.getElementById("primeiraEquipeJogandoAgora");
var segundaEquipeJogandoAgora = document.getElementById("segundaEquipeJogandoAgora");
var terceiraEquipeJogandoAgora = document.getElementById("terceiraEquipeJogandoAgora");
var quartaEquipeJogandoAgora = document.getElementById("quartaEquipeJogandoAgora");

var fila = [];

if (nEquipes == 2) {
	primeiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado1");
	primeiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado1");

	segundaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado2");
	segundaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado2");

	terceiraEquipeJogandoAgora.style.display = "none";
	quartaEquipeJogandoAgora.style.display = "none";

	fila = [primeiraEquipeJogandoAgora, segundaEquipeJogandoAgora]
}

else if (nEquipes == 3) {
	primeiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado1");
	primeiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado1");

	segundaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado2");
	segundaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado2");

	terceiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado3");
	terceiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado3");

	quartaEquipeJogandoAgora.style.display = "none";

	fila = [primeiraEquipeJogandoAgora, segundaEquipeJogandoAgora, terceiraEquipeJogandoAgora]
}

else if (nEquipes == 4) {
	primeiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado1");
	primeiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado1");

	segundaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado2");
	segundaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado2");

	terceiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado3");
	terceiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado3");

	quartaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado4");
	quartaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado4");

	fila = [primeiraEquipeJogandoAgora, segundaEquipeJogandoAgora, terceiraEquipeJogandoAgora, quartaEquipeJogandoAgora]
}

for (var i = 0; i < fila.length; i++) {
	fila[i].onmouseover = function() {
		this.style.cursor = "pointer";
	}

	fila[i].onmouseout = function() {
		this.style.cursor = "default";
	}

	fila[i].onclick = function() {
		nomeEquipe = this.querySelector("p").innerText;
		imgEquipe = this.querySelector("img").getAttribute("src");

		var fundoPopup = document.getElementById("fundoPopup");
		var popupDadosEquipe = document.getElementById("popupDadosEquipe");
		var containerDadosEquipe = document.getElementById("containerDadosEquipe");

		var botaoOkDados = document.getElementById("botaoOkDados").querySelector("input");

		popupDadosEquipe.style.display = "block";
		fundoPopup.style.display = "block";

		popupDadosEquipe.querySelector("h4").innerText = "Informações da " + nomeEquipe;
		containerDadosEquipe.querySelector("figure").querySelector("img").src = imgEquipe;
		containerDadosEquipe.querySelector("figure").querySelector("img").style.width = "100%";
		containerDadosEquipe.querySelector("figure").querySelector("img").style.height = "100%";
		containerDadosEquipe.querySelector("#nomeEquipeDados").innerText = nomeEquipe;

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
}