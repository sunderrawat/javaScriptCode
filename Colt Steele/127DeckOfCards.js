

//old way
// const mainDeck =makeDeck();

// function makeDeck(){
//     const deck =[];
//     const suits =['Hearts', 'Diamonds', 'Spades', 'Clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//     for(let value of values.split(',')){
//         for(let suit of suits){
//             deck.push({
//                 value,
//                 suit
//             })
//         }
//     }
//     return deck;
// }

// function drawCard(deck){
//     return deck.pop();
// }

// const myDeck =makeDeck();
// const card1 =drawCard(myDeck);

const myDeck ={
    deck:[],
    drawnCards:[],
    suits: ['Hearts', 'Diamonds', 'Spades', 'Clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck(){
        const {suits,values,deck}=this;
        for(let value of values.split(',')){
            for(let suit of suits){
                deck.push({
                    value,
                    suit
                })
            }
        }
       // return deck;
    },
    drawSingleCard(){
        const card= this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiCards(numCards){
        const cards =[];
        for(let i=0; i< numCards; i++){
            cards.push(this.drawSingleCard());
        }
        return cards;
    },
    shuffle(){
        const {deck}=this;
        //loop over array backwards
        for(let i =deck.length-1; i>0; i--){
            //pick random index before current element
            let j= Math.floor(Math.random()*(i+1));
            //swap
            [deck[i], deck[j]]=[ deck[j], deck[i]]
        }
    }
}

myDeck.initializeDeck();
myDeck.shuffle();
console.log(myDeck.deck);
console.log(myDeck.drawMultiCards(5))
console.log(myDeck.deck);


//creating a deck factory

const makeMyDeck =() =>{
    return {
        deck:[],
        drawnCards:[],
        suits: ['Hearts', 'Diamonds', 'Spades', 'Clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initializeDeck(){
            const {suits,values,deck}=this;
            for(let value of values.split(',')){
                for(let suit of suits){
                    deck.push({
                        value,
                        suit
                    })
                }
            }
           // return deck;
        },
        drawSingleCard(){
            const card= this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        drawMultiCards(numCards){
            const cards =[];
            for(let i=0; i< numCards; i++){
                cards.push(this.drawSingleCard());
            }
            return cards;
        },
        shuffle(){
            const {deck}=this;
            //loop over array backwards
            for(let i =deck.length-1; i>0; i--){
                //pick random index before current element
                let j= Math.floor(Math.random()*(i+1));
                //swap
                [deck[i], deck[j]]=[ deck[j], deck[i]]
            }
        }
    }
    
}

const deck1=makeMyDeck();
deck1.initializeDeck();
deck1.shuffle();
console.log(deck1);

const deck2=makeMyDeck();
deck2.initializeDeck();
console.log(deck2);




