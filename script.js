
let servicio1 = document.querySelector("#icono1 .iconos");
let servicio2 = document.querySelector("#icono2 .iconos");
let servicio3 = document.querySelector("#icono3 .iconos");

let displayBlock = function(string){
    document.querySelector(string).style.display = "block";
}
let displayNone = function(string){
    document.querySelector(string).style.display = "none";
}

servicio1.onmouseover = function(){
    displayBlock("#icono1 p");
}
servicio1.onmouseleave = function(){
    displayNone("#icono1 p");
}    
servicio2.onmouseover = function(){
    displayBlock("#icono2 p");
}
servicio2.onmouseleave = function(){
    displayNone("#icono2 p");
}
    
servicio3.onmouseover = function(){
    displayBlock("#icono3 p");
}
servicio3.onmouseleave = function(){
    displayNone("#icono3 p");
}


