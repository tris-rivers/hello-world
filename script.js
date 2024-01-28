const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "yieee HAHAHA (screenshot this page and send to bea as proof of acceptance)";
  gif.src =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWRrcW40M2w2OWwydjljc3MyaGNraW1wdHJvdjdxemt5eTNyMXlpNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L0rMNF5j2FbypBB4Le/giphy.gif";
    // "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});