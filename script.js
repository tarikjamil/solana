// Get the plus icon element
var plusIcon = document.querySelector(".quantity--icon.is--plus");

// Get the minus icon element
var minusIcon = document.querySelector(".quantity--icon.is--minus");

// Get the input element
var quantityInput = document.querySelector(".cart--quantity");

// Add a click event listener to the plus icon
plusIcon.addEventListener("click", function () {
  // Increment the input value by 1
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Add a click event listener to the minus icon
minusIcon.addEventListener("click", function () {
  // Get the current input value
  var currentValue = parseInt(quantityInput.value);

  // Only decrement if the current value is greater than 1
  if (currentValue > 1) {
    // Decrement the input value by 1
    quantityInput.value = currentValue - 1;
  }
});