// var youBudget = 0;
// var nameShop = "Мега";

let maney = prompt("Какой у вас бюджет");
let name = prompt("Введите название вашего магазина");
let time = 2;

let mainList = {
  budget: maney,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: false,
};
console.log(mainList);

// nameList.shopGoods[0] = prompt("Какой тип товара будем продавать?");
// nameList.shopGoods[1] = prompt("Какой тип товара будем продавать?");
// nameList.shopGoods[2] = prompt("Какой тип товара будем продавать?");
// переделаем с пом цикла

for (let i = 0; i < 5; i++) {
  let a = prompt("Какой тип товара будем продавать?");
  if (typeof a === "string" && a != "" && a.length < 50) {
    console.log("Все верно");
    mainList.shopGoods[i] = a;
    // } else {
  }
}

if (time < 0) {
  console.log("Такого не может быть");
} else if (time > 8 && time < 20) {
  console.timюдшп("Время работать");
} else if (time < 24) {
  console.log("Уже слишком поздно");
}

alert("Бюджет на 1 день = " + mainList.budget / 30);

console.log(mainList);
