$(function() {
  function buildHTML(message) {
    var imagehtml = message.image == null? "" : `<img src=${message.image} class="lower-message__image">`
    var html = 
    `<div class="message">
       <div class="message__upper-info">
         <p class="message__upper-info__talker">
          ${ message.user_name }
        </p>
        <p class="message__upper-info__date">
          ${ message.created_at}
        </p>
      </div>
      <div class="message__text">
        <p class="lower-message__content">
        ${message.content}
        </p>
      </div>
      ${imagehtml}
    </div>`
    return html;
  } 
 
  
  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__message').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert('message error');
    })
    
  })

});