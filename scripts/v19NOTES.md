v19 NOTES 

ANIMATIONS IN JQUERY 

What is jQuery Animation 

- The animate() method is used to creat custom animations 
- The optional call back parameter is a function to be executed after the animation is complete  
- This is a built in low animate method

-------------------------------------------------------------------------------------
- it can pass through 1 or more css properties that we wish to animate 
- additional methods can be passed in order to animate a little but more 


$(document).ready (function(){
    
   $("section > h2").on("click", function(){
       
       
       
   }); 
});


- this code is grabbing the <h2> element and binding a click event to it 
- when it's clicked the function will fire
- within the function we will decide what we want to animate 


 $(this) << this refers to the h2 element, and it is wrapped in jquery, so that we can grab it easily 
 
 $(document).ready (function(){
    
   $("section > h2").on("click", function(){
       
       $(this).css({"width": "500px", "height": "100px"});
       
       
   }); 
});


- now we care going to change the css part to animate 


$(document).ready (function(){
    
   $("section > h2").on("click", function(){
       
       $(this).animate({"width": "500px", "height": "100px"});
       
       
   }); 
});


- and like magic, this will now animate 
- now when we click the h2 element on the web browser you will see it slowly enlarge to the new size
- this is an example of the 1st parameter, it can only change property sizes and numerical properties 

------------------------------------------------------------------------
- we cannot animate every property
- we can only animate properties with a numeric value such as height, width, left, right... we cannot animate font ect 

------------------------------------------------------------------------

- the 2nd parameter we can pass through the animate() dictates the speed of the animation 


 $(this).animate({"width": "500px", "height": "100px"}, 4000); 
 
 - in milliseconds ...  4000 will be very slow
 

------------------------------------------------------------------------------

- the 3rd parameter is the easing parameter
- can  be 1 of 2 values
- either swing or linear 
- swing is the default value , starts out slow in the middle picks up momenntum and starts to swing a little but quicker and towards the end the animation slows down again 
- linear in a consistent motion from start to end, doesn't speed up or slow down 


 $(this).animate({"width": "500px", "height": "100px"}, 4000, "swing");
 
-------------------------------------------------------------------------------

- the 4th parameter is the call back function
- a callback function fires when something is complete 
- in this case after 4000 milliseconds
- we can specify a function to fire after it's finished 


 $(this).animate({"width": "500px", "height": "100px"}, 4000, "swing",
       function(){
           alert("Animation complete");
       });
       
       
- the alert will appear on top of the page 

---------------------------------------------------------------
- now lets make this look cleaner 


$(document).ready (function(){

    function complete(){
         alert("Animation complete");
    }
    
   $("section > h2").on("click", function(){
       
   $(this).animate({"width": "500px", "height": "100px"}, 4000, "swing", complete);
          
       
   }); 
});

- we made a function for complete on top and then passed the last parameter as complete
-----------------------------------------------------------------------------------
