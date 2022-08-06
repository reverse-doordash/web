document.addEventListener('DOMContentLoaded', () => {
    let time = 300;
    let timer = setInterval(() => {
        let minutes = Math.trunc(time / 60)
        let seconds = (time % 60)
        if(seconds > 9){
            document.querySelector('#timerdetail').innerHTML = minutes + " : " + seconds;
        }
        else if(seconds < 10){
            document.querySelector('#timerdetail').innerHTML = minutes + " : 0" + seconds;
        }
        time--;
        if (time < 0) {
            clearInterval(timer);
        }
    }, 1000);

})