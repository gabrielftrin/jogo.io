
$(document).ready(function() {

	setInterval(renderizarCena, 30);

	movimentarPersonagem();

});

var playerx = 380, playery = 240;
var velocidade = 16;
//600 -10
//430 100

function renderizarCena() {

	$("canvas").clearCanvas();

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

function movimentarPersonagem() {

	$(document).on("keydown", function(event) {

		if(event.key == "ArrowDown") playery += velocidade;
		else if(event.key == "ArrowUp") playery -= velocidade;
		else if(event.key == "ArrowLeft") playerx -= velocidade;
		else if(event.key == "ArrowRight") playerx += velocidade;
	
	});
}

/*
class Personagem {
	constructor(x, y, velx, vely, width, height, src) {
		this.x = x;
		this.y = y;
		this.velx = velx;
		this.vely = vely;
		this.width = width;
		this.height = height;
		this.src = src;
	}
}

var personagem;

$(document).ready(function() {

	personagem = new Personagem(320, 240, 3, 0, 16, 16, 'imagens/aluno.png');
	setInterval(renderScene, 30);
	setInterval(updateObject, 30);
});

function renderScene() {

	$("canvas").clearCanvas();

	$("canvas").drawImage({
		source: 'imagens/ondina.png',
		width: 760,
		height: 480,		
		x: 380,
		y: 240,
	});

	$("canvas").drawImage({
		source: personagem.src,
		x: personagem.x,
		y: personagem.y
	});
}

function updateObject() {

	if(personagem.y > $("canvas")[0].height - personagem.height && personagem.y > 0)
		personagem.vely = personagem.vely * -0.9;
	else
		personagem.vely = personagem.vely + 1;

	personagem.x += personagem.velx;
	personagem.y += personagem.vely;

	if(personagem.x > $("canvas")[0].width) {
		personagem.velx *= -1;
		personagem.x += personagem.velx;
	}

	if(Math.abs(personagem.vely) < 0.075) {
		personagem.vely = 0;
		personagem.velx = 0;
	}
}
*/