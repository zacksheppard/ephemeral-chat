$(document).ready(function(){
  chat();

});

function chat(){
  $(".form").submit(function(){
    $('ul').append('<li>' + $('.form input').val() + '</li>');
    event.preventDefault();
  })
}
