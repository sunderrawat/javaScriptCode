class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);
    };
    pause = () => {
        clearInterval(this.interval); 
    };
    // tick = () => {
    //     const timeRemaining = parseFloat(this.durationInput.value);
    //     this.durationInput.value = timeRemaining -1;
    // };
    //from getter and setter
    tick = () => {
        if(this.timeRemaining <=0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }
        else{
            this.timeRemaining = this.timeRemaining - 0.02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    };
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r')*Math.PI*2 ;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', perimeter *timeRemaining / duration - perimeter);
    },
    onComplete(){
        console.log('Timer just Completed')
    }
})

