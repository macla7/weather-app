import { filter } from "domutils";
import "./style.scss";

const testJSON = import("./city-list/city.list.json");

function compare(a, b) {
  let comparison = 0;
  if (a.name > b.name) {
    comparison = 1;
  } else if (a.name < b.name) {
    comparison = -1;
  }
  return comparison;
}

const search = document.getElementById("search");
const searchDiv = document.querySelector(".searchDiv");

function dropDownCreator(arr, dropDownCont, searchVal) {
  dropDownCont.innerHTML = "";

  if (searchVal === "") {
    return;
  }

  arr.forEach((obj) => {
    const dropDown = document.createElement("p");
    dropDown.classList.add("dropdown");
    dropDown.innerHTML = `${obj.name}, ${obj.country}`;

    dropDownCont.appendChild(dropDown);
  });
}

const JSONArr = testJSON.then((module) => module.default.sort(compare));

function sliceArrCB(arr) {
  if (arr.length > 5) {
    return arr.slice(0, 5);
  }

  return arr;
}

function filterJSONCB(arr, searchVal, searchLen) {
  return arr.filter((obj) => obj.name.slice(0, searchLen) === searchVal);
}

search.addEventListener("keyup", () => {
  const searchVal = search.value;
  const searchLen = search.value.length;

  JSONArr.then((arr) => filterJSONCB(arr, searchVal, searchLen))
    .then((arr) => sliceArrCB(arr))
    .then((arr) => dropDownCreator(arr, searchDiv, searchVal));
});

console.log("End of sync");
