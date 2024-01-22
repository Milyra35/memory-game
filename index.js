import { Card } from './Card';

window.addEventListener("DOMContentLoaded", function() {

    let cardsArray = [1, 2, 3, 4, 5, 6, 7, 8];

    function shuffleCards(array)
    {
        for(let i= array.length - 1; i>0; i--)
        {
            let j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateCards(numbers) 
    {
        let main = document.querySelector("body main");
        let shuffledCards = []; // I create an empty array

        numbers.forEach(number => {
            for (let j = 0; j < 2; j++) {
                let card = new Card(number);
                shuffledCards.push(card);
            }
        });

        shuffleCards(shuffledCards);

        shuffledCards.forEach(card => {
            main.appendChild(card.getCardElement());
        });

        return shuffledCards;
    }

    function clickOnTheCard(cards) 
    {
        let number = document.querySelectorAll('.hidden');
        let flippedCards = [];
        let win = 0;

        cards.forEach(card => {
            card.getCardElement().addEventListener("click", function () {
                if (!card.getCardElement().classList.contains('flipped')) {
                    card.getCardElement().querySelector('.hidden').classList.remove('hidden');
                    card.getCardElement().classList.add('flipped');
                    flippedCards.push(card);
                    console.log(flippedCards);
    
                    if (flippedCards.length === 2) {
                        if (flippedCards[0].number === flippedCards[1].number) 
                        {
                            win++;
                            flippedCards = [];
    
                            if (win === cards.length / 2) {
                                let main = document.querySelector('body main');
                                let winMessage = document.createElement('p');
                                winMessage.className = "win";
                                winMessage.textContent = "Congratulations !";
                                main.appendChild(winMessage);

                                flippedCards = [];
                            }
                        }
                        else {
                            setTimeout(() => {
                                flippedCards.forEach(card => {
                                    card.getCardElement().classList.remove('flipped');
                                    card.getCardElement().querySelector('.card p').classList.add('hidden');
                                });
                                flippedCards = [];
                            }, 1000);
                        }
                    }
                }
            });
        });
    }
    
    let cards = generateCards(cardsArray);
    clickOnTheCard(cards);
})