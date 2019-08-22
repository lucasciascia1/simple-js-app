
var repository = [
{ name: "Bulbasaur", height: 0.7, types: ['grass','poison'], i:1 },
{ name: "Charizard", height: 1.7, types: ['fire','flying'], i: 2 },
{ name: "Wartortle", height: 1, types: ['water'], i: 3 }
];

for (var i = 0; i < repository.length; i++) {

  if (repository[i].height > 1.1) {
    document.write (repository[i].name + ' (height:' + repository[i].height + ')' + ' wow, that\'s big' + "<br>")
  }
  else {
    document.write(repository[i].name + ' (height:' + repository[i].height + ')' + "<br>");
  }





}
