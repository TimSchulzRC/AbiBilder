function createElement(numb) {
  let newImage = document.createElement("img");
  newImage.setAttribute("data-src", `images/${numb}.jpg`);
  newImage.setAttribute("alt", "...");
  newImage.setAttribute("loading", "lazy");

  let newDiv = document.createElement("div");

  newDiv.classList.add("img-box");

  document.querySelector(".images").appendChild(newDiv).appendChild(newImage);
}

for (i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i.toString();
  } else {
    i = i.toString();
  }
  createElement(i);
}
