$(document).ready(() => {
	$('#documentacao').on('click', () => {
        //$('#pagina').load('documentacao.html')
        $.get('documentacao.html', data => {
            $('#pagina').html(data)
        })
    })

    $('#suporte').on('click', () => {
        //$('#pagina').load('suporte.html')
        $.get('suporte.html', data => {
            $('pagina').html(data)
        })
    })
})