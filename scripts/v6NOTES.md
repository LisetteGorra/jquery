V6 NOTES 

jQuery 

FILTERS

What are filters:
- Filters can be used to refine selectors to make them more specific 
- very much like css sudo classes
- the filter() method returns elements that match a certain criteria. This method lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned. This method is often used to narrow down the search for an element in a group of selected elements.

for example if you want to select all the <p> tags with jquery, you can use a filter, to ask for something more specific such as the first child within that parent element 

!!! ------   FILTERS START WITH A COLON (:)

website for more selectors 
https://api.jquery.com/category/selectors/



//first and last 
 $("header nav li:first").css({border:"2px solid red"});-->
 $("header nav li:last").css({border:"2px solid red"});-->

//first-child last-child
$("#contact ul:first-child").css({border: "2px solid red"});
$("#contact ul:last-child").css({border: "2px solid red"});

//even
$("header nav li:even").css({border: "2px solid blue"});

//odd
$("header nav li:odd").css({border: "2px solid yellow"});

//not
$("section:not('#conact')").css({border: "2px solid green"})

//less than 
$("#social-nav li:lt(3)").css({border: "2px solid blue"});

//greater than 
$("#social-nav li:gt(2)").css({border: "2px solid blue"});

// attribute filters
$("div[class]").css({border: "2px solid pink"});
$("img[alt]").css({border: "2px solid pink"});

//attribute with specific value 
$("img[alt=quote]").css({border: "2px solid purple"})

