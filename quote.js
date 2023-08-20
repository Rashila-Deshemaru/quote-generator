document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.getElementById("quoteText");
    const categorySelect = document.getElementById("categorySelect");
    const previousBtn = document.getElementById("previousBtn");
    const randomBtn = document.getElementById("randomBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    let selectedCategory = "all";
    let filteredQuotes = [];

    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            category: "inspiration"
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            category: "leadership"
        },
        {
            text: "Your time is limited, don't waste it living someone else's life.",
            category: "success"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            category: "inspiration"
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            category: "success"
        },
        {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            category: "inspiration"
        }
    ];

    function displayQuote(index) {
        quoteElement.textContent = filteredQuotes[index].text;
    }

    function filterQuotesByCategory(category) {
        if (category === "all") {
            return quotes;
        } else {
            return quotes.filter(quote => quote.category === category);
        }
    }

    categorySelect.addEventListener("change", event => {
        selectedCategory = event.target.value;

        if (selectedCategory === "all") {
            filteredQuotes = quotes;
        } else {
            filteredQuotes = filterQuotesByCategory(selectedCategory);
        }

        currentIndex = 0;
        displayQuote(currentIndex);
        updateButtonVisibility();
    });

    previousBtn.addEventListener("click", () => {
        currentIndex = Math.max(0, currentIndex - 1);
        displayQuote(currentIndex);
        updateButtonVisibility();
    });

    randomBtn.addEventListener("click", () => {
        currentIndex = Math.floor(Math.random() * filteredQuotes.length);
        displayQuote(currentIndex);
        updateButtonVisibility();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = Math.min(filteredQuotes.length - 1, currentIndex + 1);
        displayQuote(currentIndex);
        updateButtonVisibility();
    });

    function updateButtonVisibility() {
        previousBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === filteredQuotes.length - 1;
    }

    // Font Size Update
    const decreaseFontBtn = document.getElementById("decreaseFontBtn");
    const increaseFontBtn = document.getElementById("increaseFontBtn");
    let fontSize = 16; // Default font size in pixels

    function updateFontSize(size) {
        quoteElement.style.fontSize = size + "px";
        displayQuote(currentIndex); // Display the current quote again after font size change
    }

    decreaseFontBtn.addEventListener("click", () => {
        fontSize = Math.max(12, fontSize - 2); // Ensure minimum font size of 12px
        updateFontSize(fontSize);
    });

    increaseFontBtn.addEventListener("click", () => {
        fontSize = Math.min(24, fontSize + 2); // Ensure maximum font size of 24px
        updateFontSize(fontSize);
    });

    // Dark Mode Toggle
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });

    // Initial setup
    filteredQuotes = filterQuotesByCategory(selectedCategory);
    displayQuote(currentIndex);
    updateButtonVisibility();
});
