const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");


// Function to fetch a random quote
async function getQuote() {

    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    try {

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        // DOM Manipulation
        quoteText.textContent = `"${data.quote}"`;
        authorText.textContent = `— ${data.author}`;

    } 
    catch (error) {

        quoteText.textContent =
            "Something went wrong. Please try again.";

        authorText.textContent = "— Error";

        console.error(error);
    }
}


// Button click event
newQuoteBtn.addEventListener("click", getQuote);


// Load a quote when the page opens
getQuote();