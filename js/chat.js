$(document).ready(function(){
  chat();
});

function chat(){
  $("form").submit(function(){
    var chatInput = $(this).find("input:first").val();
    if (chatInput.match("/name")) {
      name = chatInput.replace(/\/name\s*/, '');
      $(this).data('name', name);
      $(this).find("input:first").attr('placeholder', $(this).data('name') + ' says...' ); 
      event.preventDefault();
      this.reset();
    } else { 
      var id = $(this).attr('id')
      $('ul').append('<li id="' + id + '" > > ' + chatInput + '</li>');
      event.preventDefault();
      this.reset();
    }
  })
}

