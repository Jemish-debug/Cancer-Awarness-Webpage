const quoteText = document.getElementById("quote");
const btn = document.getElementById("new-quote");

// Fetch from your own public GitHub raw file
const QUOTES_URL = "https://raw.githubusercontent.com/jemish-debug/Cancer-Awarness-Webpage/main/quotes.json";

let quotes = [];

async function loadQuotes() {
  try {
    const res = await fetch(QUOTES_URL);
    quotes = await res.json();
    showQuote();
  } catch (error) {
    quoteText.innerText = "Unable to load quotes.";
  }
}

function showQuote() {
  quoteText.style.opacity = 0;

  const random = quotes[Math.floor(Math.random() * quotes.length)];

  setTimeout(() => {
    quoteText.innerText = `"${random.q}" — ${random.a}`;
    quoteText.style.opacity = 1;
  }, 200);
}

btn.addEventListener("click", showQuote);
loadQuotes();
