const quoteText = document.getElementById("quote");
const btn = document.getElementById("new-quote");

async function fetchQuote() {
  quoteText.style.opacity = 0;        // fade out
  btn.disabled = true;
  quoteText.innerText = "Loading...";

  try {
    const apiURL = "https://zenquotes.io/api/random";
    const proxyURL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(apiURL);

    const response = await fetch(proxyURL);
    const text = await response.text();
    const data = JSON.parse(text);

    setTimeout(() => {
      quoteText.innerText = `"${data[0].q}" — ${data[0].a}`;
      quoteText.style.opacity = 1;    // fade in
    }, 200);

  } catch (error) {
    console.error(error);
    quoteText.innerText = "Couldn't load quote. Please try again.";
    quoteText.style.opacity = 1;
  }

  btn.disabled = false;
}

btn.addEventListener("click", fetchQuote);
fetchQuote();
