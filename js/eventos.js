function eventos(){}

eventos.prototype.agregarEvento = function (elemento, nombreEvento, funtion){
    if(elemento.addEventListener){
        //navegadores de verdad
        elemento.addEventListener(nombreEvento, funtion, false);
    }else if(elemento.attachEvent){
        //internet explorer xD...
        elemento.attachEvent(nombreEvento, funtion, false);
    }
}