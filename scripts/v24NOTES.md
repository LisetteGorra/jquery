V24 NOTES 

SLIDING ANIMATION EXAMPLES

WE ARE GOING TO USE THE SLIDE TOGGLE METHOD, AND FOCUS ON THE <li>

---------------------------------------------------------------------
- the goal is to get the p tags to hide and the li tags to slide over and enlarge 

- 1st we will update the styles.css
- adding the following code to the end 

#points-of-sale li p{
    display: none;
}

- this will remove the p tags from the web browser by default

---------------------------------------------------------------------
- now we will create a variable 


$(document).ready (function(){

 var items = $("#points-of-sale li");
});

- this is going to grab the li tags and store them in that jQuery array

---------------------------------------------------------------------
- now each li tag needs a click event 


 var items = $("#points-of-sale li");
 items.on("click", function(){
    
     
 });
 
- this is binding the click event to each li tag
- each time the li is clicked it will either show or hide the p tag


 $(this).find("p").slideToggle(500);
 
- using this to grab the element in the object and slide toggle with a time parameter - now if you click the li tag it will have the p tag slide up and down at 500 milliseconds


$(document).ready (function(){

 var items = $("#points-of-sale li");
 items.on("click", function(){
    $(this).find("p").slideToggle(500);
     
 });
 
});
