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

 



let move = null;
let disco = null;

torre1.addEventListener('click', Start);
function Start(e){    
    e.currentTarget;
    move = e.currentTarget.lastElementChild;
    console.log(move);
}

torre2.addEventListener('click', Start2);
function Start2(e){    
    e.currentTarget;
    disco = e.currentTarget;
    console.log(disco);
    disco.appendChild(move);
}

