function scroll(idVisor, idContexto, idVScroll, idScroll, velocidad){
    
    mouse.call(this, mouse);
    
    this.visor = document.getElementById(idVisor);
    this.contexto = document.getElementById(idContexto);
    this.vScroll = document.getElementById(idVScroll);
    this.scroll = document.getElementById(idScroll);
    this.max = 0;
    this.desplazar = 0;
    this.velocidad = 1000/velocidad;
    this.intervalor = '';
    
    this.eventos();
}

scroll.prototype = Object.create(mouse.prototype);

scroll.prototype.loadVScroll=function(Ancho, color){
    this.vScroll.style.width = Ancho;
    this.vScroll.style.background = color;
    this.vScroll.style.height = this.visor.offsetHeight+'px';
    this.vScroll.style.marginLeft = parseFloat(this.visor.offsetWidth+3)+'px';
    this.vScroll.style.position = 'fixed';
};

scroll.prototype.loadVisor=function(){
    this.visor.style.overflowY = 'hidden';
    this.visor.style.cssFloat="left";
};

scroll.prototype.mouseDown=function(){
    self = this;
    this.intervalo = window.setInterval("self.loop()",this.velocidad);
}

scroll.prototype.moveScroll=function(e){
    var delta = 0;
    // normalize the delta
    if (e.wheelDelta) {
        // IE and Opera
        delta = e.wheelDelta / 60;
    } else if (e.detail) {
        // W3C
        delta = -e.detail / 2;
    }
    self.desplazar = self.scroll.offsetTop + (-delta*3);
    self.moverScroll(self.desplazar);
}

scroll.prototype.loop = function(){
    self.Desplazar(self.mouse.direccion);
    if (!self.mouse.click)
        clearInterval(self.intervalo);
}


scroll.prototype.loadScroll=function(Ancho, color){
    this.scroll.style.width = Ancho;
    this.scroll.style.height = parseFloat((this.visor.offsetHeight*this.visor.offsetHeight)/this.contexto.offsetHeight)+'px';
    this.scroll.style.background = color;
    this.scroll.style.cursor = 'pointer';
    this.scroll.style.margin = '0 auto';
    this.max = this.visor.offsetHeight - this.scroll.offsetHeight;
};

scroll.prototype.load=function(vAncho, vColor, sAncho, sColor){
    if (this.visor.offsetHeight < this.contexto.offsetHeight){
        this.loadVisor();
        this.loadVScroll(vAncho, vColor);
        this.loadScroll(sAncho, sColor);
    }
};

scroll.prototype.Desplazar=function(direccion){
    if (direccion == -1)
        this.desplazar--;
    else if (direccion == 1)
        this.desplazar++;
    this.moverScroll(this.desplazar);
};

scroll.prototype.moverScroll=function(valor){
    if (valor < 0)
        valor = 0;
    else if(valor > this.max)
        valor = this.max
    this.desplazar = valor;
    this.scroll.style.marginTop = valor+'px';
    this.contexto.style.marginTop = parseFloat(valor*-1)+'px';
};