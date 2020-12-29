//const movies = [
  //  {name: 'Iron Man'},
    //{name: 'Iron Man 2'},
    //{name: 'Iron Man 3'}
  //];
  
  //const searchInput = document.querySelector('.gandu');
  //const suggestionsPanel = document.querySelector('.suggestions');
  
  //searchInput.addEventListener('keyup', function() {
    //const input = searchInput.value;
    //suggestionsPanel.innerHTML = '';
    //const movies = movies.filter(function(movies) {
      //return movies.name.toLowerCase().startsWith(input);
    //});
    //suggestions.forEach(function(suggested) {
      //const movies = document.createElement('div.movies');
      //movies.innerHTML = suggested.name;
      //suggestionsPanel.appendChild(movies);
    //});
    //if (input === '') {
      //suggestionsPanel.innerHTML = '';  
    //}
  //})

  var input = document.getElementById("myinput");
  var awesomplete = new Awesomplete(input, {
      list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"],
      minChars: 1
    });

    setTimeout(function(){

    }, 3000);
