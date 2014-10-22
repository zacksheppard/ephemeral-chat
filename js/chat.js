$(document).ready(function(){
  chat();

});

function chat(){
  $(".form").submit(function(){
    $('ul').append('<li>' + $('#user-input').val() + '</li>');
    event.preventDefault();
  })
}
