const money = document.querySelector('#money');
const months = document.querySelector('#months');
const interset = document.querySelector('#interest');

const initialAmount = document.querySelector('#initialAmount');
const withInterest = document.querySelector('#withInterest');
const interestBar = document.querySelector('.interestBar');

//parsefloat para makuha kahit may decimal
// const initialDeposit = parseFLoat(money.value);
// const monthsValue = parseFloat(months.value) / 12;
// const interestValue = parseFloat(interest.value) *0.01;

/*

    initialDeposit = 1000
    montshValue = 12 / 12 = 1
    interestValue = 16 * 0.01 = 0.16
    (initialDeposit * intersetValue * monthsValue) + initialDeposit

*/
// ilagay sa function pra magamit ng paulit ulit
// const result = initialDeposit + (initialDeposit * intersetValue * monthsValue);

const calculate = () => {
    const initialDeposit = parseFloat(money.value);
    const monthsValue = parseFloat(months.value) / 12;
    const interestValue = parseFloat(interest.value) * 0.01;

    if (!initialDeposit || !monthsValue || !interestValue) {
        return;
    }
    
    const result = initialDeposit + (initialDeposit * interestValue * monthsValue);
                //10000 + (10000 * .12 * 1)
    const height = ( (result / initialDeposit) * 100 ) + "px"
                // (11200 / 10000) =1.12 * 100 = 112px
                //gagawing height (px)
    interestBar.style.height = height;

    initialAmount.innerText = initialDeposit.toLocaleString(
        'en-US',
        {
            style: 'currency',
            currency: 'PHP'
        }
    );

    withInterest.innerText = result.toLocaleString(
        'en-US',
        {
            style: 'currency',
            currency: 'PHP'
        }
    );

    console.log(result);
}

calculate();

money.addEventListener('input', calculate);
interest.addEventListener('input', calculate);
months.addEventListener('change', calculate);