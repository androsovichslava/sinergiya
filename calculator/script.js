let a = ''; // first number
let b = ''; //second number
let sign = ''; //operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'x', '/'];

//screen 
const out = document.querySelector('.calc-screen p');
console.log(out)
function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '';
}
// получаем кнопку сброса АС и вешаем обработчик clearAll
const ac = document.querySelector('.ac');
ac.addEventListener('click', clearAll);
//получаем все кнопки. 
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (event) => {
    // Если не попали на кнопку  то возврат
    if (!event.target.classList.contains('btn')) return;
    // если покали на АС то тоже возврат, так как она уже обработана clearAll
    if (event.target.classList.contains('ac')) return;
    // очистка экрана
    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;
    // console.log(key)
    // если нажата 0-9
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            console.table(a, b, sign)
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
    }
    // проверка нажатия знака
    if (action.includes(key)) {
        sign = key;
        console.table(a, b, sign)
        out.textContent = sign;
        return;
    }
    // нажата =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'x':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;

        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }

})



