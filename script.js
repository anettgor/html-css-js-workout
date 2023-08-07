const box = document.querySelector(".box");

const randomHex = () => Math.floor(Math.random() * 16777215).toString(16);

setInterval(() => {
  box.style.borderColor = `#${randomHex()}`;
}, 3000);
