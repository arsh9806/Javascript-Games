document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid');
    const square = document.querySelectorAll('.square');
    const time = document.querySelector('#time');
    let score = document.querySelector('#scores');
    const start = document.querySelector('button');
    var randomPosition = 0; 
    
    function randomSquare(){
        square.forEach(element => {
            element.classList.remove("mole");
            element.addEventListener('mouseup',mole);
        });
        randomPosition = Math.floor(Math.random()*9);
        console.log(randomPosition);
        square[randomPosition].classList.add('mole');  
    }
    
    function countDown(){
        console.log(time.textContent);
        if(time.textContent == 0){
            alert("Game Over");
            clearInterval(t);
            clearInterval(q);
        }
        else{
        time.textContent = parseInt(time.textContent) - 1;
        }
    }

    function mole(){
        if(this.classList.contains("mole")){
            score.textContent = parseInt(score.textContent) + 1;
            this.removeEventListener('mouseup',mole);
        }
    }
    start.addEventListener('click',()=>{
        t = setInterval(countDown,1000);
        q = setInterval(randomSquare,1000);
    });

});
