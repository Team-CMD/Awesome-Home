const quotes = [
    {
        quote: "재즈가 뭐라고 생각하세요?",
        author: "주호민",
    },
    {
        quote: "개같이 벌어서 개같이 후회",
        author: "지민우",
    },
    {
        quote: "엄청 커다란 모기가 내 팔을 물었어.",
        author: "이광수",
    },
    {
        quote: "소 잃고 개같이 후회",
        author: "지민우",
    },
    {
        quote: "네?",
        author: "이상구",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
