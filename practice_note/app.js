//username
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

//clock
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//quotes
const quotes = [
{
  quote: "1번 명언입니다~~.",
  author: "1번 작가",
},
{
  quote: "2번 명언입니다~~.",
  author: "2번 작가",
},
{
  quote: "3번 명언입니다~~.",
  author: "3번 작가",
},
{
  quote: "4번 명언입니다~~.",
  author: "4번 작가",
},
{
  quote: "5번 명언입니다~~.",
  author: "5번 작가",
},
{
  quote: "6번 명언입니다~~.",
  author: "6번 작가",
},
{
  quote: "7번 명언입니다~~.",
  author: "7번 작가",
},
{
  quote: "8번 명언입니다~~.",
  author: "8번 작가",
},
{
  quote: "9번 명언입니다~~.",
  author: "9번 작가",
},
{
  quote: "10번 명언입니다~~.",
  author: "10번 작가",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//background image
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

console.log(chosenImage);

const bgimage = document.createElement("img");

console.log(bgimage);

bgimage.src = `img/${chosenImage}`;

console.log(bgimage);

document.body.appendChild(bgimage);