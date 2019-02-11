V 23 NOTES 

FADING ANIMATION EXAMPLE

- 1st we are going to add more blockquote tags to the index.html 
- and make sure they all have different text 


                <blockquote>quatis alique mos et aut occae cum, veliquaspit quo quam, si idem reprorisqui doluptatur accum si sunt ut officiisto enecab id et aut es et l</blockquote>
                <blockquote>veliquaspit quo quam, si idem reprorisqui doluptatur accum si sunt ut officiisto enecab id et aut es et l</blockquote>
                <blockquote>quatis alique mos et aut occae cum, veliquaspit quo quam</blockquote>
                
--------------------------------------------------------------------------------
- then add information to your styles.css
- this will display the 1st blockquote and not the rest 


blockquote {
    display: none;
}
blockquote:first-of-type{
    display: block;
}

--------------------------------------------------------------------------------
- create a variable to store all the blockquotes and store them in a jquery object array, so you can access each one of them 

$(document).ready (function(){
    
    var allQuotes = $("blockquote");
    
});

--------------------------------------------------------------------------------
- next you want to creat another variable 
- current quote will store where we are up to in the cycle
- the number 0 is 1st blockquote in the array 


 var allQuotes = $("blockquote");
    var currentQuote = 0;
--------------------------------------------------------------------------------
- next create a function, it will control the fading in and out of the blockquotes
- change quote function will change the quote each time it's called



$(document).ready (function(){
    
    var allQuotes = $("blockquote");
    var currentQuote = 0;
    
    function changeQuote(){
        
      
    }
}); 
--------------------------------------------------------------------------------
- next we want to call the current quote


$(document).ready (function(){
    
    var allQuotes = $("blockquote");
    var currentQuote = 0;
    
    function changeQuote(){
        
        allQuotes[currentQuote] <<< (the array notation) 
          }
}); 
 - (array notation) this is set to zero above and will give us the 1st quote
- REMEMBER when we use this array notation on our jquery object we unwrap that jquery object 
- so NOW we CANNOT use that fade out methode 
- in order to use the fade out method we have to re-wrap it in a jquery object like so:


$(allQuotes[currentQuote]) 

- just add the dollar sing and parenthetical expressions


--------------------------------------------------------------------------------
- now you can fadOut 

 
  $(allQuotes[currentQuote]).fadeOut(200);
-------------------------------------------------------------------------------
- now we faded out that current bloxk 
- now we want to make an if statement 


 $(allQuotes[currentQuote]).fadeOut(200);
        if(currentQuote == allQuotes.length - 1){
            currentQuote = 0;
        } else {
            currentQuote++;
        }

- what we are doing is fading out the current quote then checking if the current quote is equal to 2 then reset the currentQuote to ZERO 
- we use double == to check, because 1 = is an assignment operator 
- if it's not not equal to allQuotes.length (2), then it will add 1 (++) to the currentQuote

-------------------------------------------------------------------------------
- Then we want to fade in whatever currentQuote is going to be

    $(allQuotes[currentQuote]).fadeOut(200);
        if(currentQuote == allQuotes.length - 1){
            currentQuote = 0;
        } else {
            currentQuote++;
        }
      $(allQuotes[currentQuote]).fadeIn(200);
    }
-------------------------------------------------------------------------------
- this is not going to run on its own, we still need to call the function 

- we will use a quoteTime so that in the future we can stop the intervals, the var we are making gives us a handle on that 


var quoteTimer = setInterval(changeQuote, 3000);

- the setInterval method takes 2 parameters
- 1st is the function we want to call which is changeQuote
- 2nd is how often we want to call it which is 3000 milliseconds

-------------------------------------------------------------------------------
- the result to this code is: it jumps a bit 
- we are fading out and running the if statement while fading 
- what we need to do is find a way to make sure the fading is complete then we can run the other code 
- we are going to add a function: to the 2nd parameter in fadeOut


$(allQuotes[currentQuote]).fadeOut(200, function(){
             if(currentQuote == allQuotes.length - 1){
            currentQuote = 0;
        } else {
            currentQuote++;
        }
      $(allQuotes[currentQuote]).fadeIn(200); 
      
- we have created the function and copied and pasted the code below into the function 
- the function will note fire up until the fadeOut method is complete 



