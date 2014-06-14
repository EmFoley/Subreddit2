$( document ).ready(function() {
  $('#view').click(function(){
    $('#posts').slideToggle("slow");
  });
  $('.reddit_auth').on('click', function(){
    window.location = 'https://ssl.reddit.com/api/v1/authorize?client_id=6kOddZTzRQ0YNA&response_type=code&state=random&redirect_uri=http://localhost:3000/&duration=temporary&scope=identity,read,vote,submit';
  });
  $('#subpicker').submit(function(event){
    event.preventDefault;
    // var subreddit = $('.reddit_input').val();
    // $('.reddit_input').val("");
    $.ajax({
      url:'http://www.reddit.com/r/dogecoin/new/.json',
      type: 'GET'
    }).success(function(){
      console.log("got it")
    }).fail(function(){
      console.log("failed")
    });


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