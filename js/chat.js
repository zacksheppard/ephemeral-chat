$(document).ready(function(){
  chat();
  fadeOut();
});

function chat(){
  $("form").submit(function(){
    var chatInput = $(this).find("input:first").val();
    var id = $(this).attr('id')
    $('ul').append('<li id="' + id + '" > > ' + chatInput + '</li>');
    event.preventDefault();
    this.reset();
  })
}

function fadeOut(){
  $("li").after(function(){
    $(this).hide(4000);
  })
  
}
