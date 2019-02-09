V16 NOTES 

EVENT HELPERS

on() - binds an event to matched element(s)
off() - unbinds event from matched element(s)

----------------------------------------------------------------------
- instead of this:

element.on("click", function(){
  
});
  
- we will do this:

element.click(function(){
  alert("you click me");
  
});

- now the click becomes the helper
 
 these 2 codes have the same result


$("#lead-banner").dblclick(function(){
  alert("you double clicked me");
  $("#lead-banner").off("dblclick");
});
  
  
  - here we have the dblclick , it will be stop the button from being clicked twice with .off 