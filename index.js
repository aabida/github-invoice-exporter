

function echo_value(element) {
    time = element.querySelector('time').textContent;
    amount = element.querySelector('.amount').innerText;

    console.log(time + ";" + amount);
}

function download_invoice(element) {
    element.querySelector('.receipt > a').click();
}

history_elements = document.querySelectorAll('div .payment-history > ul > li');

history_elements.forEach(e => echo_value(e));

history_elements.download_invoice(e => echo_value(e));