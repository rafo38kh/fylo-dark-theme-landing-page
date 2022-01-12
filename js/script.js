const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const error = document.querySelector(".js-error");
const button = document.querySelector(".js-button");

const checkEmail = (inputs) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;

  return regex.test(inputs);
};

const checkInput = function (e) {
  const email = input.value.trim();

  if (email == null || !checkEmail(email) || email === "") {
    e.preventDefault();
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
  }
};

form.addEventListener("submit", checkInput);

window.onload = function () {
  input.value = "";
};
