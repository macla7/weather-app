async function getGifs(searchString, gifKey) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${gifKey}&s=${searchString}`
    );

    return await response.json();
    // img.src = gifData.data.images.original.url;
  } catch (error) {
    return error;
    // err.innerHTML = "You've got to search for something!";
  }
}

async function getWeather(searchVal, weatherKey) {
  const searchDiv = document.querySelector(".search-div");
  searchDiv.innerHTML = "";

  try {
    let response;
    if (searchVal.length === 2) {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchVal[0]},${searchVal[1]}&appid=${weatherKey}&units=metric`
      );
    } else if (searchVal[0] !== "") {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchVal[0]}&appid=${weatherKey}&units=metric`
      );
    }

    const weatherJSON = await response.json();

    console.log(weatherJSON);

    return weatherJSON;
  } catch (error) {
    console.log("Your error is boii:", error);
    throw error;
  }
}

export { getGifs, getWeather };
