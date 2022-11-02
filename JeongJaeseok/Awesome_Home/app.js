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
  quote: "잘 먹겠습니다.",
  author: "いただきます。",
},
{
  quote: "오늘도 화이팅!",
  author: "きょうもファイト！",
},
{
  quote: "잘 시간이야.",
  author: "ねるじかんだよ",
},
{
  quote: "잘 먹었습니다.",
  author: "ごちうさまでした",
},
{
  quote: "다녀오겠습니다.",
  author: "いってきます",
},
{
  quote: "다녀왔습니다.",
  author: "ただいまー",
},
{
  quote: "괜찮습니다.",
  author: "だいじょうぶです",
},
{
  quote: "축하해.",
  author: "おめでとう",
},
{
  quote: "수고하셨습니다.",
  author: "おつかれさまでした",
},
{
  quote: "실례합니다.",
  author: "しつれいします",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//background image
/*const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

console.log(chosenImage);

const bgimage = document.createElement("img");

console.log(bgimage);

bgimage.src = `img/${chosenImage}`;

console.log(bgimage);

document.body.appendChild(bgimage);
*/