"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light', list: 'all'},
    {id: 2, name: 'Half City', roast: 'light', list: 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light', list: 'all'},
    {id: 4, name: 'City', roast: 'medium', list: 'all'},
    {id: 5, name: 'American', roast: 'medium', list: 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', list: 'all'},
    {id: 7, name: 'High', roast: 'dark', list: 'all'},
    {id: 8, name: 'Continental', roast: 'dark', list: 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', list: 'all'},
    {id: 10, name: 'European', roast: 'dark', list: 'all'},
    {id: 11, name: 'Espresso', roast: 'dark', list: 'all'},
    {id: 12, name: 'Viennese', roast: 'dark', list: 'all'},
    {id: 13, name: 'Italian', roast: 'dark', list: 'all'},
    {id: 14, name: 'French', roast: 'dark', list: 'all'},
];

// Variables

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeNameInput = document.getElementById('coffee-name-input');
let addRoast = document.querySelector('#add-roast-selection');
let addCoffeeName = document.getElementById('add-coffee-name-input');
let addSubmitCoffee = document.querySelector('#add-submit');


// Functions

function renderCoffee(coffee) {
    let html = '<div>';
    html += '<div class="row">';
    html += '<div class="col-auto"><h5>' + coffee.name + '</h5></div>';
    html += '<div class="col-auto"><p>' + coffee.roast +'</p></div>';
    html += '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    //clears the input field for the new coffee name
    addCoffeeName.value = "";
    let userInput = coffeeNameInput.value
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        // Check for user selection or typed search to push elements in filtered coffee array
        if ((coffee.roast === selectedRoast || coffee.list === selectedRoast) && coffee.name.toLowerCase().includes(userInput.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee()
{
    let getNewRoast = addRoast.value;
    let getNewCoffee = addCoffeeName.value;
    let coffeeId = coffees.length + 1;
    let newId = Number(coffeeId);

    //create a new object
    let newObject = {};

    newObject.id = newId;
    newObject.name = getNewCoffee;
    newObject.roast = getNewRoast;
    newObject.list = 'all';

    coffees.push(newObject);
}

// Default Onload

tbody.innerHTML = renderCoffees(coffees);

// Event Listeners

// Coffee name select button
submitButton.addEventListener('click', updateCoffees);

// Coffee name user input
coffeeNameInput.addEventListener('input', updateCoffees);

// Coffee name dropdown
roastSelection.addEventListener('input', updateCoffees);

//Add new coffee roast
addRoast.addEventListener('input', addCoffee);

//Add new coffee name
addCoffeeName.addEventListener('input', addCoffee);

//Display complete coffee list to include the added coffee
addSubmitCoffee.addEventListener('click', updateCoffees);