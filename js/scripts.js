let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';


  function add(pokemon) {
    if (typeof(pokemon) === "object"){
      pokemonList.push(pokemon);
    } 
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      let modalTitle = document.querySelector('.modal-title');
      let modalHeight = document.querySelector('.heightModalDiv');
      let modalImg = document.querySelector('.imgModal');

      modalHeight.innerText = 'Height: ' + pokemon.height
      modalImg.setAttribute('src', pokemon.imageUrl)
      modalTitle.innerText = pokemon.name
      
    });
  }

  function buttonListener (button, poke) {
    button.addEventListener('click', function (event) {
      showDetails(poke);
    });
  }

  function addListItem(pokemon) {
    let pokemonListUL = document.querySelector(".pokemon-list");
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal')
    button.classList.add('pokemonlist-item');
    button.classList.add('btn')
    listItem.appendChild(button);
    listItem.classList.add('group-list-item')
    pokemonListUL.appendChild(listItem);
    buttonListener(button, pokemon);
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
