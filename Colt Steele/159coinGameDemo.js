function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avtar = document.querySelector('#player');
const coin =document.querySelector('#coin');
// window.addEventListener('keyup', function(e){
//     console.log(e.key);
//     if(e.key == 'ArrowDown' || e.key == 'Down'){
//         const cuurTop = extractPos
//         (avtar.style.top);
//         avtar.style.top =`${cuurTop+50}px`;
//     }
//     else if(e.key == 'ArrowUp' || e.key == 'Up'){
//         const cuurTop = extractPos
//         (avtar.style.top);
//         avtar.style.top =`${cuurTop-50}px`;
//     }
//     else if(e.key == 'ArrowRight' || e.key == 'Right'){
//         const cuurLeft = extractPos
//         (avtar.style.left);
//         avtar.style.left =`${cuurLeft+50}px`;
//         avtar.style.transform = 'scale(1,1)';
//     }
//     else if(e.key == 'ArrowLeft' || e.key == 'Left'){
//         const cuurLeft = extractPos
//         (avtar.style.left);
//         avtar.style.left =`${cuurLeft-50}px`;
//         avtar.style.transform = 'scale(-1,1)';
//     }
//     if(isTouching(avtar, coin)) moveCoin()
// });

//refactoring code
window.addEventListener('keyup', function(e){
    console.log(e.key);
    if(e.key == 'ArrowDown' || e.key == 'Down'){
        moveVertical(avtar, 50);
    }
    else if(e.key == 'ArrowUp' || e.key == 'Up'){
       moveVertical(avtar,-50);
    }
    else if(e.key == 'ArrowRight' || e.key == 'Right'){
        moveHorizontal(avtar,50);
        avtar.style.transform = 'scale(1,1)';
    }
    else if(e.key == 'ArrowLeft' || e.key == 'Left'){
        moveHorizontal(avtar,-50);
        avtar.style.transform = 'scale(-1,1)';
    }
    if(isTouching(avtar, coin)) moveCoin()
});

const moveHorizontal = (element, amount) =>{
    const cuurLeft = extractPos(element.style.left);
    element.style.left =`${cuurLeft+amount}px`;
}
const moveVertical = (element, amount) =>{
    const cuurTop = extractPos(element.style.top);
    element.style.top =`${cuurTop+amount}px`;
}

const extractPos = (pos) => {
    if(!pos) return 100;
    return parseInt(pos.slice(0,-2));
}

const moveCoin =()=>{
   const x = Math.floor(Math.random()*window.innerWidth);
   const y = Math.floor(Math.random()*window.innerHeight);

   coin.style.top =`${y}px`;
   coin.style.left =`${x}px`;
}
moveCoin();
