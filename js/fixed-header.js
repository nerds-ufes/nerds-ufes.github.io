$(document).ready(function(){
    // Verificar se não é a homepage antes de aplicar o header fixo
    if (!$('body').hasClass('homepage')) {
        // Sempre manter o header visível em páginas internas
        var $header = $("#nav");
        $header.addClass("headerFixed");
        
        // Forçar o header a ficar no topo com position fixed
        $header.css({
            'position': 'fixed !important',
            'top': '0',
            'left': '0',
            'width': '100%',
            'z-index': '1000',
            'background-color': 'rgb(0, 140, 255)',
            'box-shadow': '3px 3px 10px rgba(0,0,0,0.4)'
        });
        
        // Força a aplicação dos estilos imediatamente
        $header.get(0).style.setProperty('position', 'fixed', 'important');
        $header.get(0).style.setProperty('background-color', 'rgb(0, 140, 255)', 'important');
        
        $(window).scroll(function(){
            // Menu sempre visível independente do scroll
            $header.addClass("headerFixed");
        });
    }
});
