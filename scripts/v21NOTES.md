V20 NOTES 

SHOW, TOGGLE AND HIDE ELEMENTS 
-----------------------------------------------------------------------------
- HIDE 
- if you add a time to the parameter (1000) then it will animate and slowly drag and shrinks in width and height the clicked element, to the left till it's gone
- without the time in parameter it doesn't display much of an effect

$(document).ready (function(){


$("section > h2").on("click", function(){
     
        $(this).hide(1000);
   });
});

-----------------------------------------------------------------------------
- Chaining the .show method will hide the element clicked and then reapper with show
- it will reapper from the left to the center and increase in width and height 

$(this).hide(1000).show(1000);
-----------------------------------------------------------------------------
- TOGGLE

 
 $(this).toggle();
 
- THIS will reverse whatever state the element is currently in 
- you can add a parameter and give it a speed effect 


 $(this).toggle(1000);
 
 - this will make it fade out if the element is showing
 - but we cant click it to make it fade back in after it's gone
 - what we can do is add an event to the element
 

$(document).ready (function(){


$("img[alt=map]").on("click", function(){
     
        $("section > h2").toggle(1000);
   });
});


- now you can click the map and watch the elements fade in and out each time you click 