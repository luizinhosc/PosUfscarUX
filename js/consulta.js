
function login(){
	window.location = 'em-construcao.html';
}

function pesquisa(){

	var cidade = $('input[name="cidade"]').val();
	var data = $('input[name="data-consulta"]').val();

	console.log(data);

	if (cidade == 'São Carlos' || cidade == 'são carlos') {
		window.location = 'consulta_SaoCarlos.html';
	} else {
		if (data == '12/04/2019') {
			window.location = 'consulta_Data.html';
		} else {
			$("#msgPesquisa").css("display", "block");
		}
	}
}


function mensagem(){
	$("#msg").css("display", "block");
}