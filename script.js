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


    //ajax
    $('#competencia').on('change', e => {

        let competencia = $(e.target).val()

        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`, //x-www-form-urlencoded
            success: dados => {console.log(dados)},
            error: erro => {console.log(erro)}

        })
        //método, url, dados , sucesso. erro
    })
})