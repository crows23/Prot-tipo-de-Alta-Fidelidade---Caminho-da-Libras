var botaoCentralizar = document.getElementById("botaoCentralizarTela");

$(document).ready(function() {
	$("#botaoZoom input").click(function() {
		if ($(this).attr("value") == "Zoom") {
			$(this).val("Zoom out");
			$(this).css("font-size", "14px");

			$("#botaoCentralizarTela").css("display", "block");

			$("#tabuleiro").animate({"zoom" : 2}, 800);
			$("#tabuleiro").draggable({
				containment: $("#tabuleiroZoom")
			});
		}
		else {
			$("#tabuleiro").css("top", "0");
			$("#tabuleiro").css("left", "0");
			$("#tabuleiro").css("transition", "top 0.5s ease, left 0.5s ease");
			$("#tabuleiro").animate({"zoom" : 1}, 800);

			$(this).val("Zoom");
			$(this).css("font-size", "16px");

			$("#tabuleiro").draggable("destroy");

			$("#botaoCentralizarTela").css("display", "none");
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
	});

	$("#botaoCentralizarTela input").mouseover(function() {
		$(this).css("cursor", "pointer");
	});

	$("#botaoCentralizarTela input").mouseout(function() {
		$(this).css("cursor", "default");
	});
});