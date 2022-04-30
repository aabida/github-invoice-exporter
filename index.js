

function echo_value(element) {
    time = element.querySelector('time').textContent;
    amount = element.querySelector('.amount').innerText;

    console.log(time + ";" + amount);
}

function download_invoice(element, delay_in_seconds) {
    setTimeout(
        () => element.querySelector('.receipt > a').click(),
        delay_in_seconds * 1000
    );
}

history_elements = document.querySelectorAll('div .payment-history > ul > li');

history_elements.forEach(e => echo_value(e));


for (let i = 0; i< history_elements.length; i++) {
    download_invoice(history_elements[i], i);
}

