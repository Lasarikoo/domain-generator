let palabras = [];
let dominios = [];
let ext = ['.es', '.com', '.net', '.io', '.shop', '.cat', '.arg', '.co'];

const input = document.getElementById("palabras");
const button = document.getElementById("enviarPalabra");
const resultados = document.getElementById("resultados");

button.addEventListener("click", () => {
    const inputPalabra = input.value.trim();

    if(inputPalabra) {
        palabras.push(inputPalabra.toLowerCase())
        if (palabras.length >= 3) {
            palabras.forEach(palabra => {
                let numero = Math.floor(Math.random() * palabras.length);
                let numero2 = Math.floor(Math.random() * palabras.length);
                let numero3 = Math.floor(Math.random() * palabras.length);
                let numeroEx = Math.floor(Math.random() * ext.length);
                dominios.push(`${palabras[numero]}${palabras[numero2]}${palabras[numero3]}${ext[numeroEx]}`);
            })
        } else if (palabras.length < 3 && palabras.length > 1) {
            palabras.forEach(palabra => {
                let numero = Math.floor(Math.random() * palabras.length);
                let numero2 = Math.floor(Math.random() * palabras.length);
                let numeroEx = Math.floor(Math.random() * ext.length);
                dominios.push(`${palabras[numero]}${palabras[numero2]}${ext[numeroEx]}`);
            })
        } else {
            let numeroEx = Math.floor(Math.random() * ext.length);
            dominios.push(`${palabras}${ext[numeroEx]}`)
        }
        resultado();
        input.value = "";
    } else {
        alert("Escribe una palabra para añadirla.");
    }
});

function resultado() {
    resultados.innerHTML = "";
    dominios.forEach(dominio => {
        let html = `<div class="d-flex justify-content-center border-top align-items-center">
                            <div class="col-5">
                                <p class="mt-3 text-center">${dominio}</p>
                            </div>
                            <div class="col-5 d-flex justify-content-center align-items-center">
                                <a href="https://www.godaddy.com/es-es/domainsearch/find?domainToCheck=${dominio}" target="_blank"><button class="btn btn-danger">Comprar</button></a>
                            </div>
                        </div>`;

        resultados.innerHTML += html;
    })
}