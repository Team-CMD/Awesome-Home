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
