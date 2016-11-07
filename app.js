//search and see the resulting Wikipedia entries. -->

var function searchArticle(query){
	//clear current content

	//allow search button to search Wikipedia for article

	var url = "https://en.wikipedia.org/w/api.php?format=json&action=parse&section=0&prop=text&page=" + query;

	$.get(url, function(results) {

		console.log(results)

	});
	//pull title and first paragraph of search object

	//allow for certain number of searches to display
}

var normalSearchBtn = document.getElementById('normalSearch');

normalSearchBtn.addEventListener('click', function(event) {

	searchArticle( $('#normalSearch').value )

	});

//click a button to see a random Wikipedia entry. -->

var luckySearchBtn = document.getElementById('luckySearch');

	//add event listener
luckySearchBtn.addEventListener('click', function(event) {
	window.location.href='https://en.wikipedia.org/wiki/Special:Random';
});

//type in the search box, I can see a dropdown menu with autocomplete options for matching Wikipedia entries-->
