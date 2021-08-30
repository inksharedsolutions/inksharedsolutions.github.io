

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

 function contact(){

  Swal.fire({
    title: 'Successfully sent!',
    text: '',
    imageUrl: 'https://media.giphy.com/media/4xpB3eE00FfBm/giphy.gif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
  console.log('hello');
  form.reset();
 }
     
 function newletter(){
   

  Swal.fire({
    title: 'Successfully sent!',
    text: '',
    imageUrl: 'https://media.giphy.com/media/4xpB3eE00FfBm/giphy.gif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

 }


 function defaultOnResponse(ok, setStatus, response) {
  if (ok) {
    setStatus("Thanks!");
  } else {
    try {
      setStatus(response.data.error);
    } catch {
      setStatus("Oops, there was an error!");
    }
  }
};
     