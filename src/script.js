// DOM selects //
const subsForm = document.querySelector("#subs-form");
const subsInput = document.querySelector("#subs-input");
const errorShow = document.querySelector("#error-msg");

// Form event
subsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input value
  const inputValue = subsInput.value;
  const emailValidation = /\S+\@+\S+\.+\S+/;

  if (!inputValue) {
    showError(
      "Whoops! It looks like you forgot to add your email.",
      "error-show",
      "error-input"
    );
  } else if (!emailValidation.test(inputValue)) {
    showError(
      "Please provide a valid email address.",
      "error-show",
      "error-input"
    );
  } else {
    showError("Will get in touch.", "success", "success-input");
  }

  // Clear input field
  subsInput.value = "";
});

// Show error message function
function showError(text, action, borderColor) {
  subsInput.classList.add(borderColor);
  errorShow.classList.add(action);
  errorShow.innerText = text;

  // Remove
  setTimeout(() => {
    subsInput.classList.remove(borderColor);
    errorShow.classList.remove(action);
    errorShow.innerText = "";
  }, 2000);
}
