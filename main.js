let input = document.querySelector("#input input");
let lengthInput = document.querySelector("#length");
let numbersCheckbox = document.querySelectorAll("#selectors .check")[0];
let charactersCheckbox = document.querySelectorAll("#selectors .check")[1];

let copy = document.querySelector("#copy")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "123456789";
let special = `##&_-()=%"*':/!?+`;

let generatePassword = () => {
  input.value = "";
  let password = "";
  let charsetToUse = charset;

  if (numbersCheckbox.checked) {
    charsetToUse += numbers;
  }

  if (charactersCheckbox.checked) {
    charsetToUse += special;
  }

  for (let i = 0; i < lengthInput.value; i++) {
    password += charsetToUse.charAt(Math.floor(Math.random() * charsetToUse.length));
  }

  input.value = password;
};

document.getElementById("btn").addEventListener("click", generatePassword);

generatePassword();

lengthInput.addEventListener("change", () => {
  if (lengthInput.value !== "" && lengthInput.value <= 50) {
    generatePassword();
  }

  else if (length.value < 50) {
    length.value = 8;
  }
});



numbersCheckbox.addEventListener("click", () => {
  generatePassword()
})


charactersCheckbox.addEventListener("click", () => {
  generatePassword()
})


copy.addEventListener("click", () => {
  input.select()

  navigator.clipboard.writeText(input.value)
  copy.innerHTML = `<i class="fa-solid fa-circle-check"></i>`

  setTimeout(() => {
    copy.innerHTML = `<i class="fa-regular fa-copy"></i>`

  }, 1000)

})