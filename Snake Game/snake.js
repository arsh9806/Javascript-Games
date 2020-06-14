function Snake(){
    this.x=0;
    this.y=0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.draw = function() {
        context.fillStyle='rgb(90,90,90)';
        for(let i=0;i<this.tail.length;i++){
            context.fillRect(this.tail[i].x,this.tail[i].y, scale, scale);
        }
        context.fillRect(this.x,this.y, scale, scale);

        context.fill();
    }
    this.update = function(){
        for(let i=0;i<this.tail.length - 1;i++){
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total -1] = {x:this.x, y: this.y};
        this.x += this.xSpeed*scale;
        this.y += this.ySpeed*scale;
        if(this.x > canvas.width){
            this.x = 0;
        }
        if(this.x < 0){
            this.x = canvas.width;
        }
        if(this.y > canvas.height){
            this.y = 0;
        }
        if(this.y < 0){
            this.y = canvas.height;
        }
    }
    this.changeDirection = function(direction){
        switch(direction){
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = -1;
                break;
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = 1;
                break;
            case "Right":
                this.xSpeed = 1;
                this.ySpeed = 0;
                break;
            case "Left":
                this.xSpeed = -1;
                this.ySpeed = 0;
                break;
            }

    }
    this.eat = function(fruit){
        if (this.x === fruit.x && this.y === fruit.y){
            this.total++;
            return true;
        }
        return false;
    }
}