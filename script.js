// Get the swatches and the image element
var yellowSwatch = document.getElementById("yellow");
var blueSwatch = document.getElementById("blue");
var redSwatch = document.getElementById("red");
var whiteSwatch = document.getElementById("white");
var greenSwatch = document.getElementById("green");
var image = document.getElementById("product-photo");

// Get the price element
var price = document.getElementById("price");

// Add an event listener to the yellow swatch that shows the yellow image and updates the price when the swatch is hovered over
yellowSwatch.addEventListener("mouseover", function() {
  console.log("Yellow");
  image.src = "imgs/spiderposter4.jpg";
  price.innerHTML = "$24.99";
  price.style.color = "green";
  price.innerHTML += " (Sale)";
});

// Add an event listener to the yellow swatch that resets the price when the swatch is not hovered over
yellowSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});

// Add an event listener to the blue swatch that shows the blue image and updates the price when the swatch is hovered over
blueSwatch.addEventListener("mouseover", function() {
  image.src = "imgs/spiderposter3.jpg";
  price.innerHTML = "$39.99";
  price.style.color = "black";
});

// Add an event listener to the blue swatch that resets the price when the swatch is not hovered over
blueSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});

// Add an event listener to the red swatch that shows the red image and updates the price when the swatch is hovered over
redSwatch.addEventListener("mouseover", function() {
  image.src = "imgs/spiderposter2.jpg";
  price.innerHTML = "$19.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});

// Add an event listener to the red swatch that resets the price when the swatch is not hovered over
whiteSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});

// Define a function to reset the price to its default state

whiteSwatch.addEventListener("mouseover", function() {
  image.src = "imgs/spiderposter1.jpg";
  price.innerHTML = "$27.99";
  price.style.color = "green";
  price.innerHTML += " (Sale)";
});

// Add an event listener to the red swatch that resets the price when the swatch is not hovered over
greenSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});

// Define a function to reset the price to its default state

greenSwatch.addEventListener("mouseover", function() {
  image.src = "imgs/spiderposter5.jpg";
  price.innerHTML = "$14.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});