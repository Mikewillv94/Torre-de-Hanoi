let torre1 = document.createElement("div")
torre1.classList.add("item");

let torre2 = document.createElement("div")
torre2.classList.add("item");

let torre3 = document.createElement("div")
torre3.classList.add("item");

let a = document.createElement("div");
a.classList.add("discoUm");
torre1.appendChild(a);

let a2 = document.createElement("div");
a2.classList.add("discoDois");
torre1.appendChild(a2);

let a3 = document.createElement("div");
a3.classList.add("discoTres");
torre1.appendChild(a3);

let a4 = document.createElement("div");
a4.classList.add("discoQuatro");
torre1.appendChild(a4);

let subtitulo = document.createElement('h2');
subtitulo.innerHTML = 'As regras são:';

let arrRegras = ["Movimentar uma só peça (disco) de cada vez.", "Uma peça maior não pode ficar acima de uma menor.", "Não é permitido movimentar uma peça que esteja abaixo de outra."]
let lista = document.createElement('ol');
for (let i = 0; i < arrRegras.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = arrRegras[i];
    lista.appendChild(li);
}

let box = document.createElement('div');
box.classList.add("box");

let erro = document.createElement("p")
erro.classList.add("erro");
erro.innerHTML = "Jogada Invalida <br> Regra 2."
box.appendChild(erro);

let botao = document.createElement("button");
botao.onclick = "reset";
botao.id = 'button';
botao.innerHTML = "Reiniciar";
box.appendChild(botao);


document.getElementById('section').appendChild(torre1);
document.getElementById('section').appendChild(torre2);
document.getElementById('section').appendChild(torre3);
document.body.appendChild(subtitulo);
document.body.appendChild(lista);
document.body.appendChild(box);


torre1.addEventListener('click', getDisco);
torre2.addEventListener('click', getDisco);
torre3.addEventListener('click', getDisco);

let disco;

function getDisco(e) {

    disco = e.currentTarget.lastElementChild;

    if (disco !== null) {
        torre1.removeEventListener('click', getDisco);
        torre2.removeEventListener('click', getDisco);
        torre3.removeEventListener('click', getDisco);

        torre1.addEventListener('click', setDisco);
        torre2.addEventListener('click', setDisco);
        torre3.addEventListener('click', setDisco);
    }
}

function setDisco(e) {

    e.currentTarget.appendChild(disco);

    torre1.removeEventListener('click', setDisco);
    torre2.removeEventListener('click', setDisco);
    torre3.removeEventListener('click', setDisco);

    torre1.addEventListener('click', getDisco);
    torre2.addEventListener('click', getDisco);
    torre3.addEventListener('click', getDisco);

    arr = e.currentTarget.children;
    if (e.currentTarget.childElementCount > 1) {
        arr = e.currentTarget.children;
        if (arr[arr.length - 1].clientWidth > arr[arr.length - 2].clientWidth) {
            box.style.display = 'block';
            erro.style.display = 'block';
            botao.style.display = 'inline-block'
        }
    }
    if (e.currentTarget.childElementCount > 3 && e.currentTarget !== torre1) {
        erro.innerHTML = "Você Ganhou !"
        box.appendChild(erro);
        botao.innerHTML = "Jogar novamente";
        box.appendChild(botao);
        erro.style.display = 'block';
        box.style.display = 'block';
        botao.style.display = 'inline-block'
    }
    document.getElementsByTagName('button').onclick = function () {
        document.location.reload(true);
    }

}

document.getElementById('button').onclick = function(){
    document.location.reload(true);
}




