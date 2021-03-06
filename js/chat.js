$(document).ready(function(){
  chat();
});

function chat(){
  $("form").submit(function(e){
    var chatInput = $(this).find("input:first").val();
    if (chatInput.match("/name")) {
      form = $(this);
      setName(chatInput, form);
      e.preventDefault();
      this.reset();
    } else { 
      var id = $(this).attr('id')
      $('ul').append('<li id="' + id + '" > > ' + chatInput + '</li>');
      e.preventDefault();
      this.reset();
    }
  })
}

function setName(input, form) {
  name = input.replace(/\/name\s*/, '');
  form.data('name', name);
  form.find("input:first").attr('placeholder', '> ' + form.data('name') + ' says...' );
}

