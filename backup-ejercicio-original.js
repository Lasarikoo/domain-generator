let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.es', '.com', '.net'];

let dominios = [];

pronoun.forEach(pronombre => {
    adj.forEach(adjetivo => {
        noun.forEach(nombre => {
            ext.forEach(extension => {
                dominios.push(`${pronombre}${adjetivo}${nombre}${extension}`);
            });
        });
    });
});

dominios.forEach(dominio => {
    document.getElementById("resultados").innerText += `${dominio}\n`;
});
    
console.log(`Hola, ${dominios[0]} mundo`)