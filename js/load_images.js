function createElement(numb) {
  let newImage = document.createElement("img");
  newImage.classList.add("gallery-img");
  newImage.setAttribute("data-src", `images/${numb}.jpg`);
  newImage.setAttribute("alt", "...");
  newImage.setAttribute("loading", "lazy");

  let a = document.createElement("a");
  a.classList.add("img-box");
  a.setAttribute("href", `images/${numb}.jpg`);
  a.setAttribute("data-lightbox", "images");

  document.querySelector(".gallery").appendChild(a).appendChild(newImage);
}

for (i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i.toString();
  } else {
    i = i.toString();
  }
  createElement(i);
}
