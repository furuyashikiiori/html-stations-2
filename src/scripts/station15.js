function displayList() {
  // const fruitElements = document.getElementById("fruits");
  // const ul = document.createElement("ul");

  const fruitsDiv = document.getElementById("fruits");
  fruitsDiv.innerHTML = `<ul><li>${fruitsDiv.innerHTML
    .replace(/<p>/g, "<li>")
    .replace(/<\/p>/g, "</li>")}</ul>`;
}
