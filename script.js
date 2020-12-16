 let torre1 = document.createElement("div")
 torre1.classList.add("item");

 let torre2 = document.createElement("div")
 torre2.classList.add("item");

 let torre3 = document.createElement("div")
 torre3.classList.add("item");

 document.getElementById('section').appendChild(torre1);
 document.getElementById('section').appendChild(torre2);
 document.getElementById('section').appendChild(torre3);

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


 


//let testeStart = document.getElementById(torre1);

//testeStart.addEventListener('click',  Start);

//function Start(event){
//    console.log(event.currentTarget.lastElementChild);
//}