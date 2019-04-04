// !(NOT)
// &&(AND)
/*
    true && true = true
    true && false = false
    false && false = false
*/
// ||(OR)
/* 
    true || true = true
    true || false = true
    false || false = false
*/

console.log('Hello world!');

// let nomeDoUsuario = 'Felipe';
// let idade = 24;
// let vivo = false;
// let vetor = ['oi', 'felipe', 'carlos', 258, -327, nomeDoUsuario, false];
// let usuario = {
//     nome: 'Felipe',
//     idade: 24,
//     vivo: false
// };
const paragrafo = document.querySelector('p');
const paragrafoAzul = document.querySelector('.azul');

function deixarParagrafoAzul() {
    if (paragrafoAzul.style.color == 'blue') {
        paragrafoAzul.style.color = 'red';
    }
    else if (paragrafoAzul.style.color == 'red') {
        paragrafoAzul.style.color = 'green';
    }
    else if (paragrafoAzul.style.color != '') {
         paragrafoAzul.style.color = '';
    }
    else {
        paragrafoAzul.style.color = 'blue';
    }
}

function definirCor(cor) {
    paragrafo.style.color = cor;
}

function soma(a, b) {
    return a + b;
}

paragrafoAzul.onmouseenter = deixarParagrafoAzul;
paragrafoAzul.onmouseleave = deixarParagrafoAzul;