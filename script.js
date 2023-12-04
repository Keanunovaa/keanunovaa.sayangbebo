const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
 question.innerHTML = "Aaaaa, ku juga sayangg sama beboooo";
 gif.src =
"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
const noBtnRect = noBtn.getBoundingClientRect();
const maxX = window.innerWidth - noßtnRect.width;
const maxY = window.innerHeight - noBtnRect.height;
  
const randomX = Math.floor(Math.random() * maxx);
const randomY = Math.floor(Math.random() * maxy);

noBtn.style.left = randomX + "px";
noßtn.style.top = randomY + "px"; 
});
