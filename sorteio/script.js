function sortear(){
    let np = pessoas.length - 1;
    let ns = Math.round(Math.random() * np);
    document.getElementById("resultado").innerHTML = pessoas[ns];
}


let pessoas =["Igor","Jose","Marcos","Pamela","Wallace","Caio","Lucas"
                ,"Rafael","Larissa","Ana"];