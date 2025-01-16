document.addEventListener("DOMContentLoaded", function() {
    let theme = "bird";
    let gameSize = 20;
    let cardsArray = [];


    // create array with card imgs
    for (i=1; i<=gameSize; i++) {
        if (i<=(gameSize/2)) {
            cardsArray[i-1] = `${theme}-${i}`;
        } else {
            cardsArray[i-1] = `${theme}-${i-10}`;
        }
    };

    // shuffle the cardsArray
    for (let i = cardsArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[randomIndex]] = [cardsArray[randomIndex], cardsArray[i]];
    }

    // link cards to HTML grid
    const cardsGrid = document.getElementById("cards-grid");

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

    // game logic
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    
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
        alert('YOU WON!')
    }

    cardsGrid.addEventListener("click", flipCard);

});