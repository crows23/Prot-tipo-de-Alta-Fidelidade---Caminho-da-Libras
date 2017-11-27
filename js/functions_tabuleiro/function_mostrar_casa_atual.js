window.setInterval(function() {
	equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");
	mostrarCasaAtual(equipeJogandoAgora)
}, 100);

function mostrarCasaAtual(equipeJogandoAgora) {
	var mostradorCasa = document.getElementById("mostradorCasaAtual").querySelector("img");
	var atualEquipe = (equipeJogandoAgora-1);
	var indiceDivAtual;

	for (var i = 0; i < divs.length; i++) {
		var figureMarginLeftSplit = figures[atualEquipe].style.marginLeft.split("px");
		var figureMarginTopSplit = figures[atualEquipe].style.marginTop.split("px");

		var divMarginLeftSplit = window.getComputedStyle(divs[i]).marginLeft.split("px");
		var divMarginTopSplit = window.getComputedStyle(divs[i]).marginTop.split("px");

		if (nEquipes == 2) {
			if (i != 0 && i != (divs.length - 1)) {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {

					indiceDivAtual = i;
					break;
				}
			}

			else {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {

					indiceDivAtual = i;
					break;
				}
			}
		}

		else if (nEquipes == 3) {
			if (i != 0 && i != (divs.length - 1)) {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 24) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {

					indiceDivAtual = i;
					break;
				}
			}
			else {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 31) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {

					indiceDivAtual = i;
					break;
				}
			}
		}

		else if (nEquipes == 4) {
			if (i != 0 && i != (divs.length - 1)) {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {
					
					indiceDivAtual = i;
					break;
				}
			}
			else {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {
					
					indiceDivAtual = i;
					break;
				}
			}
		}
	}

	if (indiceDivAtual != 0 && indiceDivAtual != 25){
		mostradorCasa.alt = indiceDivAtual;
	}
	else if (indiceDivAtual == 0) {
		mostradorCasa.alt = "Início";
	}
	else {
		mostradorCasa.alt = "Chegada";
	}

	return mostradorCasa.alt;
}