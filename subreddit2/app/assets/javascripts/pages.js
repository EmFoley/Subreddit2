$( document ).ready(function() {
  $('#view').click(function(){
    $('#posts').slideToggle("slow");
  });
  $('.reddit_auth').on('click', function(){
    window.location = 'https://ssl.reddit.com/api/v1/authorize?client_id=6kOddZTzRQ0YNA&response_type=code&state=random&redirect_uri=http://localhost:3000/&duration=temporary&scope=identity,read,vote,submit';
  });
});




$(document).on("click", ".vote-up-div", function(){
  $(this).find('.counter').html(function(i, val) { return +val+1 }
    );
});

$(document).on("click", ".vote-down-div", function(){
  $(this).find('.counter').html(function(i, val) { return +val-1 }
    );
});



$(document).on("click", "#move-up", function(){
  $(this).parent('.indv-post').insertBefore($(this).parent('.indv-post').prev());
});

$(document).on("click", "#move-down", function(){
  $(this).parent('.indv-post').insertAfter($(this).parent('.indv-post').next());
});