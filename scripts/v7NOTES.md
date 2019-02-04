V7 NOTES

JQUERY AND THE DOM 

THE DOM IN JAVASCRIPT 

- The Document Object Model is a way to describe the relationship between elements on a page, and gives us elements on a page, and gives us a way to traverse them.


1. the next method grabs an element, then gives us the next eleement in line in the html structure  

//next 
$("#contact-methods").next().css({border: "3px solid red"});

2. the prev(previous) method is accessed through the social nav, in this example its a ul, but the prev method will go to the image element before the ul.

next goes down, prev goes up 

//prev
$("#social-nav").prev().css({border: "3px solid blue"});


3. parent grabs an eleement and it grabs its parent.  the parent of banner title is the element wrapper, goes up the tree 1 level and graps the wrapper element and adds a pink border 

//parent
$(".banner-title").parent().css({border: "3px solid pink"});


4. children method goes through social-nav and grabs the children of an element. in this example it is all the li tags

//children
$("#social-nav").children().css({border: "3px solid green"});


5. find method, we grab an element, in this case it's contact, then find a class called facebook, then it's given a border of purple 

//find .. quickest method
$("#contact").find(".facebook").css({border: "3px solid purple"});


6. closest method, moves up the DOM to find the nearest parent to whatever element you've listed, in this case the parent is wrapper. 

//closest
$("#social-nav").closest(".wrapper").css({border: "3px solid orange"});



