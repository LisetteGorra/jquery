var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function() {
  
  if(wrapped){
     $("section").unwrap(); 
     wrapped = false;
     button.text("Wrap");
  }else{
      $("section").wrapAll(wrapper);
      wrapped = true;
           button.text("Unwrap");

  }
    
};




















// //SOME CODE TO PULL IN MY LATEST TWITTER TWEET

// var tweet = "The big fight live: Ham vs Cheese!";

// $("#tweets div p").text(tweet);

// // this shows up on the bottom of the page 

// //ADDING & CHANGING CONTENT

// // .append() adds content to bottom of the element 
// // .prepend() adds content to top of element 
// // .before() adds content before element
// // .after() adds content after element
// // .html() changes the whole html of the element
// // .text() changes the text of an element


// $("#contact-methods").css({border: "2px solid red"}).next().css({border: "2px solid green"}).closest("section").css({border: "2px solid blue"});

