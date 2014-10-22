$(document).ready(function(){
  chat();

});

function chat(){
  $("form").submit(function(){
    var chatInput = $(this).find("input:first").val();
    $('ul').append('<li>' + chatInput + '</li>');
    event.preventDefault();
  })
}
