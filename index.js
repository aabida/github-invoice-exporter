

function echo_value(element) {
    time = element.querySelector('time').textContent;
    amount = element.querySelector('.amount').innerText;

    console.log(time + ";" + amount);
}

history_elements = document.querySelectorAll('div .payment-history > ul > li');

history_elements.forEach(e => echo_value(e));
