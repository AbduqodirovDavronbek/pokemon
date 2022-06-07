const elPokemonList = document.querySelector(".pokemon__list");

for (let pokemon of pokemons) {
  //CREATE ELEMENT
  const newLi = document.createElement("li");
  const newImg = document.createElement("img");
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("h3");
  const newType = document.createElement("p");
  const newHeight = document.createElement("p");
  const newWeight = document.createElement("p");

  //SET ATTTIBUTE
  newLi.setAttribute(
    "class",
    "card mb-3 border border-dark rounded-4 border-2 border-opacity-75"
  );
  newLi.style.width = "18rem";
  newImg.classList.add("card-img-top");
  newImg.setAttribute("src", pokemon.img);
  newDiv.classList.add("card-body");
  newTitle.classList.add("card-title");
  newType.classList.add("card-text");
  newHeight.setAttribute("class", "card-text fw-bolder d-inline-block me-3");
  newWeight.setAttribute("class", "card-text fw-bolder d-inline-block");

  newTitle.textContent = pokemon.name;
  newType.textContent = pokemon.type;
  newHeight.textContent = pokemon.height;
  newWeight.textContent = pokemon.weight;

  //APPEND
  elPokemonList.appendChild(newLi);
  newLi.appendChild(newImg);
  newLi.appendChild(newDiv);
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newType);
  newDiv.appendChild(newHeight);
  newDiv.appendChild(newWeight);
}
