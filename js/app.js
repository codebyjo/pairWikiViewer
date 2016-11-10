$("document").ready(function() {
  
  valid = new RegExp(/[a-zA-Z0-9]/g);
  resultsArray = [];
  
  $(".button").hover(function() {
    $(this).css({
      "color": "#000000",
      "border": "1px solid rgb(198, 198, 198)",
      "box-shadow": "0 1px rgb(240, 240, 240)"
    });
  }, function() {
    $(this).css({
      "color": "rgb(117, 117, 117)",
      "border": "none",
      "box-shadow": "none"
    });
  });
  
  // Search Wikipedia.
  function searchArticle(searchQuery) {
    //Clear current content
    
    //Makes sure that the search box has at least 1 character or 1 number, otherwise open a random page.
    if (valid.test(searchQuery) == false) {
      $("#searchBox").attr("placeholder", "Type something in you noob!");
    }else{
    
	    var searchUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchQuery + "&utf8=";

      // Request list of possible articles.
      $.ajax({
        url: searchUrl,
        dataType: "jsonp",
        success: function(results) {
          resultsArray = results.query.search;
	      }
      });
    }
    
	//pull title and first paragraph of search object

	//allow for certain number of searches to display
  }
  
  //type in the search box, I can see a dropdown menu with autocomplete options for matching Wikipedia entries-->
  
  // Normal Search button function
  $("#normalSearch").on("click", function(event) {
    searchArticle($("#searchBox").val());
	});
  
  // Lucky Search button function
  $("#luckySearch").on("click", function(event) {
    window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
  });
  
});