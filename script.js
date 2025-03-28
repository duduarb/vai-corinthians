// Elementos
const videoPrincipal = document.getElementById('video-principal');
const paginas = document.querySelectorAll('.pagina');

// Navegação entre páginas
function proximaPagina(numeroPagina) {
    esconderTodasPaginas();
    paginas[numeroPagina].classList.remove('escondido');
    
    if (numeroPagina === 1) {
        videoPrincipal.play().catch(error => {
            console.log("Erro ao reproduzir o vídeo:", error);
        });
    } else if (numeroPagina === 2) {
        videoPrincipal.pause();
    }
}

function voltarPagina(numeroPagina) {
    esconderTodasPaginas();
    paginas[numeroPagina].classList.remove('escondido');
    
    if (numeroPagina === 0) {
        videoPrincipal.play().catch(error => {
            console.log("Erro ao reproduzir o vídeo:", error);
        });
    }
}

function irParaInicio() {
    esconderTodasPaginas();
    paginas[0].classList.remove('escondido');
    videoPrincipal.play().catch(error => {
        console.log("Erro ao reproduzir o vídeo:", error);
    });
}

function esconderTodasPaginas() {
    paginas.forEach(pagina => pagina.classList.add('escondido'));
}

// Iniciar vídeo quando a página carregar
window.addEventListener('load', () => {
    videoPrincipal.play().catch(error => {
        console.log("Erro ao reproduzir o vídeo:", error);
    });
});