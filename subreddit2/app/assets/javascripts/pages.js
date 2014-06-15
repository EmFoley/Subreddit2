$( document ).ready(function() {
  $('.reddit_auth').on('click', function(){
    window.location = 'https://ssl.reddit.com/api/v1/authorize?client_id=6kOddZTzRQ0YNA&response_type=code&state=random&redirect_uri=http://localhost:3000/&duration=temporary&scope=identity,read,vote,submit';
  });
});
  

  // $(document).on("submit", "#subpicker", function(){
    // var subreddit = $('.reddit_input').val();
    // $.ajax({
    //      type: "POST",
    //      url: '/get_subreddits',
    //      dataType: "jsonp",
    //      crossDomain: true
    //    });

       // $.getJSON("http://www.reddit.com/r/"+subreddit+"/new/.json?callback=?",function(data){
       //  var counter = 0;
       //   $.each(data.data.children, function(i, item){
       //        $("#posts").append( '<div class="indv-post" id="number'+ counter+'">' + '<button id="move-up" type="button">' + 'Move Up' + '</button>' + '<button id="move-down" type="button">' + 'Move Down' + '</button>' +
       //          '<ul>' + '<li>' + item.data.title + '</li>' + item.data.url  + '</li>' + '<li>' + item.data.permalink + '</li>' + '</ul>' + 
       //                '<div class="vote-up-div">' + '<button id="voteup" type="button">' + 'Vote up!' + '</button>' + '<div class="counter" id="voteup">' + '<p></p>' + '</div>' + 
       //                '<div class="vote-up-div">' + '<button id="voteup" type="button">' + 'Vote up!' + '</button>' + '<div class="counter" id="voteup">' + '</div>' + 
       //                '</div>' + '<div class="vote-down-div"> '+ '<button id="votedown" type="button">' + 'Vote down!'  + '</button>' +
       //            '<div class="counter" id="countdown">' + '</div>' + '</div>' +
       //          '</div>');
       //        counter++;
       //      });
       //    });
      // });





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