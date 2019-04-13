function fonte(e) {
	var elemento = $(".fonte");
	var fonte = parseInt(elemento.css('font-size'));
	
	e == 'a' ? fonte++ : fonte--;

	elemento.css("fontSize", fonte);
}