$(document).ready (function(){

 var items = $("#points-of-sale li");
 items.on("click", function(){
    $(this).find("p").slideToggle(500);
     
 });
 
});





// $(document).ready (function(){
    
//     var allQuotes = $("blockquote");
//     var currentQuote = 0;
    
//     function changeQuote(){
        
//         $(allQuotes[currentQuote]).fadeOut(200, function(){
//              if(currentQuote == allQuotes.length - 1){
//             currentQuote = 0;
//         } else {
//             currentQuote++;
//         }
//       $(allQuotes[currentQuote]).fadeIn(200); 
             
//         });
      
      
//     }
    
//     var quoteTimer = setInterval(changeQuote, 3000);
// }); 



// $(document).ready (function(){
    
      
//     $(".slide-button-up").on("click", function(){
        
//         $("#lead-banner").slideUp(100);
//     });
//     $(".slide-button-down").on("click", function(){
        
//         $("#lead-banner").slideDown(4000, function(){
//             alert("animation complete"); 
//         });
    
        
//     });


//  });

 


// $(document).ready (function(){


// $("img[alt=map]").on("click", function(){
     
//         $("section > h2").toggle(1000);
//   });
// });



// $(document).ready (function(){

//     function complete(){
//          alert("Animation complete");
//     }
    
//   $("section > h2").on("click", function(){
       
//   $(this).animate({"width": "500px", "height": "100px"}, 4000, "swing", complete);
          
       
//   }); 
// });



// $(document).ready (function(){

// $("*").on("click", function(e){ 
//     console.log(e.target);
//   console.log("The event type is:" + e.type);
//   console.log("X co-ordinate of the event is: " + e.pageX);
//   console.log("Y co-ordinate of the event is: " + e.pageY); 
//   e.stopPropagation(); 
// });
// });



// $(window).on("load", function(){
  
// });



// $(document.on)"ready", function(){

  
// }

// //shorthand method 

// $(document).ready(function(){
// });

// //and even shorter 
// $(function(){
  
// });



// $("#lead-banner").dblclick(function(){
//   alert("you double clicked me");
//   $("#lead-banner").off("dblclick");
// });
  


// var myLis = $("#points-of-sale li");

// myLis.on("click", function(){
  
//   $(this).css({"background" : "pink"});
//   //unbind
//   myLis.off("click");
// });




// $("header .wrapper").removeClass("wrapper");
// // $("header .wrapper").addClass("wrapper");
// $("header > div").addClass("wrapper");
 
 
// var button = $("lead-banner a");
 
// button[0].onclick = function(){
//   $("points-of-sale").toggleClass("open");
//   return false;
   
// };


// var myObject = {
//   "height": "40",
//   "speed": "100", 
// }


//   console.log($("social-nav").css("position"));
//     console.log($("social-nav").css("top", "-200px"));

// $("social-nav").css("top", "-200px");
// $("social-nav").css("top", "-200px").css("left", "100px").css;


 


// // $("#contact img").removeAttr("alt");
// // $("#contact img").attr("alt", "location");

// console.log($("#contact img").attr("alt")); // used for an image gallery can load diff image when clicked


// .removeAttr() removes an attrubute completely from element
// .attr() can read or set any attribute 


// // $(".button").empty();
// $(".button").remove();
// // $("points-of-sale").empty();
// $("#contact img").remove();



// .empty - empties the inner HTML of an element 

// .remove() - removes the element completely



// var wrapper = "<div class='wrapper'>";
// var button = $(".button");
// var wrapped = true;

// button[0].onclick = function() {
  
//   if(wrapped){
//     $("section").unwrap(); 
//     wrapped = false;
//     button.text("Wrap");
//   }else{
//       $("section").wrapAll(wrapper);
//       wrapped = true;
//           button.text("Unwrap");

//   }
    
// };





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

