let tweetPrint;
document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const button = document.getElementById("new-quote");
    const quote = document.getElementById("quote");
    const cite = document.getElementById("author");

    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
            // Update DOM elements
            quote.textContent = data.content;
            cite.textContent = data.author;
            // reduce text size of larger length item
            if (quote.textContent.length > 80) {
                quote.classList.add('long-quote')
            } else {
                quote.classList.remove('long-quote')
            }
            tweetPrint = `${quote.textContent} - ${cite.textContent}`
            console.log(tweetPrint)
        } else {
            quote.textContent = "An error occured";
            console.log(data);
        }
        tweetPrint = `${quote.textContent} - ${cite.textContent}`;
        console.log(tweetPrint);
    }

    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);

    // call updateQuote once when page loads
    updateQuote();
});

//Tweet Quote
const twitterbtn = document.getElementById('twitter')
function tweetQuote () {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetPrint}`;
    window.open(twitterUrl, '_blank')
}

// event listnere for the tweet

twitterbtn.addEventListener('click', tweetQuote);

// event listnere for the time
function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    return currentDate;
}
const timeTeller = document.getElementById('timeTeller');
timeTeller.innerText = getCurrentDate()
console.log(getCurrentDate())
