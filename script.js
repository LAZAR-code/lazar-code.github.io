const body = document.body;
const root = document.querySelector("html");
const squares = document.getElementsByClassName("square");
const made = document.getElementById("madeWithLove");

const square4 = document.getElementsByClassName("circle4")[0];
const square5 = document.getElementsByClassName("circle5")[0];

const css = document.getElementsByTagName("link")[0];

console.log(body);

body.addEventListener("mousemove", function (e) {
  let x = e.pageX / window.innerWidth;
  let y = e.pageY / window.innerHeight;

  for (let i = 0; i < 3; i++) {
    squares[i].style.transform = `translate(${-x * 20}%, ${-y * 10}%)`;
    squares[i].style.transition = "none";
  }
});

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

// Following extra cursor element
const follower1 = document.createElement("div");
const follower2 = document.createElement("div");
const follower3 = document.createElement("div");
const follower4 = document.createElement("div");
follower1.classList.add("cursor", "cursor__follower1");
root.appendChild(follower1);
follower2.classList.add("cursor", "cursor__follower2");
root.appendChild(follower2);
follower3.classList.add("cursor", "cursor__follower3");
root.appendChild(follower3);
follower4.classList.add("cursor", "cursor__follower4");
root.appendChild(follower4);

root.addEventListener("mousemove", (e) => {
  setPosition(follower1, e);
  setPosition(follower2, e);
  setPosition(follower3, e);
  setPosition(follower4, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

function switchToRetro() {
  css.href = "Retro.css";
  made.textContent="Back";
}

function switchToNeumorph() {
  css.href = "Neumorphism.css";
  made.textContent = "Back";
}

function switchToNormal() {
  css.href = "style.css";
  made.textContent = "Made with Love by Lazar";
}

square4.addEventListener("click", switchToRetro);
square4.addEventListener("mouseover", () => {
  cursor.style.backgroundColor = "purple";
});
square4.addEventListener("mouseout", () => {
  cursor.style.backgroundColor = "white";
});

square5.addEventListener("click", switchToNeumorph);
square5.addEventListener("mouseover", () => {
  cursor.style.backgroundColor = "purple";
});
square5.addEventListener("mouseout", () => {
  cursor.style.backgroundColor = "white";
});

made.addEventListener("click", switchToNormal);
