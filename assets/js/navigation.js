$(document).ready(function(){
 
    $(".container").click(function(){
      $(".bar1").toggleClass("change1"); 
    });
    $(".container").click(function(){
        $(".bar2").toggleClass("change2");
      });
      $(".container").click(function(){
        $(".bar3").toggleClass("change3");
      });
      $(".container").click(function(){
        console.log("dfd");
        $(".overlay").toggleClass("active");
      });

    $(".close").click(function(){
      
      $(".overlay").removeClass("active");
      $(".bar1").removeClass("change1");
      $(".bar2").removeClass("change2");
      $(".bar3").removeClass("change3");
    
    });
  
});