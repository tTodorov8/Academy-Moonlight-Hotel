const dateInput = document.querySelector("#date-input");
const areaInput = document.querySelector("#area-input");
const tableInput = document.querySelector("#table-input");
const timeInput = document.querySelector("#time-input");
const chooseSmokeInput = document.querySelector("#choose-smoke");
const personsNumberInput = document.querySelector("#persons-number");

// fetch("https://bootcamp.nasbg.com/api/tables.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json

let request = new XMLHttpRequest();
request.open("GET", "https://bootcamp.nasbg.com/api/screens");
request.send();
console.log(request.responseText);
request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
});

let y = [1, 3, 4, 5, "dsf", "qwe", null, 2, "x", { name: "ivan", years: 24 }];

let ivan = y.slice(1, 3);

for (let i = 0; i < y.length; i++) {
  const element = y[i];
}

for (const key in y[9]) {
  console.log(key);
  if (Object.hasOwnProperty.call(y[9], key)) {
    const value = y[9][key];
    console.log(value);
  }
}
