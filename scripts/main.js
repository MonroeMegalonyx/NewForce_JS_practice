let favoriteSandwich = "Rueben";

let leastFavoriteSandwich = {
  sandwichName: "Mud sandwich",
  price: 11.99,
  ingredients: ["bread", "mud", "mustard"],
};

// console.log(leastFavoriteSandwich.ingredients[0]);

let menu = [
  {
    sandwichName: "Tomato sandwich",
    price: 6.99,
    ingredients: ["bread", "mayo", "tomato", "salt and pepper"],
  },
  leastFavoriteSandwich,
  {
    sandwichName: "Rueben",
    price: 9.99,
    ingredients: [
      "bread",
      "corned beef",
      "saurkraut",
      "thousand island dressing",
    ],
  },
];

// let ruebenIngredients = menu[2].ingredients;
// console.log("this is rueben ingredietns", ruebenIngredients)
// Loop through ingredients for just a rueben
// for(let i = 0; i < ruebenIngredients.length; i++){
//     console.log(ruebenIngredients[i])
// }

// Loop through all the sandwiches
// for(let i = 0; i < menu.length; i++){
//     console.log("this is i", i)
//     console.log(menu[i].sandwichName)
//     // console.log(menu[i].ingredients)
//     for(let j = 0; j < menu[i].ingredients.length; j++){
//         console.log(menu[i].ingredients[j])
//     }
// }

// console.log(menu[2].sandwichName)
// console.log(menu[2].ingredients[1]) // corned beef

// for(let i = 0; i < menu.length; i++){
//     if(menu[i].sandwichName === favoriteSandwich){
//         console.log("CHEF'S CHOICE", menu[i].sandwichName)
//     } else {
//         console.log(menu[i].sandwichName)
//     }

// }

// for (let i = 0; i < menu.length; i++) {
//   if (menu[i].price < 10) {
//     console.log(`SALE ${menu[i].sandwichName} - ${menu[i].price}`);
//   } else {
//     console.log(menu[i].sandwichName);
//   }
// }

// JOINT CODING PRACTICE
// Write a function that takes in the name of my franchise owner and returns an array of menu items with that person's name tacked onto the beginning

// function createFranchiseMenu(franchiseOwnerName) {
//    let franchiseMenuArray = [];
//    console.log("This franchise belongs to:", franchiseOwnerName);

// Loop over the menu array
//    for (let i = 0; i < menu.length; i++) {
// Modify every sandwich name to include the franchise owner's name
//    let currentSandwichObject = menu[i];
//    let currentSandwichName = currentSandwichObject.sandwichName;
// Object for new sandwich menu
//    let newSandwich = {
//        sandwichName: `${franchiseOwnerName}'s ${currentSandwichName}`
//    }
// Push it into the new franchise menu
//    franchiseMenuArray.push(newSandwich)
//  }

//   console.log(franchiseMenuArray)
//   return franchiseMenuArray;
// }

// Call the function
// let vincentMenu = createFranchiseMenu("Vincent");
// let angieMenu = createFranchiseMenu("Angie");
// let mandyMenu = createFranchiseMenu("Mandy");
// let thomasMenu = createFranchiseMenu("Thomas");

// console.log(vincentMenu)

// DAY 2 PRACTICE EXERCISES
// Write a function that loops over every item in the menu array and builds a sentence about the name and price of each sandwich. Example: "The tomato sandwich is 6.99."

for (let i = 0; i < menu.length; i++) {
  console.log(`The ${menu[i].sandwichName} is ${menu[i].price}`);
}

// Write a function that accepts a string of sandwich name, a number of price, and an array of ingredients. The function should build an object that represents a sandwich and add it to the array.

function fullSandwichInfo(sandwichName, price, ingredients) {
  let newSandwich = { sandwichName, price, ingredients };
  menu.push(newSandwich);
  console.log(menu);
}
fullSandwichInfo("Peanut Butter and Jelly ", 12.99, [
  "peanut butter",
  "jelly",
  "sourdough bread",
  "cheese",
]);

// Write a function that reduces every sandwich's price by 25% and returns a new array of discount sandwiches.

function discountedPrice() {
  let discountedSandwich = [];
  for (let i = 0; i < menu.length; i++) {
    let newSandwichPrice = (menu[i].price - menu[i].price * 0.25).toFixed(2);
    discountedSandwich.push(newSandwichPrice);
    console.log(menu[i].sandwichName, "is on sale for", newSandwichPrice);
  }
}

discountedPrice();

// Write a "Dairy Free" function that loops through your array of sandwiches and returns a new array of sandwiches that do NOT include cheese in their ingredient list. (Make sure you have at least one sandwich with cheese so you can test if this function works.)

function dairyFree() {
  let dairyFree = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes("cheese") === false) {
      dairyFree.push(menu[i].sandwichName);
    }
  }
  //return a new array of cheese-free sandwiches
  return dairyFree;
}

console.log(dairyFree());
