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

// Functions

function renderCoffee(coffee) {

    //refactored the code to have the coffee name in a header
    // and coffee roast in a paragraph
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
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);

        } else if (coffee.completeList === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

tbody.innerHTML = renderCoffees(coffees);

// Event Listener

submitButton.addEventListener('click', updateCoffees);
