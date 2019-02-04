JQUERY STATEMENTS 

JQuery is kind of like short hand javascript

-Pretty much every jQuery statement starts with a $ sign (or the jQuery keyword)

Example...
document.getElementById("main-heading");
$("#main-heading");

Example:Query statements and the $

in the console type:

document.getElementById("page-title");

return: 
   <h2 id="page-title">Kung Fu Lizzy></h2>
   
in jquery you would do this:
   $(#page-title);
   
return is the same: 
[    <h2 id="page-title">Kung Fu Lizzy></h2>]
but this time it's in an array, not a "normal" array, a jquery object, it is based on the array type.

> this means no matter what we ask for in the DOM, the jQuery statement will always return a jquery object that will return that statement. 

jquery wraps things up in a "wrapper" and returns us the object. 
to unwrap it you can call on a position like you would with an array
example: 

var heading = $("#page-title");

heading.css({position: "relative"}); //jquery method

return: [    <h2 id="page-title">Kung Fu Lizzy></h2>]

then type:
heading.animate({left: 100});
[  <h2 id="page-title" style="position: relative; left: 100px;">Kung Fu Lizzy</h2>]

> which is going to move the heading to the right by 100px

that is the element wraped in a jquery wrapper

unwrap:

heading[0]
return: <h2 id="page-title" style="position: relative; left: 100px;">Kung Fu Lizzy</h2>

and it is unwrapped. out of the "array"

so now if you try to access it this way:
heading[0].animate({left: 20});

return: Animation{}

> it isn't going to work 

the methods only work when this are wrapped. 