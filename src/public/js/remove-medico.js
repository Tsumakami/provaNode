let tabelaMedicos = document.querySelector('#medico');
tabelaMedicos.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let medicoId = elementoClicado.dataset.ref;
        console.log(medicoId);
        fetch(`http://localhost:3000/medicos/${medicoId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#medico_${medicoId}`);
                tr.remove();

            })
            .catch(erro => console.log(erro));

    }

});
