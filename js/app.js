$("document").ready(function() {

  valid = new RegExp(/[a-zA-Z0-9]/g);
  resultsArray = [];
  var resultsHTML = function(arrayInput){
    var htmlOutput = '';
    for (var i=0; i<arrayInput.length; i++){
      htmlOutput += '<div>' + arrayInput[i].title + '</div>';
    }
    return htmlOutput;

  };
  secondPageHeader = '\
    <div style="background-color: rgb(241, 241, 241); width: 100%; height: 60px; margin: 0; padding: 0;">\
      <img src="images/Wikipedia-logo-wordmark.png" alt="Wikipedia Logo" style="height: 58px;" />\
      <input type="text" id="searchBox" style="margin: 0; position: relative; top: -23px;"/>\
      <button id="normalSearch" class="loaded-search" type="submit" style="background-color: rgb( 66, 133, 244); position: relative; top: -23px; left: -5px; height: 41px; width: 41px; font-family: \'Times New Roman\', serif; font-size: 1.25em; color: white; border: none;"><i class="fa fa-search" aria-hidden="true"></i></button>\
    </div>\
    <div style="border-bottom: 1px solid rgb(235, 235, 235); height: 60px; padding-left: 200px;">\
      <ul>\
        <li style="width: 30px; font-size: 13px; font-weight: 600; height: 58px; text-align: center; border-bottom: 3px solid rgb(66, 133, 244); color: rgb(66, 133, 244); line-height: 60px; vertical-align: middle;">All</li>\
      </ul>\
    </div>\
    ';
  secondPageArticle = '<div>snippet</div>';

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

    // Normal Search button function
    $("#normalSearch").on("click", function(event) {
      searchArticle($("#searchBox").val());
    });

    //Makes sure that the search box has at least 1 character or 1 number, otherwise open a random page.
    if (valid.test(searchQuery) == false) {
      $("#searchBox").attr("placeholder", "Type something in you noob!");
    }else{

      var searchUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchQuery + "&utf8=";

      $("header").empty();
      $("article").empty();
      // Request list of possible articles.
      $.ajax({
        url: searchUrl,
        dataType: "jsonp",
        success: function(results) {
          resultsArray = results.query.search;
          //console.log(results.query.search);
          $("header").html(secondPageHeader);
          console.log(resultsArray);
          secondPageArticle = resultsHTML(resultsArray);
          $("article").html(secondPageArticle); // HTML results go here (referenced by variable)
        }
      });

      // Disconnected listener, so have to relisten.
      $("#searchBox").keypress(function (e) {
        if(e.which == 13) {searchArticle($("#searchBox").val());}
      });

      $("#normalSearch").hover(function() {
        $(this).css({"background-color": "rgb(59, 120, 231)",});
      }, function() {
        $(this).css({"background-color": "rgb(66, 133, 244)"});
      });

      $("#searchBox").attr("value", searchQuery);
    }

  //pull title and first paragraph of search object
  //var title = callback.query.search[m].title;
  //var url = title.replace(/ /g, " ");

  //$ (".title")
  //allow for certain number of searches to display
  }

  //type in the search box, I can see a dropdown menu with autocomplete options for matching Wikipedia entries-->
$("#searchBox").autocomplete({
    source: function(request, response) {
        console.log(request.term);
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function(data) {
              console.log(data);
              response(data[1]);
            }
        });
    }
});





  // Normal Search enter/return function
  $("#searchBox").keypress(function (e) {
    if(e.which == 13) {
      searchArticle($("#searchBox").val());
    }
  });

  // Normal Search button function
  $("#normalSearch").on("click", function(event) {
    searchArticle($("#searchBox").val());
  });

  // Lucky Search button function
  $("#luckySearch").on("click", function(event) {
    window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
  });

});