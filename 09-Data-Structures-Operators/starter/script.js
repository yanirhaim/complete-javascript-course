'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function({starterIndex, mainIndex, time, address}){
    console.log(`Your order has been recieved! You ordered ${this.starterMenu[starterIndex]} with ${this.mainMenu[mainIndex]}`);
  }

};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Bosques de Castilla',
  mainIndex: 2,
  starterIndex: 2,
});

// Array DeStructuring 
const arr = [1,2,3];
const [x,y,z] = arr;
console.log(x,y,z);

const [first, , second] = restaurant.categories;
console.log(first, second);

// Object DeStructuring
const {name, openingHours, categories} = restaurant;
//console.log(name, openingHours, categories);  
const {name: restauran_name, openingHours: hours} = restaurant;
//console.log(restauran_name, hours);
const {menu = [], starterMenu: starter = []} = restaurant;
console.log(menu, starter);

// Nested Objects
const {fri: {open:o, close:c}} = openingHours;
console.log(o, c);


// SpreadOperator
const array = [1,2,4];
const second_arr = [5,6, ...array];
