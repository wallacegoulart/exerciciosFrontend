function loaded(){
    let t = document.getElementById("titulo");
   
    t.addEventListener("mouseover", mudarText);
    t.addEventListener("mouseout", mudarOut);
}

function mudarText(){
    this.innerHTML = "Wallace Goulart";
}

function mudarOut(){
    this.innerHTML = "Wallace Goulart de Castro";
}