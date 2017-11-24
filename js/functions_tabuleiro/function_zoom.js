$(document).ready(function() {
	$("#botaoZoom input").click(function() {
		if ($(this).attr("value") == "Zoom") {
			$(this).val("Zoom out");

			$("div .container").css("display", "none");
			$("#botaoCentralizarTela").css("display", "block");

			$("#espacoBotoesOpcao").css("width", "68.097px");
			$("#espacoBotoesOpcao").css("height", "53px");
			$("#espacoBotoesOpcao").css("margin-top", "0px");
			$("#espacoBotoesOpcao").css("margin-left", "682.794px");


			$("#botaoPontos").css("display", "none");
			$("#botaoOpcoes").css("display", "none");
			$("#botaoAjuda").css("display", "none");

			if (nEquipes == 2) {
				$("#primeiraEquipeJogandoAgora").css("display", "none");
				$("#segundaEquipeJogandoAgora").css("display", "none");
			}
			else if (nEquipes == 3) {
				$("#primeiraEquipeJogandoAgora").css("display", "none");
				$("#segundaEquipeJogandoAgora").css("display", "none");
				$("#terceiraEquipeJogandoAgora").css("display", "none");
			}
			else {
				$("#primeiraEquipeJogandoAgora").css("display", "none");
				$("#segundaEquipeJogandoAgora").css("display", "none");
				$("#terceiraEquipeJogandoAgora").css("display", "none");
				$("#quartaEquipeJogandoAgora").css("display", "none");
			}

			$("#tabuleiro").animate({"zoom" : 2}, 800);

			$("#tabuleiro").draggable({
				containment: $("#tabuleiroZoom")
			});

			$("#tabuleiro").mousedown(function() {
				$("#botaoZoom").css("opacity", "0");
				$("#botaoSair").css("opacity", "0");
				$("#mostradorCasaAtual").css("opacity", "0");
				$("#botaoCentralizarTela").css("opacity", "0");

				$("#botaoZoom").css("transition", "opacity 0.5s ease");
				$("#botaoSair").css("transition", "opacity 0.5s ease");
				$("#mostradorCasaAtual").css("transition", "opacity 0.5s ease");
				$("#botaoCentralizarTela").css("transition", "opacity 0.5s ease");
			});

			$("#tabuleiro").mouseup(function() {
				$("#botaoZoom").css("opacity", "1");
				$("#botaoSair").css("opacity", "1");
				$("#mostradorCasaAtual").css("opacity", "1");
				$("#botaoCentralizarTela").css("opacity", "1");

				$("#botaoZoom").css("transition", "opacity 0.5s ease");
				$("#botaoSair").css("transition", "opacity 0.5s ease");
				$("#mostradorCasaAtual").css("transition", "opacity 0.5s ease");
				$("#botaoCentralizarTela").css("transition", "opacity 0.5s ease");
			});

		}
		else {
			$("#tabuleiro").css("top", "0");
			$("#tabuleiro").css("left", "0");
			$("#tabuleiro").css("transition", "top 0.5s ease, left 0.5s ease");
			$("#tabuleiro").animate({"zoom" : 1}, 800);
			$("#tabuleiro").draggable("destroy");
			$("#tabuleiro").off("mouseup");
			$("#tabuleiro").off("mousedown");

			$(this).val("Zoom");

			window.setTimeout(function() {
				$("#tabuleiro").css("transition", "");

				$("#botaoCentralizarTela").css("display", "none");
				$("div .container").css("display", "block");

				$("#espacoBotoesOpcao").css("width", "272.388px");
				$("#espacoBotoesOpcao").css("height", "33px");
				$("#espacoBotoesOpcao").css("margin-top", "735px");
				$("#espacoBotoesOpcao").css("margin-left", "1073.625px");

				$("#botaoPontos").css("display", "block");
				$("#botaoOpcoes").css("display", "block");
				$("#botaoAjuda").css("display", "block");

				if (nEquipes == 2) {
					$("#primeiraEquipeJogandoAgora").css("display", "block");
					$("#segundaEquipeJogandoAgora").css("display", "block");
				}
				else if (nEquipes == 3) {
					$("#primeiraEquipeJogandoAgora").css("display", "block");
					$("#segundaEquipeJogandoAgora").css("display", "block");
					$("#terceiraEquipeJogandoAgora").css("display", "block");
				}
				else {
					$("#primeiraEquipeJogandoAgora").css("display", "block");
					$("#segundaEquipeJogandoAgora").css("display", "block");
					$("#terceiraEquipeJogandoAgora").css("display", "block");
					$("#quartaEquipeJogandoAgora").css("display", "block");
				}
			}, 501);
		}
	});

	$("#botaoZoom input").mouseover(function() {
		$(this).css("cursor", "pointer");
	});

	$("#botaoZoom input").mouseout(function() {
		$(this).css("cursor", "default");
	});

	$("#botaoCentralizarTela input").click(function() {
		$("#tabuleiro").css("top", "0");
		$("#tabuleiro").css("left", "0");
		$("#tabuleiro").css("transition", "top 0.5s ease, left 0.5s ease");

		window.setTimeout(function() {
			$("#tabuleiro").css("transition", "");
		}, 501);
	});

	$("#botaoCentralizarTela input").mouseover(function() {
		$(this).css("cursor", "pointer");
	});

	$("#botaoCentralizarTela input").mouseout(function() {
		$(this).css("cursor", "default");
	});
});
