$(document).ready(function(){
 
    $(".book1").click(function(){
      $(".book1").toggleClass('book-flip'); 
    });
  

 

    $('.fb').hover(
      function(){ $(".img-fb").toggleClass('animation') }
      )
    $('.insta').hover(
      function(){ $(".img-insta").toggleClass('animation') }
      )
    $('.tweet').hover(
      function(){ $(".img-tweet").toggleClass('animation') }
      )
    $('.good').hover(
      function(){ $(".img-good").toggleClass('animation') }
    
    )
 })

     