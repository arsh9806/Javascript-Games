document.addEventListener('DOMContentLoaded',()=>{
    var cardsChosen = [];
    var cardsChosedId = [];
    var score = 0
    var restart = document.querySelector('#restart');
    var scores = document.querySelector('#scores');
    var flips = document.querySelector("#flips");
    const cardArray = [
        {
            name: "one",
            img: "images/one.png"
        },
        {
            name: "two",
            img: "images/two.png"
        },
        {
            name: "three",
            img: "images/three.png"
        },
        {
            name: "four",
            img: "images/four.png"
        },
        {
            name: "five",
            img: "images/five.png"
        },
        {
            name: "six",
            img: "images/six.png"
        },
        {
            name: "one",
            img: "images/one.png"
        },
        {
            name: "two",
            img: "images/two.png"
        },
        {
            name: "three",
            img: "images/three.png"
        },
        {
            name: "four",
            img: "images/four.png"
        },
        {
            name: "five",
            img: "images/five.png"
        },
        {
            name: "six",
            img: "images/six.png"
        }

    ]
    cardArray.sort(()=> 0.5-Math.random());
    const grid = document.querySelector('.grid');
    console.log(cardArray.length)
    restart.addEventListener('click',()=>{
        grid.innerHTML = '';
        cardArray.sort(()=> 0.5-Math.random());
        scores.textContent = 0;
        flips.textContent = 0;
        score = 0;
        createBoard();

    });
    function createBoard(){

        for(let i=0;i<cardArray.length;i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.setAttribute('width','100px');
            card.setAttribute('height','100px');
            card.addEventListener('click',flipCard)
            grid.appendChild(card);
            console.log(grid);
            console.log(card);
        } 
    }
    function checkForMatches(){
        var cards = document.querySelectorAll('img');
        const card1 = cardsChosen[0];
        const card2 = cardsChosen[1];
        if (card1 == card2){
            score += 1;
            scores.innerHTML = score;
            cards[cardsChosedId[0]].setAttribute('src','images/white.png');
            cards[cardsChosedId[1]].setAttribute('src','images/white.png');
        }
        else{
        cards[cardsChosedId[0]].setAttribute('src','images/blank.png');
        cards[cardsChosedId[1]].setAttribute('src','images/blank.png');
        cards[cardsChosedId[0]].addEventListener('click',flipCard);
        cards[cardsChosedId[1]].addEventListener('click',flipCard);

        

        }
        if (scores.innerHTML == '6'){
            alert("You Got Everything Right!");
        }
        cardsChosedId = [];
        cardsChosen = [];
    }

    function flipCard(){
        this.removeEventListener('click',flipCard);
        flips.textContent = parseInt(flips.textContent) + 1;
        var cardId = this.getAttribute('data-id');
        console.log(cardId);
        cardsChosen.push(cardArray[cardId].name);
        cardsChosedId.push(cardId);
        console.log(cardsChosedId);
        this.setAttribute('src',cardArray[cardId].img);

        if(cardsChosen.length == 2){
            setTimeout(checkForMatches,500);
        }
    }
    createBoard();

});