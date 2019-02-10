V17 NOTES 

DOCUMENT READY VS WINDOW LOAD 

- put the script tags on the bottom of the page to make sure all html on the page loads first
- we want to make sure everything in the elements loads just incase we want to bind something 
- some developers like their script tags on the top in the <head>
- in order to make sure taht everything else in the webapage is loaded first we need to use document.onready() or .onload()



------------------------------------------------------------------------
$(document.on)"ready", function(){

  
}
-------------------------------------------------------------------------
//shorthand method 

$(document).ready(function(){
});
------------------------------------------------------------------------
//and even shorter 
$(function(){
  
});


- this is saying when the document is ready, do whatver you need to do 


---------------------------------------------------------------------------

$(window).on("load", function(){
  
});

- this is very similar but it waits for the whole page to load not just the elements
- when you want an image to fully load so that you can change the width or other attributes you would use this code instead of the .ready

or $(window).load(function({
});

- which is exactly the same as the last code