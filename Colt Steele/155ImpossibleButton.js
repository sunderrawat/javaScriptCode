const btn =document.querySelector('button');

btn.addEventListener('mouseover', function(){
    console.log('mouse overed me');
    const width= Math.floor(Math.random()*window.innerWidth);
    const hight= Math.floor(Math.random()*window.innerHeight);
    btn.style.left =`${width}px`;
    btn.style.top =`${hight}px`;
});

btn.addEventListener('click', function(){
    console.log('You click Me');
    document.body.style.backgroundColor ='green';
    btn.innerText ='You Got Me';
})