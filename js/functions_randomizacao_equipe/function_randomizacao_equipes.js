var nEquipes = window.localStorage.getItem("nEquipes");
var figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
var divs = document.getElementById("espaco_informacoes").getElementsByClassName("col-md-7");

var ordem = [];
var nomeEquipes = [];
var imgEquipes = [];

if (window.localStorage.getItem("equipesFormadas") == "true") {
	while (ordem.length < nEquipes) {
		var indice = getRandomInt(0, nEquipes);
		if (ordem.length != 0) {
			var igual = false;
			for (var i = 0; i < ordem.length; i++) {
				if (ordem[i] == indice) {
					igual = true;
					break;
				}
			}
			if (igual == false) {
				ordem.push(indice);
			}
		}
		else {
			ordem.push(indice);
		}
	}

	for (var i = 0; i < nEquipes; i++) {
		var nomeEquipe = window.localStorage.getItem("nomeEquipe"+(ordem[i]));
		var imgEquipe = window.localStorage.getItem("caminhoImagemEquipe"+(ordem[i]));

		nomeEquipes[i] = nomeEquipe;
		imgEquipes[i] = imgEquipe;
	}
	window.localStorage.setItem("equipesFormadas", false);
}

if (nEquipes == 2) {
	figures[2].style.display = "none";
	divs[2].style.display = "none";
	figures[3].style.display = "none";
	divs[3].style.display = "none";
}
else if (nEquipes == 3) {
	figures[3].style.display = "none";
	divs[3].style.display = "none";
}

for (var i = 0; i < nEquipes; i++) {
	if (window.localStorage.getItem("caminhoImagemOrdenado" + (i+1)) != null) {
		figures[i].querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado" + (i+1));
		figures[i].querySelector("img").style.width = "100%";
		figures[i].querySelector("img").style.height = "100%";
		divs[i].getElementsByClassName("nomeEquipe").item("innerText").innerText = window.localStorage.getItem("nomeEquipeOrdenado" + (i+1));
	}
	else {
		figures[i].querySelector("img").src = imgEquipes[i];
		figures[i].querySelector("img").style.width = "100%";
		figures[i].querySelector("img").style.height = "100%";
		divs[i].getElementsByClassName("nomeEquipe").item("innerText").innerText = nomeEquipes[i];
	}
}

for (var i = 0; i < nEquipes; i++) {
	if (window.localStorage.getItem("caminhoImagemOrdenado" + (i+1)) == null) {
		window.localStorage.setItem("caminhoImagemOrdenado" + (i+1), figures[i].querySelector("img").getAttribute("src"));
		window.localStorage.setItem("nomeEquipeOrdenado" + (i+1), divs[i].getElementsByClassName("nomeEquipe").item("innerText").innerText);
	}
}

window.localStorage.setItem("equipeJogandoAgora", 1);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}