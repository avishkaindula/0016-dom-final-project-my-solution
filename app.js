let inputElement = document.querySelector("input");

function characterCount() {
  let lengthText = inputElement.value.length;
  console.log(lengthText);
  let numberOfCountDown = 60 - lengthText;
  console.log(numberOfCountDown);
  let countDown = document.querySelector("p");
  countDown.textContent = numberOfCountDown;

  // let valueText = inputElement.value;
  // let lengthOfText = valueText.length;
  // the above pair of lines are actually the same code written in the 4th line.

  // let countDown = document.querySelector("p");
  // let textCharCount = toString(numberOfCountDown);
  // countDown.textContent = textCharCount;
  // We don't have to convert the number to string and assign the string value like this
  // This code doesn't work and it gives an [object undefined] error
  // Instead we can directly assign the number value of numberOfCountDown to the <p> element
  typeOfTheVariable = typeof numberOfCountDown;
  console.log(typeOfTheVariable);
  // This is how we find out the type of the output value.
}

inputElement.addEventListener("input", characterCount);
