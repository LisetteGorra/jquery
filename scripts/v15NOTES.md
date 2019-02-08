V15 NOTES 

BINDING & UNBINDING EVENTS


var myLis = $("#points-of-sale li");

myLis.on("click", function(){
  
  
});

what we are saying here is get the Lis and when someone clicks them fire up the function



  $(this).css({"background" : "pink"});
  
});
 accessing background with jquery and ussing css (this because we are in a method)


---------------------------------------------------------------

to unbind use .off like so:

var myLis = $("#points-of-sale li");

myLis.on("click", function(){
  
  $(this).css({"background" : "pink"});
  //unbind
  myLis.off("click");
});





on() - binds an event to matched element(s)
off() - unbinds event from matched element(s)

