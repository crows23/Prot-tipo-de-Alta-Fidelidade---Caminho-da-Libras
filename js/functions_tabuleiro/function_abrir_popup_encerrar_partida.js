var botaoSair = document.getElementById("botaoSair").querySelector("input");

botaoSair.onclick = function() {
	var popupSair = document.getElementById("popupSair");
	var fundoPopup = document.getElementById("fundoPopup");

	var botaoSim = document.getElementById("botaoSimPopupSair").querySelector("input")
	var botaoNao = document.getElementById("botaoNaoPopupSair").querySelector("input")

	botaoSim.onclick = function() {
		popupSair.style.display = "none";
		fundoPopup.style.display = "none";

		window.location = "../index.html";
	}

	botaoNao.onclick = function() {
		popupSair.style.display = "none";
		fundoPopup.style.display = "none";
	}

	botaoSim.onmouseover = function() {
		this.style.cursor = "pointer";
	}

	botaoSim.onmouseout = function() {
		this.style.cursor = "default";
	}

	botaoNao.onmouseover = function() {
		this.style.cursor = "pointer";
	}

	botaoNao.onmouseout = function() {
		this.style.cursor = "default";
	}

	popupSair.style.display = "block";
	fundoPopup.style.display = "block";
}

botaoSair.onmouseover = function() {
	botaoSair.style.cursor = "pointer";
}

botaoSair.onmouseout = function() {
	botaoSair.style.cursor = "default";
}