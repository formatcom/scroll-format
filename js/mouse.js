function mouse(){
    this.mouse = {
        x: 0,
        y: 0,
        click: 0,
        direccion: 0
    };
}

mouse.prototype = Object.create(eventos.prototype);


mouse.prototype.mouseDown = function(e){};

mouse.prototype.mouseUp = function(e){};

mouse.prototype.moveScroll = function(e){};

mouse.prototype.eventos=function(){
    
    self = this;
    
    //test mouseClick
    this.agregarEvento(this.scroll,"mousedown",function(e){
        self.mouse.click = 1;
        self.mouseDown(e);
    });
    
    this.agregarEvento(document,"mouseup",function(e){
        self.mouse.click = 0;
        self.mouseUp(e);
    });
    
    //test mouseMove
    this.agregarEvento(document,"mousemove",function(e){
        if (self.mouse.y < e.clientY)
            self.mouse.direccion = 1;
        else if (self.mouse.y > e.clientY)
            self.mouse.direccion = -1;
        else
            self.mouse.direccion = 0;
        self.mouse.x = e.clientX;
        self.mouse.y = e.clientY;
    });
    
    //test mouseScroll
    this.agregarEvento(this.visor,"DOMMouseScroll",function(e){
        self.moveScroll(e);
    });
    
    this.visor.onmousewheel = this.moveScroll;
};