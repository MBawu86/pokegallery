// IPO approach Input Process Output

// constants and state (variables) data

// constant data
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

// state (variable) data
let pokemonData;

// cached element references
const $collection = $('#collection');

// attached event listeners
$collection.on('click', 'article.card', handleClick);

// functions
    //called immediately
    init();
    
function init(){
    getData()
}

function getData(){
// fetch data using AJAX
    $.ajax(BASE_URL).then(function(data){

// take the returned data and assign it to a global state variable
pokemonData = data;
// call render to visualize it to the DOM
    render();
    }, function(error){
        console.log('Error:', error);
    });
}

function handleClick(){
    alert('a card was clicked')
};

function render(){
    // map over the object inside of the pokemonData results array
    // dynamically generate htmml for each element in the array
    // add that html to our collection element
    // .map transforms data in an array ( `` create template)

    const htmlArray = pokemonData.results.map(pokemon => {
        return`
        <article class="card flex-ctr">
         <h3>${pokemon.name}</h3>
         </article>
         `;
    });
    $collection.html(htmlArray);

}
 