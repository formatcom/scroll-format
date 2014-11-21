```
Author       : Vinicio Valbuena.
c.i          : 19987187
proyecto     : scroll-format
```

Agregar librerias Scroll
```
<script type="text/javascript" src="js/scroll-format-min/eventos.min.js"></script>
<script type="text/javascript" src="js/scroll-format-min/mouse.min.js"></script>
<script type="text/javascript" src="js/scroll-format-min/scroll.min.js"></script>
```

Crear Scroll
```
<div id="visor">
    <div id="contexto"></div>
</div>
<div id="vScroll">
    <div id="scroll"></div>
</div>
```

Se debe asignar un tamaño al visor
```
<style>
    #visor{
        width: 400px;
        height: 400px;
    }
</style>
```

Configurar Scroll
```
//Parametros principales: 'visor', 'contexto', 'vScroll', 'scroll', velocidad
//Parametros: contenedor scroll, color del contenedor, tamaño del scroll, color del scroll
window.onload=function(){
    scroll = new scroll('visor', 'contexto', 'vScroll', 'scroll', 200);
    scroll.load('10px', '#000', '8px', '#FFF');
}
```