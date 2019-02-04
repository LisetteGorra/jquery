V9 NOTES 

ADDING CONTENT 
!! must enter new section in html:

like so:
<section id="tweets">
                <h2>Latest Tweets</h2>
                <div>
                    <p>For all tweets, check out our Twitter</p>
                    
                </div>
                
                //SOME CODE TO PULL IN MY LATEST TWITTER TWEET

var tweet = "<div style='margin: 20px 0; paddig: 10px; background: #eee'>The big fight live: Ham vs Cheese!</div>";

------------------------------------------------------------------------------------------                

- .append() - adds content to bottom of the element

$("#tweets div").append(tweet);

// this shows up on the bottom of the page 

result: Latest Tweets
For all tweets, check out our Twitter
The big fight live: Ham vs Cheese!



--------------------------------------------------------------------
- .prepend() adds content to top of element 


$("#tweets div").prepend(tweet);

switched the message around like so:
Latest Tweets
The big fight live: Ham vs Cheese!
For all tweets, check out our Twitter

----------------------------------------------------------------------
- .before() adds content before element

I want to grab the p tag so it can appear BEFORE the p tage and not before the div

$("#tweets div p").before(tweet);


stays the same like so:

Latest Tweets
The big fight live: Ham vs Cheese!
For all tweets, check out our Twitter

-------------------------------------------------------------------------------
- .after() adds content after element


$("#tweets div p").after(tweet);

like so:

Latest Tweets
For all tweets, check out our Twitter

The big fight live: Ham vs Cheese!

-------------------------------------------------------------------------------
- .html() changes the whole html of the element

$("#tweets div ").html(tweet);

result:
Latest Tweets
The big fight live: Ham vs Cheese!

replaces textin html 

-------------------------------------------------------------------------------
- .text() changes the text of an element

$("#tweets div p").text(tweet);

result:
Latest Tweets
<div style='margin: 20px 0; paddig: 10px; background: #eee'>The big fight live: Ham vs Cheese!</div>

yuu would have to delete some code from the script.js file 

var tweet = "The bug fight live: Ham vs Cheese!";

and then:

Latest Tweets
The big fight live: Ham vs Cheese!

get that result - this time it's just updating the p tag and not inserting the code into it