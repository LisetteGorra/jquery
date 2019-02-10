V20 NOTES 

FADING ELEMENTS IN AND OUT 

- You can use fading to create effect on your images, buttons and more 

------------------------------------------------------------------------
- here we are fading the opacity, to a semi transparent state 
$(document).ready (function(){

   $("section > h2").on("click", function(){
       
   $(this).animate({"opacity": "0.5"});
            
       
   }); 
});
---------------------------------------------------------------------------
- there are methods we can use to do this that are easier to write 
- fade out method, will fade the element out when clicked till its invisible 

- FADE OUT 

$(document).ready (function(){

   $("section > h2").on("click", function(){
       
   $(this).fadeOut();
            
       
   }); 
});

- the content bellow will also scoot up and occupy the freed up space 

----------------------------------------------------------------
- FADE IN 

$(this).fadeOut().fadeIn();

- the element will fade out then fade back in 

----------------------------------------------------------------------
- you can add paramters that will time the fade out and fade in 


  $(this).fadeOut(2000).fadeIn(2000);
  
-----------------------------------------------------------------------

- FADE TO 
- This takes 2 paramters
- 1st paramter is time taken 
- 2nd is the opacity you want to fade it to


   $(this).fadeTo(1000, 0.2);
   
- This fades it nearly to a see through opacity 
- You can chain the fade code to fade again 


 $(this).fadeTo(1000, 0.2).fadeTo(1000, 0.8);
  
- this will fade it out and then fade it back in again

   $(this).fadeTo(200, 0.2)
          .fadeTo(200, 0.8)
          .fadeTo(200, 0.2)
          .fadeTo(200, 0.8)
          .fadeTo(200, 0.2)
          .fadeTo(200, 0.8); 
      
- this will give it a cool effect. it will appear as a blinking state of continuos fading in and out 