const input = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  function createBoxes(amount) {
    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      size += 10;
      elements.push(div);
    }

    boxesContainer.append(...elements);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = '';
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);