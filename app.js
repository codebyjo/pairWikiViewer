	//search and see the resulting Wikipedia entries. -->
	//click a button to see a random Wikipedia entry. -->

	  var luckySearchBtn = document.getElementById('luckySearch');

	  //add event listener
	  luckySearchBtn.addEventListener('click', function(event) {
	    window.location.href='https://en.wikipedia.org/wiki/Special:Random';
	  });


	//type in the search box, I can see a dropdown menu with autocomplete options for matching Wikipedia entries-->
    