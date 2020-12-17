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

document.getElementById('section').appendChild(torre1);
document.getElementById('section').appendChild(torre2);
document.getElementById('section').appendChild(torre3);


torre1.addEventListener('click', getDisco);
torre2.addEventListener('click', getDisco);
torre3.addEventListener('click', getDisco);

let disco;

<<<<<<< HEAD
function getDisco(e) {

    disco = e.currentTarget.lastElementChild;
    console.log(disco);
    if(disco !== null){
        torre1.removeEventListener('click', getDisco);
        torre2.removeEventListener('click', getDisco);
        torre3.removeEventListener('click', getDisco);
    
        torre1.addEventListener('click', setDisco);
        torre2.addEventListener('click', setDisco);
        torre3.addEventListener('click', setDisco);
=======
    torre2.addEventListener('click', setStart);
    function setStart(e) {
        e.currentTarget.appendChild(disco);
        console.log(disco);
        disco = null;       
>>>>>>> 23f43836fc9b785eb525ef8a19b733417625ebb6
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

}


    torre3.addEventListener('click', setStart);
    function setStart(e) {
        e.currentTarget.appendChild(disco);
        console.log(disco);
        disco=null;
    }

    torre2.addEventListener('click', getStart2);
    function getStart2(e) {
        disco2 = e.currentTarget.lastElementChild;
        console.log(disco2);
    }

    torre3.addEventListener('click', setStart2);
    function setStart2(e) {
        e.currentTarget.appendChild(disco2);
        console.log(disco2);
        disco2=null;
    }

    torre1.addEventListener('click', setStart);
    function setStart(e) {
        e.currentTarget.appendChild(disco2);
        console.log(disco2);
        disco2=null;
    }