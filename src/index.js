import "./style.scss";
import { gifKey, weatherKey } from "./apiKeys";
import { getGifs, getWeather } from "./fetchAPIs";
import { compare, dropDownCreator, sliceArrCB, filterJSONCB } from "./dropDown";
import {
  displayReport,
  makeReportDes,
  makeReportNums,
  makeImageCB,
} from "./weatherReport";

// Dynamic Import
const testJSON = import("./city-list/city.list.json");

const search = document.getElementById("search");
const form = document.getElementsByTagName("form")[0];

function searcher() {
  const searchVal = search.value.split(", ");
  console.log(searchVal);

  const jsonWeather = getWeather(searchVal, weatherKey);
  jsonWeather.then(
    (json) => {
      console.log(json);
      makeReportDes(json);
      makeReportNums(json);
      displayReport();
      getGifs(json.weather[0].main, gifKey).then((gifData) =>
        makeImageCB(gifData)
      );
    },
    (err) => {
      console.log("Rejecting.. -->", err);
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searcher();
});

const JSONArr = testJSON.then((module) => module.default.sort(compare));

function dropDownEL() {
  const dropDowns = document.querySelectorAll(".dropdown");

  dropDowns.forEach((choice) => {
    choice.addEventListener("click", () => {
      search.value = choice.innerHTML;
      searcher();
    });
  });
}

search.addEventListener("keyup", () => {
  const searchVal = search.value;
  const searchLen = search.value.length;

  JSONArr.then((arr) => filterJSONCB(arr, searchVal, searchLen))
    .then((arr) => sliceArrCB(arr))
    .then((arr) => dropDownCreator(arr, searchVal))
    .then(() => dropDownEL());
});

console.log("End of sync");
