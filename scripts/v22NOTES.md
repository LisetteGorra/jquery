V22 NOTES 

SLIDING ELEMENTS

- in jQuery you can slide elements to create an effect using:
- they do not actually slide elements anywhere 
- they remove different elements with a certain effect 
- then reinsert elements with height property 
slideDown() - restores height to whatever the original value was
slideUp() - reduces height to zero 
slideToggle()

-----------------------------------------------------------------

$(document).ready (function(){
    
    $("").on("click", function(){
        
        
    });


 });
 
 -----------------------------------------------------------------
$(document).ready (function(){
    
    $(".slide-button-up").on("click", function(){
        
        $("#lead-banner").slideUp();
        
    });


 });
 ------------------------------------------------------------------
  $(".slide-button-up").on("click", function(){
        
        $("#lead-banner").slideUp();
    });
    $(".slide-button-down").on("click", function(){
        
        $("#lead-banner").slideDown();
  
  - now we can slide the banner up and down 

------------------------------------------------------------------

 - if we add parameters, it will speed up and slow down the effects
 

    $(document).ready (function(){
    
      
    $(".slide-button-up").on("click", function(){
        
        $("#lead-banner").slideUp(100);
    });
    $(".slide-button-down").on("click", function(){
        
        $("#lead-banner").slideDown(4000, function(){
            alert("animation complete"); 
        });
    });


 });
 ---------------------------------------------------------
 - TOGGLE 
 

  $(document).ready (function(){
    
      
    $(".slide-button-up").on("click", function(){
        
        $("#lead-banner").slidetToggle(1000, function(){
        
            alert("animation complete");
        });
    });
    
    