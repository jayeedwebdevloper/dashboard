document.getElementById('login').addEventListener('click', function () {
    let form = document.getElementsByClassName('login-form');
    for (let i = 0; i < form.length; i++) {
        form[i].style.display = 'none';
    }
});
let button = document.getElementById('login');
if (button.hasAttribute('disabled')) {
    button.style.backgroundColor = '#3163f9';
    button.style.cursor = 'not-allowed';
    button.style.opacity = '0.5';
}
document.getElementById('password').addEventListener('keyup', function () {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let loginBtn = document.getElementById('login');
    if (email === 'admin@admin.com' && (pass === 12345678 || pass === '12345678')) {
        loginBtn.removeAttribute('disabled');
        loginBtn.style.cursor = 'pointer';
        loginBtn.style.backgroundColor = '#0840e9';
        loginBtn.style.opacity = '1';
    } else {
        loginBtn.setAttribute('disabled', true);
        loginBtn.style.backgroundColor = '#3163f9';
        loginBtn.style.cursor = 'not-allowed';
        loginBtn.style.opacity = '0.5';
    }
});
document.getElementById('dipoBtn').addEventListener('click', function () {
    let deposit = document.getElementById('dipo');
    let newDeposit = parseFloat(deposit.value);
    let deAmount = document.getElementById('depo');
    let bAmount = document.getElementById('bal');
    let newDAmount = parseFloat(deAmount.innerText);
    let newBAmount = parseFloat(bAmount.innerText);
    let newD = newDeposit + newDAmount;
    let newB = newDeposit + newBAmount;
    deAmount.innerText = newD;
    bAmount.innerText = newB;
    deposit.value = '';
});
document.getElementById('withBtn').addEventListener('click', function () {
    let withdraw = document.getElementById('withdraw');
    let newWithdraw = parseFloat(withdraw.value);
    let wiAmount = document.getElementById('withd');
    let bAmount = document.getElementById('bal');
    let newWAmount = parseFloat(wiAmount.innerText);
    let newBAmount = parseFloat(bAmount.innerText);
    let newW = newWithdraw - newWAmount;
    let newB = newBAmount - newWithdraw;
    wiAmount.innerText = newW;
    bAmount.innerText = newB;
    withdraw.value = '';
})