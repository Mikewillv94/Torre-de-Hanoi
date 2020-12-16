 let a = document.createElement("a");
 a.style.backgroundColor = 'orange';
 a.style.height = '5%';
 a.style.width = '90%';
 a.style.borderRadius = "5px";
 a.style.border = "2px solid black"

 document.getElementById("torre1").appendChild(a);

 let a2 = document.createElement("a");
 a2.style.backgroundColor = 'blue';
 a2.style.height = '5%';
 a2.style.width = '70%';
 a2.style.borderRadius = "5px";
 a2.style.border = "2px solid black"

 document.getElementById("torre1").appendChild(a2);

 let a3 = document.createElement("a");
 a3.style.backgroundColor = 'yellow';
 a3.style.height = '5%';
 a3.style.width = '50%';
 a3.style.borderRadius = "5px";
 a3.style.border = "2px solid black";

 document.getElementById("torre1").appendChild(a3);

 let a4 = document.createElement("a");
 a4.style.backgroundColor = 'red';
 a4.style.height = '5%';
 a4.style.width = '30%';
 a4.style.borderRadius = "5px";
 a4.style.border = "2px solid black";

 document.getElementById("torre1").appendChild(a4);

let testeStart = document.getElementById('torre1');

testeStart.addEventListener('click',  Start);

function Start(event){
    console.log(event.currentTarget.lastElementChild);
}