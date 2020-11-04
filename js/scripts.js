// SETTING INITIAL LIST TO PULL FROM WILL LATER USE API

let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', ' poison']
    },
    {name: 'Ivysaur',
    height: 1,
    type: ['grass', ' poison']
    },
    {name: 'Venusaur',
    height: 2,
    type: ['grass', ' poison']
    },
    {name: 'Charmander',
    height: 0.6,
    type: ['fire']
    },
    {name: 'Charmeleon',
    height: 1.1,
    type: ['fire']
    },
    {name: 'Charizard',
    height: 1.7,
    type: ['fire', ' flying']
    },
    {name: 'Squirtle',
    height: 0.5,
    type: ['water']
    },
    {name: 'Wartortle',
    height: 1,
    type: ['water']
    },
    {name: 'Blastoise',
    height: 1.6,
    type: ['water']
    }
  ];

  function add(pokemon) {
    if (typeof(pokemon) === "object" && Object.keys(pokemon).length === 3){
      pokemonList.push(pokemon);
    }
    
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function buttonListener (button, poke) {
    button.addEventListener('click', function (event) {
      showDetails(poke.name);
    });
  }

  function addListItem(pokemon) {
    let pokemonListUL = document.querySelector(".pokemon-list");
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemonlist-item');
    listItem.appendChild(button);
    pokemonListUL.appendChild(listItem);
    buttonListener(button, pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

// FOREACH LOOP TO DOCUMENT.WRITE TO INDEX.HTML DEPENDING ON POKEMON HEIGHT AND TYPE 
function displayPokemon() {
  let pokemonList = pokemonRepository.getAll();
  pokemonList.forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
})};


pokemonRepository.add({name: 'Pidgey', height: 0.4, type: ['normal', ' flying']});
displayPokemon();
