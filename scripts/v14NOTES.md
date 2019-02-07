V14 NOTES

REMOVING CLASSES WITH JQUERY 
 
 removeClass() - removes a class from the matched element 
 add Class() - adds a class to the matched element(s)
 toggleClass() - toggle the class on and off on thier matched elements
 
  $("header .wrapper").removeClass("wrapper");
 $("header > div").addClass("wrapper");
 
 
 - you need to update your css 
 

.open{
    height: auto !Important; 
}


- and you updated the element you are targeting on the index .html


        <div class="wrapper">
            <section id="points-of-sale" style="height: 0;
        
- and then grab the lead banner and use jquery to toggle (give or take away a class)
 

           
var button = $("#lead-banner a");
button[0].onclick = function(){
  
  $("#points-of-sale").toggleClass("open");
  return false;
};
