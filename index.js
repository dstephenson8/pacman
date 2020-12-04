const width = 28;
const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
let squares=[];
let score = 0;

//28*28
// 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

const layout= [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]




//create board 

function createBoard(){
    for (let i = 0; i <layout.length; i++){
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);
       
        if(layout[i] === 0){

            squares[i].classList.add('pac-dot');

        }else if(layout[i]===1){

            squares[i].classList.add('wall');

        }else if(layout[i]===3){

            squares[i].classList.add('power-pellet')
        }
         
    }
}
createBoard();

//starting position of pacman
let pacmanCurrentIndex = 490;

squares[pacmanCurrentIndex].classList.add('pac-man')

function control(e){
    // if(e.keyCode === 40){
    //     console.log('down pressed')
    // } else if(e.keyCode === 38){
    //     console.log('up')
    // }else if(e.keyCode === 37){
    //     console.log('left')
    // }else if(e.keyCode===39){
    //     console.log('right')
    // }
    squares[pacmanCurrentIndex].classList.remove('pac-man');
  
    switch(e.keyCode){
    
        case 40:
            if(pacmanCurrentIndex + width <= layout.length && squares[pacmanCurrentIndex + width].className !== 'wall' ){
                pacmanCurrentIndex += width;
                removeDot();
            }
        break
        case 38:
            if(pacmanCurrentIndex - width >= 0 && squares[pacmanCurrentIndex - width].className !== 'wall'){
                pacmanCurrentIndex -= width;
                removeDot();
            }
        break
        case 37:
            if(pacmanCurrentIndex % width !== 0 && squares[pacmanCurrentIndex - 1].className !== 'wall'){
                pacmanCurrentIndex--;
                removeDot()
            }
        break
        case 39:
            if(pacmanCurrentIndex % width !== width-1 && squares[pacmanCurrentIndex + 1].className !== 'wall'){
                pacmanCurrentIndex++;
                removeDot();
            }
        break
    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    
}

 function removeDot(){
    if(squares[pacmanCurrentIndex].className === 'pac-dot'){
        console.log("DOTTT")
        squares[pacmanCurrentIndex].classList.remove('pac-dot');
        score ++;
        scoreDisplay.textContent = score; 
    }
}





document.addEventListener('keyup', control)