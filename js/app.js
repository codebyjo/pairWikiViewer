$("document").ready(function() {
  
  // Search Wikipedia.
  function searchArticle(searchQuery) {
	//Clear current content
  
  //Makes sure that the search box has at least 1 character or 1 number, otherwise open a random page.
  if (searchQuery == "" || searchQuery.test(/[a-zA-Z0-9]/) ) {
    window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
  };
    
  // Request list of possible articles.
	var searchUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchQuery + "&utf8=";

	$.ajax({
    url: searchUrl,
    dataType: "jsonp",
    success: function(results) {
		console.log(results);
	  }
  });
    
	//pull title and first paragraph of search object

	//allow for certain number of searches to display
  }
  
  //type in the search box, I can see a dropdown menu with autocomplete options for matching Wikipedia entries-->
  
  // Normal Search button function
  $("#normalSearch").on("click", function(event) {
    console.log($("#searchBox").val());
    searchArticle($("#searchBox").val());
	});
  
  // Lucky Search button function
  $("#luckySearch").on("click", function(event) {
    window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
  });
  
});