document.addEventListener("DOMContentLoaded", function() {
    let theme = "bird";
    let cardsArray = [];


    // create array with card imgs
    for (i=1; i<=20; i++) {
        if (i<11) {
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
        // card.dataset.cardName = cardName;

        const img = document.createElement("img");
        img.src = `imgs/${cardName}.jpg`;
        img.alt = cardName;

        card.appendChild(img);
        cardsGrid.appendChild(card);
    });

    console.log(cardsArray);
});