
var repository = [
{ name: "Bulbasaur", height: 0.7, types: ['grass','poison'], i:1 },
{ name: "Charizard", height: 1.7, types: ['fire','flying'], i: 2 },
{ name: "Wartortle", height: 1, types: ['water'], i: 3 }
];

repository.forEach(function(arrayitem) {
  document.write('<p>' + arrayitem.name + ' ' + arrayitem.height + ' ' + arrayitem.types + '</p>');
});
