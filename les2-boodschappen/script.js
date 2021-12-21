console.log("Script is geladen!");

const groentevak = document.getElementById('groente')
const fruitvak = document.getElementById('fruit')

function zetInFruitLa(fruit){
    console.log(fruit)

    const nieuwElemet = document.createElement('h2');
    nieuwElemet.innerHTML = fruit;
    nieuwElemet.className = 'rood';
    fruitvak.appendChild(nieuwElemet);
}

function zetInGroenteLa(groente){
    console.log(groente)
    const nieuwElemet = document.createElement('h2');
    nieuwElemet.innerHTML = groente;
    nieuwElemet.className = 'Groen';
    groentevak.appendChild(nieuwElemet);
}