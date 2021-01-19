const coin = {
    state: 0,
    flip: function() {
        // 1. Um ponto: Randomicamente configura a propriedade “estado” do 
        // seu objeto moeda para ser um dos seguintes valores:
        // 0 ou 1: use "this.state" para acessar a propriedade "state" neste objeto.
        this.state = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    },
    toString: function() {
        // 2. Um ponto: Retorna a string "Heads" ou "Tails", dependendo de como
        //  "this.state" está como 0 ou 1.
        if(this.state === 1){
            return "Heads"
        }else{
            return "Tails"
        }
    },
    toHTML: function() {
        // 3. Um ponto: Configura as propriedades do elemento imagem 
        // para mostrar a face voltada para cima ou para baixo dependendo
        // do valor de this.state está 0 ou 1.
        const image = document.createElement('img');
        if(this.state === 1){
            image.setAttribute("src", "cara.jpg")
        }else{
            image.setAttribute("src", "coroa.jpg")
        }
        image.setAttribute("width", "100");
        image.setAttribute("height", "100");        
        return image;
    }
 };
 
 function display20Flips() {
     // 4. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
    // mostrando o resultado como uma string na página. 
    // Depois de que seu loop terminar, retorne um array com o 
    // resultado de cada arremesso.
    let text;
    const results = [];
    
    for(let i = 0; i < 20; i++){
        coin.flip();
        results.push(coin.toString() + " ");
        text = document.createElement("div");
        text.innerHTML = results;
    }
    document.body.appendChild(text);
    document.body.appendChild
    return results;
 }
 
 function display20Images() {
    // 5. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
    // mostrando o resultado como uma imagem na página. 
    // Depois de que seu loop terminar, retorne um array com o 
    // resultado de cada arremesso.
    const results = [];
    for(let i = 0; i < 20; i++){
        coin.flip();
        results.push(coin.toString() + " ");
        document.body.appendChild(coin.toHTML());
        if(i == 9){
            document.body.appendChild(document.createElement('br'));
        }
    }
    return results;
 }
 

 display20Flips();
 display20Images()