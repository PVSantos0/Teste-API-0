//botão de subir a tela
$('#topo').on('click', function(){
  $('html, body').animate({
    scrollTop: $('body').offset().top
  }, 1500);
});

