const wordsToGuess = ["LAUFEY", "PINK", "LOVE", "PULCHRITUDINOUS"];
let currentWordIndex = 0;
let guessedWord = "_".repeat(wordsToGuess[currentWordIndex].length);
let wrongGuesses = [];
let wrongGuessCount = 0;
let letterContent = [
    "Today’s the big day, chat! your 16th birthday^.^! Happiest birthday to the most amazing, beautiful, and downright incredible person I know. I honestly don’t even know where to start because there’s just so much I wanna say to you, but here goes.<br><br>" +
    "First off, I’m just so happy that I get to be part of your life. Like, seriously, JUST WHAT DID I DO TO DESERVE YOU? 16 years of you being in this world, and I’m beyond grateful that I get to be the one who gets to be called yours. When I think about the day we first met, I can’t help but laugh at how it all started during our silly gacha phase. Who would’ve thought that something so random would lead to something this special?",
        // Add more pages here if needed
    "You’re not just my girlfriend; You’re my best friend, my confidante, my muse, and honestly, so much more. I can talk to you about anything and everything, and you just get me, yk? Like, I can be my complete, unfiltered self around you, and you accept me for who i am, flaws and allat ig. That means more to me than I can put into words. <br><br>" +
   "And can I just take a moment to appreciate how absolutely stunning you are? You’ve been gorgeous since day one—those baby pics don’t lie, chat😂! but it’s not just about how you look, like, let’s be real, you’re drop-dead beautiful. It’s also about who you are as a person. You’ve got this warmth, this light that just radiates from you (no cap it's reaching for me here). You make everyone around you better, including me. I’m so proud of the person you’ve become and excited for the person you’re still becoming. The future’s looking amazing with you in it.",
    "I love every single moment we share. even when we’re apart, you’re always on my mind. I miss you like crazy when you’re not here, and it’s like there’s this empty space in my life that only you can fill. When you’re around, everything feels right. You’re the person i want by my side, no matter what life throws our way. In these months, you’ve already seen me at my best and my worst, and you still choose to be with me, and that’s something i don’t take for granted. <br><br>" +
    "I know i’ve been busy lately, and I haven’t been able to give you everything I want to, but trust me, i’m working on it. I’ve got so many plans for us, for you, and I’m gonna make sure those plans turn into reality. You deserve the world, and i’m determined to give you as much of it as i can.",
    "I love you so much, more than words can ever really express. You’ve brought so much joy, love, and light into my life, and i’m just so incredibly grateful for you. So here’s to you, my love—on your special day and every day after. Happy Birthday, and here’s to all the amazing things we’re gonna do together in the future. I love you, and I hope you have a wonderful day.",
];

document.getElementById('word-display').textContent = guessedWord;
document.getElementById('guess-button').addEventListener('click', handleGuess);

function handleGuess() {
    const guess = document.getElementById('guess-input').value.toUpperCase();
    document.getElementById('guess-input').value = '';

    if (guess && wordsToGuess[currentWordIndex].includes(guess)) {
        let updatedWord = '';
        for (let i = 0; i < wordsToGuess[currentWordIndex].length; i++) {
            if (wordsToGuess[currentWordIndex][i] === guess) {
                updatedWord += guess;
            } else {
                updatedWord += guessedWord[i];
            }
        }
        guessedWord = updatedWord;
        document.getElementById('word-display').textContent = guessedWord;

        if (guessedWord === wordsToGuess[currentWordIndex]) {
            showLetterModal();
            currentWordIndex++;
            if (currentWordIndex < wordsToGuess.length) {
                guessedWord = "_".repeat(wordsToGuess[currentWordIndex].length);
                document.getElementById('word-display').textContent = guessedWord;
                wrongGuesses = [];
                wrongGuessCount = 0;
            } else {
                document.getElementById('message').textContent = "You've unlocked the entire letter!";
            }
        }
    } else {
        wrongGuesses.push(guess);
        wrongGuessCount++;
        if (wrongGuessCount % 2 === 0) {
            provideHint();
        }
        document.getElementById('wrong-guesses').textContent = `Wrong guesses: ${wrongGuesses.join(', ')}`;
    }
}

function provideHint() {
    for (let i = 0; i < wordsToGuess[currentWordIndex].length; i++) {
        if (guessedWord[i] === '_') {
            guessedWord = guessedWord.substring(0, i) + wordsToGuess[currentWordIndex][i] + guessedWord.substring(i + 1);
            document.getElementById('word-display').textContent = guessedWord;
            break;
        }
    }
    document.getElementById('message').textContent = "Here's a hint!";
}

function showLetterModal() {
    const modal = document.getElementById('letter-modal');
    const letterDiv = document.getElementById('letter-content');

    letterDiv.innerHTML = letterContent[currentWordIndex]; // Use innerHTML to allow HTML tags

    modal.style.display = 'block';
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.animation = 'slideIn 0.5s ease-out forwards';
}

function hideLetterModal() {
    const modal = document.getElementById('letter-modal');
    const modalContent = document.querySelector('.modal-content');

    modalContent.style.animation = 'slideOut 0.5s ease-in forwards';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

// Event listener for closing the modal
const closeButton = document.querySelector('.close-button');
closeButton.onclick = function() {
    hideLetterModal(); // Trigger the hide animation when close button is clicked
};

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('letter-modal');
    if (event.target === modal) {
        hideLetterModal(); // Trigger the hide animation when clicking outside the modal
    }
};


// Remove "Wrong guesses:" label when there are no wrong guesses
function updateWrongGuessesDisplay() {
    const wrongGuessesDisplay = document.getElementById('wrong-guesses');
    if (wrongGuesses.length > 0) {
        wrongGuessesDisplay.textContent = `Wrong guesses: ${wrongGuesses.join(', ')}`;
    } else {
        wrongGuessesDisplay.textContent = '';
    }
}

function handleGuess() {
    const guess = document.getElementById('guess-input').value.toUpperCase();
    document.getElementById('guess-input').value = '';

    if (guess && wordsToGuess[currentWordIndex].includes(guess)) {
        let updatedWord = '';
        for (let i = 0; i < wordsToGuess[currentWordIndex].length; i++) {
            if (wordsToGuess[currentWordIndex][i] === guess) {
                updatedWord += guess;
            } else {
                updatedWord += guessedWord[i];
            }
        }
        guessedWord = updatedWord;
        document.getElementById('word-display').textContent = guessedWord;

        if (guessedWord === wordsToGuess[currentWordIndex]) {
            showLetterModal();
            currentWordIndex++;
            if (currentWordIndex < wordsToGuess.length) {
                guessedWord = "_".repeat(wordsToGuess[currentWordIndex].length);
                document.getElementById('word-display').textContent = guessedWord;
                wrongGuesses = [];
                wrongGuessCount = 0;
            } else {
                document.getElementById('message').textContent = "You've unlocked the entire letter!";
            }
        }
    } else {
        wrongGuesses.push(guess);
        wrongGuessCount++;
        if (wrongGuessCount % 2 === 0) {
            provideHint();
        }
        updateWrongGuessesDisplay();
    }
}

function playBackgroundMusic() {

    var audio = new Audio('thislove.mp3');

    audio.loop = true;
    audio.play().catch(function(error) {

        console.error("Autoplay was prevented. Please interact with the page to start playing background music.");
    });
    document.body.appendChild(audio);

    document.removeEventListener('click', playBackgroundMusic);
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', playBackgroundMusic);
});

