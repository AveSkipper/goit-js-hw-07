const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", () => {
  const trimmedName = nameInput.value.trim();
  if (trimmedName === "") {
    nameOutput.textContent = `Anonimous`;
  }
  nameOutput.textContent = trimmedName;
});