document.addEventListener('DOMContentLoaded', () => {
    
    function caughtlackin() {
        let time = 5;
        let timer = setInterval(() => {



            document.querySelector('#caught').innerHTML = time;
            time--;
            if (time < 0) {
                clearInterval(timer);
                window.locate.href = '/views/confirm.html';
            }
        }, 1000);
    }

})