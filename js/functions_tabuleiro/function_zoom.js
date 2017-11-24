// $(document).ready(function() {
// 	$("#botaoZoom input").click(function() {
// 		if ($(this).attr("value") == "Zoom") {
// 			$(this).val("Zoom out");
// 			$(this).css("font-size", "14px");

// 			$("div .container").css("display", "none");

// 			if (nEquipes == 2) {
// 				$("#primeiraEquipeJogandoAgora").css("display", "none");
// 				$("#segundaEquipeJogandoAgora").css("display", "none");
// 			}
// 			else if (nEquipes == 3) {
// 				$("#primeiraEquipeJogandoAgora").css("display", "none");
// 				$("#segundaEquipeJogandoAgora").css("display", "none");
// 				$("#terceiraEquipeJogandoAgora").css("display", "none");
// 			}
// 			else {
// 				$("#primeiraEquipeJogandoAgora").css("display", "none");
// 				$("#segundaEquipeJogandoAgora").css("display", "none");
// 				$("#terceiraEquipeJogandoAgora").css("display", "none");
// 				$("#quartaEquipeJogandoAgora").css("display", "none");
// 			}

// 			$("#tabuleiro").animate({"zoom" : 2}, 800);
// 			$("#tabuleiro").draggable({
// 				containment: $("#tabuleiroZoom"),
// 				start: $("#botaoCentralizarTela").css("display", "none"),
// 				stop: $("#botaoCentralizarTela").css("display", "block")
// 			});
// 		}
// 		else {
// 			$("#tabuleiro").css("top", "0");
// 			$("#tabuleiro").css("left", "0");
// 			$("#tabuleiro").css("transition", "top 0.5s ease, left 0.5s ease");
// 			$("#tabuleiro").animate({"zoom" : 1}, 800);
// 			$("#tabuleiro").draggable("destroy");

// 			$(this).val("Zoom");
// 			$(this).css("font-size", "16px");

// 			$("#botaoCentralizarTela").css("display", "none");

// 			window.setTimeout(function() {
// 				$("#tabuleiro").css("transition", "");

// 				$("div .container").css("display", "block");

// 				if (nEquipes == 2) {
// 					$("#primeiraEquipeJogandoAgora").css("display", "block");
// 					$("#segundaEquipeJogandoAgora").css("display", "block");
// 				}
// 				else if (nEquipes == 3) {
// 					$("#primeiraEquipeJogandoAgora").css("display", "block");
// 					$("#segundaEquipeJogandoAgora").css("display", "block");
// 					$("#terceiraEquipeJogandoAgora").css("display", "block");
// 				}
// 				else {
// 					$("#primeiraEquipeJogandoAgora").css("display", "block");
// 					$("#segundaEquipeJogandoAgora").css("display", "block");
// 					$("#terceiraEquipeJogandoAgora").css("display", "block");
// 					$("#quartaEquipeJogandoAgora").css("display", "block");
// 				}
// 			}, 501);
// 		}
// 	});

// 	$("#botaoZoom input").mouseover(function() {
// 		$(this).css("cursor", "pointer");
// 	});

// 	$("#botaoZoom input").mouseout(function() {
// 		$(this).css("cursor", "default");
// 	});

// 	$("#botaoCentralizarTela input").click(function() {
// 		$("#tabuleiro").css("top", "0");
// 		$("#tabuleiro").css("left", "0");
// 		$("#tabuleiro").css("transition", "top 0.5s ease, left 0.5s ease");

// 		window.setTimeout(function() {
// 			$("#tabuleiro").css("transition", "");
// 		}, 501);
// 	});

// 	$("#botaoCentralizarTela input").mouseover(function() {
// 		$(this).css("cursor", "pointer");
// 	});

// 	$("#botaoCentralizarTela input").mouseout(function() {
// 		$(this).css("cursor", "default");
// 	});
// });