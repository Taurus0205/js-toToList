var elForm = document.querySelector(".todo-form");
var elInput = elForm.querySelector(".todo-input");
var elResult = elForm.querySelector(".result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var userInput = elInput.value.trim();

  var newLi = document.createElement("li");
  newLi.setAttribute("class", "todo-item");
  var newSpan = document.createElement("span");
  var newBtn = document.createElement("button");
  newBtn.textContent = "Delete";
  newBtn.setAttribute("class", "todo-item__btn");
  newBtn.setAttribute("type", "button");

  todo_list.appendChild(newLi);
  newLi.appendChild(newSpan);
  newLi.appendChild(newBtn);
  newSpan.textContent = userInput;
  elInput.value = null;
});
