class Card {
    #number;
    // #color;
    #element;

    constructor(number) {
        this.#number = number;
        // this.#color = color;
        this.#element = this.createCard();
    }

    get number() {
        return this.#number;
    }
    set number(number) {
        this.#number = number;
    }

    getCardElement() {
        return this.#element;
    }

    // get color() {
    //     return this.#color;
    // }
    // set color(color) {
    //     this.#color = color;
    // }

    createCard()
    {
        let card = document.createElement('section'); // I create the card
        card.className = "card card-" + this.number;
        // card.id = "card-" + this.number;

        let numberElement = document.createElement('p');
        numberElement.className = "hidden";
        numberElement.textContent = this.number; // I put the card number in it

        card.appendChild(numberElement);

        return card;
    }
}

export { Card };