window.addEventListener("DOMContentLoaded", function() {
    
    let cards = [1, 2, 3, 4, 5, 6, 7, 8];

    function shuffleCards(array)
    {
        for(let i= array.length - 1; i>0; i--)
        {
            let j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateCards(cards) 
    {
        let main = document.querySelector("body main");

        shuffleCards(cards);

        let shuffledCards = []; // I create an empty array

        for(let i=0; i<cards.length; i++)
        {
            for(let j=0; j<2; j++)
            {
                let card = document.createElement("section"); // I create the card
                card.className = "card";
                card.id = "card-" + cards[i];
                let number = document.createElement("p");
                number.className = 'hidden';
                number.textContent = cards[i]; // I put the card number in it
                
                shuffledCards.push(card); // I push the created card in it

                card.appendChild(number);
            }
        }

        shuffleCards(shuffledCards); // I shuffle the created array to randomly display them in the DOM

        shuffledCards.forEach(function(card) {
            main.appendChild(card); 
        })
    }

    generateCards(cards);

    function clickOnTheCard() 
    {
        let cards = document.querySelectorAll('.card');
        let number = document.querySelectorAll('.hidden');
        let flippedCards = [];
        let win = 0;

        for(let i=0; i<cards.length; i++)
        {
            cards[i].addEventListener("click", function() {
                if(!cards[i].classList.contains('flipped'))
                {
                    number[i].classList.remove('hidden');
                    cards[i].classList.add('flipped');
                    flippedCards.push(cards[i]);

                    if(flippedCards.length === 2)
                    {
                        if(flippedCards[0].id === flippedCards[1].id)
                        {
                            // console.log(flippedCards);
                            win++;

                            if(win === cards.length / 2)
                            {
                                console.log("You've won !");
                                let main = document.querySelector('body main');
                                let winMessage = document.createElement('p');
                                winMessage.className = "win";
                                winMessage.textContent = "Congratulations !";
                                main.appendChild(winMessage);
                            }
                        }
                        else
                        {
                            flippedCards.forEach(function(card) {
                                card.classList.remove('flipped');
                                number[i].classList.add('hidden');
                            })
                        }
                        flippedCards = [];
                    }
                }
            })
        }
    }

    clickOnTheCard();
})