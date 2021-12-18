$(function() { //protects my data

// Variables
const URL = 'https://pokeapi.co/api/v2/pokemon/' //API database
// Element References
const $form = $('form')
const $input = $('input[type="text"]');

// Event Listeners
$form.on('submit', handleGetData);

// Functions
function handleGetData(evt) {
    evt.preventDefault(); //stops the page from refreshing on input
    const userInput = $input.val()
    if (!userInput) return;
    $input.val('') // returns an empty string on enter instead of error
    
    $.ajax(URL + userInput).then(function (data) {
        render(data);
    }, function (error) {
        console.log('something happened') //lets the DOM know of any errors
        console.log(error);
    })
}

function render(pokeData) {
    $('main').html(`
    <h3>Name: ${pokeData.name}</h3>
    <p>Pokedex Order: ${pokeData.order}</p>
    `); //Searches API for pokemon name and pokedex order
}
})