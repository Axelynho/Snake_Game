const canvas =document.getElementById("game");
const context=canvas.getContext("2d");

const field=new Image();
field.src = "img/field.png";

const foodImg=new Image();
foodImg.src = "img/food.png";

let box=32;

let score =0;

let food = {
x: Math.floor((Math.random() * 17 + 1)) * box,
y: Math.floor((Math.random() * 15 + 3)) * box,
};
let snake = [];
snake[0]= {
    x: 9 * box,
    y: 10 * box
};

document.addEventListener("keydown",direction);
let dir;
function direction (event) {
    if((event.keyCode==37 && event.keyCode!=65) && dir !="right"||(event.keyCode==65 && event.keyCode!=37) && dir !="right")
    dir="left";
    else if((event.keyCode==38 && event.keyCode!=87) && dir !="down"||(event.keyCode==87 && event.keyCode!=38) && dir !="down")
    dir="up";
    else if((event.keyCode==39 && event.keyCode!=68) && dir !="left"||(event.keyCode==68 && event.keyCode!=39) && dir !="left")
    dir="right";
    else if((event.keyCode==40 && event.keyCode!=83) && dir !="up"||(event.keyCode==83 && event.keyCode!=40) && dir !="up")
    dir="down";
}

function notlikethis(head,arr){
    for(let i = 0; i <arr.length;i++){
        if(head.x==arr[i].x && head.y==arr[i].y)
        clearInterval(game) || alert("Game Over :(") ||  location.reload ();
    }
}

function draw() {
    context.drawImage(field,0,0);

    context.drawImage(foodImg,box*1.3,box*0.8);

    context.drawImage(foodImg, food.x,food.y);

    for(let i=0;i<snake.length;i++){
        context.fillStyle=i ==0 ? "green":"yellow";
        context.fillRect(snake[i].x,snake[i].y,box,box);
    }
    context.fillStyle="white";
    context.font="50px Arial";
    context.fillText(score,box * 2.5,box *1.8)
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == food.x && snakeY==food.y){
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
            };
    } else {
        snake.pop();
    }

    if(snakeX <box || snakeX > box * 17
        || snakeY< 3 * box || snakeY > box * 17)
        clearInterval(game) || alert("Game Over :(") ||  location.reload ()

    if(dir=="left") snakeX -=box;
    if(dir=="right") snakeX +=box;
    if(dir=="up") snakeY -=box;
    if(dir=="down") snakeY +=box;
    
    let newHead={
        x:snakeX,
        y:snakeY
    };

    notlikethis(newHead,snake);

    snake.unshift(newHead);
}
let game = setInterval(draw,100);