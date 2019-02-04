V8 NOTES 

CHAINING 

WHAT IS CHAINING??

CHAINING IS:

- CHAINING IN JQUERY IS A FEATURE THAT SPEEDS UP OUR CORE PRODUCTION

- ALLOWS US TO RUN MULTIPLE JQUERY COMMANDS, ONE AFTER THE OTHER, ON THE SAME ELEMENT(S)

- THIS WAY BROWSERS DON'T HAVE TO FIND THE SAME ELEMENT MORE THAN ONCE

- TO CHAIN AN ACTION YOU SIMPLY APPEND THE ACTION TO THE PREVIOUS ACTION

- CHAIN CODE TOGETHER IN 1 LINE BY USING .SYNTAX


example:

$("#contact-methods").css({border: "2px solid red"}).next().css({border: "2px solid green"}).closest("section").css({border: "2px solid blue"});

all of these methods are chained together in 1 statement. 

careful it could become unreadable 

you can click enter after every chain for clarity 

example: 

$("#contact-methods").css({border: "2px solid red"})
.next().css({border: "2px solid green"})
.closest("section").css({border: "2px solid blue"});
