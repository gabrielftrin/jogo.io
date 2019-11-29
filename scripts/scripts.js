$(document).ready(function() {

	$("canvas").drawRect({
		fillStyle: "#000",
		x: 320,
		y: 240,
		width: 640,
		height: 480
	});

	$("canvas").drawImage({
		source: 'imagens/fundo.jpg',
		width: 640,
		height: 480,		
		x: 320,
		y: 240,
	});

});
