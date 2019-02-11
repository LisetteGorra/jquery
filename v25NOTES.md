V25 NOTES 

USING PLUG INS 

- 1ST STEP IS TO LINK UP THE FILES 
- LINK YOUR JQUERY 
- LOAD THE RESPONSIVE SLIDE FILES 
- ORDER YOUR SCRIPTS I NA LOGICAL ORDER 
- PUT EACH BLOCK QUOTE WITHIN A <li> TAG 
- PUT THE <ul> ABOVE TO ENCLOSE THEM WITH A CLASS OF "RSLIDES"
- END WITH A UL TAG TO CLOSE IT OFF 
- now you can access it with jquery 
- 

$(document).ready (function(){

$(".rslides").responsiveSlides();

});

- this is now calling upon the plug in that we loaded and is doing the work for us 
