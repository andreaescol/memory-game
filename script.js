document.addEventListener("DOMContentLoaded", function() {
    let theme = "bird";
    let gameSize = 20;
    let cardsArray = [];
    const cardsGrid = document.getElementById("cards-grid");
    const btnWin = document.getElementById("btn-win");
    const btnRestart = document.getElementById("btn-restart");

    // init Game
    createCardsArray(theme, gameSize, cardsArray);
    shuffleCards(cardsArray);
    createGrid(cardsArray, cardsGrid);

    // set up images array
    function createCardsArray(theme, gameSize, cardsArray) {
        for (let i = 1; i <= (gameSize/2); i++) {
            const cardName = `${theme}-${i}`;
            cardsArray.push(cardName, cardName); 
        }
    }

    // shuffle cards
    function shuffleCards(cardsArray) {
        for (let i = cardsArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [cardsArray[i], cardsArray[randomIndex]] = [cardsArray[randomIndex], cardsArray[i]];
        }
    }

    // create grid
    function createGrid(cardsArray, cardsGrid) {
        cardsArray.forEach((cardName) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.cardName = cardName;
    
            const img = document.createElement("img");
            img.src = `imgs/${cardName}.jpg`;
            img.alt = cardName;
    
            card.appendChild(img);
            cardsGrid.appendChild(card);
        });
    }

    // game logic
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let matchCounter = 0;
    
    function flipCard(event) {
        if (lockBoard) return;
        const card = event.target.closest(".card");

        if (!card || card.classList.contains("flipped")) return;
    
        card.classList.add("flipped");
    
        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            checkMatch();
        }
    }
    
    function checkMatch() {
        const isMatch = firstCard.dataset.cardName === secondCard.dataset.cardName;
    
        if (isMatch) {
            resetTurn();
            matchCounter++;
            if (matchCounter == (gameSize/2)) {
                winGame();
            }
        } else {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                resetTurn();
            }, 1000);
        }
    }

    
    function resetTurn() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    function winGame() {
        const winBanner = document.getElementById("winBanner");
        winBanner.classList.remove("hidden");
        const btnRestart = document.getElementById("btn-restart");
        btnRestart.classList.add("hidden");
    }

    function resetGame(){
        const allCards = document.querySelectorAll(".card");

        allCards.forEach((card) => {
            setTimeout(() => {
                card.classList.remove("flipped");
            }, 1000);
        });

        cardsGrid.innerHTML = "";
        
        resetTurn();
        matchCounter = 0;

        shuffleCards(cardsArray);

        createGrid(cardsArray, cardsGrid);
    };

    cardsGrid.addEventListener("click", flipCard);

    btnWin.addEventListener("click", () => {
        const winBanner = document.getElementById("winBanner");
        winBanner.classList.add("hidden");
        const btnRestart = document.getElementById("btn-restart");
        btnRestart.classList.remove("hidden");
        resetGame();
    });

    btnRestart.addEventListener("click", () => {
        resetGame();
    });

});