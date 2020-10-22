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
]

for (let i = 0; i < pokemonList.length; i++) {
    document.write("<h2>" + pokemonList[i].name + "</h2><br>" + "<h3>type: </h3>" + pokemonList[i].type + "<br>");
    if (pokemonList[i].height >= 1.5) {
      document.write("<h3>height: </h3>" + pokemonList[i].height + " Wow that is big!! <br><br>");
    }  else if (pokemonList[i].height < 1.5) {
      document.write("<h3>height: </h3>" + pokemonList[i].height + "<br><br>")
    }
}