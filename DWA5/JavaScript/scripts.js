const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Scenario: Validation when values are missing
  if (dividend === "" || divider === "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    // An invalid division should log an error in the console
  } else if (dividend < 1 || divider < 1) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    console.error("Division not performed. Invalid number provided. Try again");
    // Providing anything that is not a number should crash the program
  } else if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML =
      "<h1>Something critical went wrong. Please reload the page</h1>";
    console.error("Something critical went wrong. Please reload the page");
    // Scenario: Dividing numbers result in a decimal number
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});
