import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const newNumsArray = numbersArray.filter(num => num % 2 === 0);
  newNumsArray.forEach(number => {
    const li = document.createElement('li');
    li.innerHTML = number;
    ul.appendChild(li);
  })
});
