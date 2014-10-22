$(document).ready(function(){
  chat();

});

function chat(){
  $("form").submit(function(){
    var chatInput = $(this).find("input:first").val();
    var id = $(this).attr('id')
    $('ul').append('<li id="' + id + '"> > ' + chatInput + '</li>');
    event.preventDefault();
    this.reset();
  })
}
