var imported = document.createElement('script');
imported.src = 'pontos.js';
document.head.appendChild(imported);
function abrirPopupPergunta(dificuldade, equipeJogandoAgora, indice) {
	var fundoPopup = document.getElementById("fundoPopup");
	var popupPergunta = document.getElementById("popupPergunta");

	var informacaoPergunta = document.getElementById("informacaoPergunta").querySelectorAll("p");
	var nomeEquipe = document.getElementById("popupPergunta").querySelectorAll("h4")[0];

	var textoPergunta = document.getElementById("textoPergunta").querySelector("input");
	var conteudoPergunta = document.getElementById("textoPergunta").querySelector("p");

	var botaoPassarVez = document.getElementById("botaoPassouAVez").querySelector("input");
	var botaoErrou = document.getElementById("botaoErrou").querySelector("input");
	var botaoAcertou = document.getElementById("botaoAcertou").querySelector("input");

	var fundoPopup2 = document.getElementById("fundoPopup2");

	fundoPopup.style.display = "block";
	popupPergunta.style.display = "block";

	informacaoPergunta[1].innerText = dificuldade;
	nomeEquipe.innerText = "Pergunta para a " + window.localStorage.getItem("nomeEquipeOrdenado" + equipeJogandoAgora);

	textoPergunta.oninput = function() {
		conteudoPergunta.innerText = this.value;
	}

	botaoPassarVez.onclick = function() {
		var popupPassarVez = document.getElementById("popupPassarAVez");

		var botaoSim = document.getElementById("botaoSim").querySelector("input");
		var botaoNao = document.getElementById("botaoNao").querySelector("input");

		botaoSim.onclick = function () {
			popupPassarVez.style.display = "none";
			fundoPopup2.style.display = "none";

			fundoPopup.style.display = "none";
			popupPergunta.style.display = "none";

			mudarEquipeJogandoAgora();
		}

		botaoNao.onclick = function () {
			popupPassarVez.style.display = "none";
			fundoPopup2.style.display = "none";
		}

		botaoSim.onmouseover = function () {
			this.style.cursor = "pointer";
		}

		botaoNao.onmouseover = function () {
			this.style.cursor = "pointer";
		}

		botaoSim.onmouseout = function () {
			this.style.cursor = "default";
		}

		botaoNao.onmouseout = function () {
			this.style.cursor = "default";
		}

		popupPassarVez.style.display = "block";
		fundoPopup2.style.display = "block";
	}

	botaoErrou.onclick = function() {
		var popupRespostaErrada = document.getElementById("popupRespostaErrada");
		var botaoOkErrou = document.getElementById("botaoOkErrou").querySelector("input");

		popupRespostaErrada.style.display = "block";
		fundoPopup2.style.display = "block";

		botaoOkErrou.onclick = function() {
			popupRespostaErrada.style.display = "none";
			fundoPopup2.style.display = "none";

			fundoPopup.style.display = "none";
			popupPergunta.style.display = "none";

			var quantidadeCasas = getRandomInt(0, 3);

			moverPinoTras(quantidadeCasas, equipeJogandoAgora);
			mudarEquipeJogandoAgora();
		}

		botaoOkErrou.onmouseover = function() {
			this.style.cursor = "pointer";
		}

		botaoOkErrou.onmouseout = function() {
			this.style.cursor = "default";
		}
	}

	botaoAcertou.onclick = function() {
		var popupRespostaCorreta = document.getElementById("popupRespostaCorreta");
		var botaoOkAcertou = document.getElementById("botaoOkAcertou").querySelector("input");

		popupRespostaCorreta.style.display = "block";
		fundoPopup2.style.display = "block";

		botaoOkAcertou.onclick = function() {
			popupRespostaCorreta.style.display = "none";
			fundoPopup2.style.display = "none";

			fundoPopup.style.display = "none";
			popupPergunta.style.display = "none";

			var quantidadeCasas = indice;
			addPontos(equipeJogandoAgora, indice*10);
			moverPinoFrente(quantidadeCasas, equipeJogandoAgora);
			mudarEquipeJogandoAgora();
		}

		botaoOkAcertou.onmouseover = function() {
			this.style.cursor = "pointer";
		}

		botaoOkAcertou.onmouseout = function() {
			this.style.cursor = "default";
		}
	}

	botaoPassarVez.onmouseover = function() {
		this.style.cursor = "pointer";
	}

	botaoErrou.onmouseover = function() {
		this.style.cursor = "pointer";
	}

	botaoAcertou.onmouseover = function() {
		this.style.cursor = "pointer";
	}

	botaoPassarVez.onmouseout = function() {
		this.style.cursor = "default";
	}

	botaoErrou.onmouseout = function() {
		this.style.cursor = "default";
	}

	botaoAcertou.onmouseout = function() {
		this.style.cursor = "default";
	}
}