

document.addEventListener('DOMContentLoaded', () => {

    let time = 500;
    let price = 10.50;
    let counter = 2;
    let timer = setInterval(() => {
        document.querySelector('#price').innerHTML = "The Current Price is : $" + price;
        time--;
        if (time < 0) {
            price *= counter;
            counter++;d
            time = 300;
            clearInterval(timer);
        }
    }, 1000);

})