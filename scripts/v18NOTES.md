V18 NOTES 

THE EVENT OBJECT IN JQUERY 

What is the event object?
- The event object is a sychronization object whose state can be explicitly set to signaled by use of the SetEvent function. 
- The event object is useful in sending a signal to a thread indicating that a particulur event has occured. 

$(document).ready (function(){

element.on("click", function(e){
    //do something
});
  
});

- the (e) stands for event and is followed by an object

----------------------------------------------------------------------

$(document).ready (function(){

- the star grabs all elements 

$("*").on("click", function(e){ 
    console.log(e.target); 

- shows the actual thing you are clicking

console.log("The event type is:" + e.type);

- will give you actual coordinates of what you click 

 console.log("X co-ordinate of the event is: " + e.pageX) 
   e.stopPropagation(); 
   
   });
});
-  e.stopProp prevents bubbling of elements. so code only grabs 1st elements and not all tags
});
});

- X COORDINATE

the X coordinate starts out bigger on the right and smaller on the left 
the X coordinate goes from left to right, zero is all the way left 

- Y COORDINATE

   console.log("Y co-ordinate of the event is: " + e.pageY); 
   
the Y coordinate starts goes from top to bottom 
the Y coordinate starts at zero at the top and gets larger as you go down 

the X and Y coordinates would be useful for something such as a game and you wanted to know where the user clicked, such as objects on a picture for example.
 
 
 
 ------------------------------------------------------------------------
 
 - FULL CODE
 
 


$(document).ready (function(){

$("*").on("click", function(e){ 
    console.log(e.target);
   console.log("The event type is:" + e.type);
   console.log("X co-ordinate of the event is: " + e.pageX);
   console.log("Y co-ordinate of the event is: " + e.pageY); 
   e.stopPropagation(); 
});
});
