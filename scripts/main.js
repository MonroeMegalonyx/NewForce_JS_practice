console.log("Welcome to the main module");

var GoodSandwich;

GoodSandwich = "pb&j";

var BadSandwich = {
  name: "Baloney Sandwich",
  price: 5.21,
  ingredients: ["bread", "baloney", "mustard"],
};

console.log(BadSandwich.ingredients[0]);

let menu = [
  {
    name: "Baloney Sandwich",
    price: 19.99,
    ingredients: ["bread", "baloney", "mustard"],
  },
  {
    name: "Tomato Sandwich",
    price: 7.5,
    ingredients: ["bread", "Tomato", "mustard"],
  },
  {
    name: "Mud Sandwich",
    price: 4.99,
    ingredients: ["bread", "mud", "mustard"],
  },
];

for (let i = 0; i < menu.length; i++) {
  console.log("this is i", i);
  console.log(menu[i].name);
}

let arraylengthofTomatoIngredients;

for (let i = 0; i < arraylengthofTomatoIngredients; i++) {
  console.log("this is i", i);
  console.log(menu[1].ingredients[i]);
}

console.log(menu[(2, 0)]);

console.log("BREAK");

for (let i = 0; i < menu.length; i++) {
  if (menu[i].price < 10) {
    console.log("SALE", menu[i].name);
  } else {
    console.log(menu[i].name);
  }
}
