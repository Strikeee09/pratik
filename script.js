// Get references to the button and the text
const button = document.getElementById("myButton");
const textDisplay = document.getElementById("displayText");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Hide the button and display the text
  button.style.display = "none";
  textDisplay.style.display = "block";
});
