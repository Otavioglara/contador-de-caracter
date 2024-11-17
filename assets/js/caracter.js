
const textoArea = document.getElementById('texto');
const contador = document.getElementById('contador');
const listaTextos = document.getElementById('listaTextos');
let textosSalvos = [];

textoArea.addEventListener('input', () => {
    const texto = textoArea.value;
    contador.textContent = `Caracteres: ${texto.length}`;
});

function salvarTexto() {
    const texto = textoArea.value.trim();
    if (texto) {
        textosSalvos.push(texto);
        const li = document.createElement('li');
        li.textContent = texto;
        listaTextos.appendChild(li);
        textoArea.value = '';
        contador.textContent = 'Caracteres: 0';
    }
}
