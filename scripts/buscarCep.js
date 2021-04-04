function preencherCampos(resp) {
	document.querySelector('#endereco').value = resp.logradouro
	document.querySelector('#complemento').value = resp.complemento
	document.querySelector('#bairro').value = resp.bairro
	document.querySelector('#cidade').value = resp.localidade
	document.querySelector('#estado').value = resp.uf
}

function consultarCep() {
	let xhr = new XMLHttpRequest()
	let cep = document.querySelector('#cep').value.replace('-','')
	let url = `https://viacep.com.br/ws/${cep}/json/`
	xhr.open('GET', url, true)
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if(xhr.status == 200) {
				preencherCampos(JSON.parse(xhr.responseText))
			}
		}
	}
	xhr.send()
}

document.querySelector('#btn-buscar').addEventListener('click', event => {
	event.preventDefault()
	consultarCep()
})