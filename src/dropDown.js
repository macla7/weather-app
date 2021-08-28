function compare(a, b) {
  let comparison = 0;
  if (a.name > b.name) {
    comparison = 1;
  } else if (a.name < b.name) {
    comparison = -1;
  }
  return comparison;
}

function dropDownCreator(arr, searchVal) {
  const searchDiv = document.querySelector(".search-div");
  searchDiv.innerHTML = "";

  if (searchVal === "") {
    return;
  }

  arr.forEach((obj) => {
    const dropDown = document.createElement("p");
    dropDown.classList.add("dropdown");
    dropDown.innerHTML = `${obj.name}, ${obj.country}`;

    searchDiv.appendChild(dropDown);
  });

  return "hello";
}

function sliceArrCB(arr) {
  if (arr.length > 5) {
    return arr.slice(0, 5);
  }

  return arr;
}

function filterJSONCB(arr, searchVal, searchLen) {
  return arr.filter((obj) => obj.name.slice(0, searchLen) === searchVal);
}

export { compare, dropDownCreator, sliceArrCB, filterJSONCB };
