$(document).ready(function() {

	setInterval(renderizarCena, 30);
	
	$(document).on("keydown", function(event) {

		if(event.key == "ArrowDown") playery += velocidade;
		else if(event.key == "ArrowUp") playery -= velocidade;
		else if(event.key == "ArrowLeft") playerx -= velocidade;
		else if(event.key == "ArrowRight") playerx += velocidade;
	
	});

});

var playerx = 380, playery = 240;
var velocidade = 16;

function renderizarCena() {

	$("canvas").clearCanvas();

	$("canvas").drawRect({
		fillStyle: "#000",
		x: 380,
		y: 240,
		width: 640,
		height: 480
	});

	$("canvas").drawImage({
		source: 'imagens/ondina.png',
		width: 760,
		height: 480,		
		x: 380,
		y: 240,
	});
	
	$("canvas").drawImage({
		source: 'imagens/aluno.png',
		width: 70,
		height: 100,
		x: playerx,
		y: playery
	});
	
}