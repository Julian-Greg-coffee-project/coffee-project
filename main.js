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

function addCoffee(e) {
    e.preventDefault();
    if (!addCoffeeName.value) {
        alert("Please enter a coffee name.")
    } else {
        // Push user new coffee inputs into coffees object
        coffees.push({id: coffees.length+1, name: `${addCoffeeName.value}`, roast: `${addRoast.value}`, list: "all"});
        //covert array to JSON string
        let jsonArr = JSON.stringify(coffees);
        //Store the array in local storage
        localStorage.setItem('newCoffeeList', jsonArr);
        // //get the string from localStorage
        // let arr = localStorage.getItem('newCoffeeList');
        // //covert string to valid object
        // let newArr = JSON.parse(arr);
        // Display new coffees object
        tbody.innerHTML = renderCoffees(coffees);
        // Clear input field and set roast to default light
        addCoffeeName.value = "";
    }
}

if(localStorage.getItem('newCoffeeList') === null)
{
    // Default Onload
    tbody.innerHTML = renderCoffees(coffees);
}
else
{
    //Store the array in local storage
    let arr = localStorage.getItem('newCoffeeList');
    //covert string to valid object
    let newArr = JSON.parse(arr);
    // Display new coffees object
    tbody.innerHTML = renderCoffees(newArr);
}

// Event Listeners

// Coffee name select button
submitButton.addEventListener('click', updateCoffees);

// Coffee name user input
coffeeNameInput.addEventListener('input', updateCoffees);

// Coffee name dropdown
roastSelection.addEventListener('input', updateCoffees);

// Display complete coffee list to include the added coffee
addSubmitCoffee.addEventListener('click', addCoffee);