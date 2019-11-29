$(document).ready(function() {

	$("canvas").drawRect({
		fillStyle: "#000",
		x: 320,
		y: 240,
		width: 760,
		height: 480
	});

	$("canvas").drawImage({
		source: 'imagens/ondina.png',
		width: 760,
		height: 480,		
		x: 320,
		y: 240,
	});

});
