// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeLoveCounter();
    initializeTabs();
    initializeCrystalBall();
    initializeDateWheel();
    initializeMemories();
    initializeLoveLetters();
    initializeMusicPlayer();
});

// Love Counter
function initializeLoveCounter() {
    const startDate = new Date('2024-01-01'); // Set your relationship start date
    const today = new Date();
    const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    gsap.to('#daysCounter', {
        duration: 2,
        innerHTML: days,
        snap: { innerHTML: 1 },
        ease: "power1.out"
    });
}

// Prediction Generator
const predictions = {
    romantic: [
        "We'll dance under the stars in Paris...",
        "Our future home will have a secret garden...",
        // Add more romantic predictions
    ],
    adventure: [
        "We'll go skydiving together...",
        "We'll travel to 50 countries...",
        // Add more adventure predictions
    ],
    funny: [
        "We'll become famous for our terrible cooking videos...",
        "Our future pet will become a social media star...",
        // Add more funny predictions
    ]
};

function generatePrediction() {
    const categories = Object.keys(predictions);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryPredictions = predictions[randomCategory];
    const prediction = categoryPredictions[Math.floor(Math.random() * categoryPredictions.length)];
    
    return { category: randomCategory, text: prediction };
}

// Crystal Ball Animation
function initializeCrystalBall() {
    const crystalBall = document.querySelector('.crystal-ball');
    const predictionBox = document.getElementById('predictionBox');
    
    crystalBall.addEventListener('click', () => {
        gsap.to(crystalBall, {
            duration: 0.5,
            scale: 1.1,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
            onComplete: () => {
                const prediction = generatePrediction();
                displayPrediction(prediction);
            }
        });
    });
}

// Date Wheel
function initializeDateWheel() {
    const dateIdeas = [
        "Picnic in the Park 🧺",
        "Movie Night 🎬",
        "Cooking Together 👩‍🍳",
        // Add more date ideas
    ];
    
    // Implementation of spinning wheel animation
    // Using Canvas API for the wheel
}

// Memory Gallery
function initializeMemories() {
    const memories = [
        { date: '2024-01-01', title: 'First Date', image: 'first-date.jpg' },
        { date: '2024-02-14', title: 'Valentine\'s Day', image: 'valentine.jpg' },
        // Add more memories
    ];
    
    // Implementation of memory gallery
}

// Love Letters
function initializeLoveLetters() {
    const letters = [
        "Dear love, remember when we first met...",
        "You make every day special because...",
        // Add more letters
    ];
    
    // Implementation of love letters feature
}

// Music Player
function initializeMusicPlayer() {
    const toggleButton = document.getElementById('toggleMusic');
    const audio = document.getElementById('bgMusic');
    
    toggleButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            toggleButton.textContent = '🔇';
        } else {
            audio.pause();
            toggleButton.textContent = '🎵';
        }
    });
}

// Tab System
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            switchTab(target);
        });
    });
}

// Add more functionality as needed...
