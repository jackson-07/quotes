async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return {
            content: data.content,
            author: data.author,
        };
    } catch (error) {
        console.error('Error fetching quote:', error);
        alert('Error fetching quote: ' + error.message);
        return {
            content: 'An error occurred',
        };
    }
}

async function updateQuote() {
    const quoteContainer = document.getElementById('quoteContainer');
    const { content, author } = await getQuote();
    quoteContainer.innerHTML = `<blockquote>"${content}"</blockquote><p>- ${author}</p>`;
}

const getQuoteBtn = document.getElementById('getQuoteBtn');
getQuoteBtn.addEventListener('click', updateQuote);
