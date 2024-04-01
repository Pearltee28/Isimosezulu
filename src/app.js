function handleSearchSubmit(event) {
  let searchInput = document.querySelector("#search-form-input");
  console.log(searchInput);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
