let a = ''; // first number
let b = ''; //second number
let m = '0'; // memory
let sign = ''; //operation sign
let finish = false;
let calcError = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'x', '/', '+/-', 'M+', 'M-', 'MR', 'MC', '%'];

//screen 
const out = document.querySelector('.result');
console.log(out)
out.addEventListener('DOMSubtreeModified', function () {
    const newTextLength = out.textContent.length;
    console.log(newTextLength)
    if (newTextLength < 8) {
        out.style.fontSize = '4rem';
    } else if (newTextLength >= 8 && newTextLength < 14) {
        out.style.fontSize = '2.5rem';
    } else {
        out.style.fontSize = '1.4rem';
    }
    console.log('Текст изменен:', out.textContent.length, out.style.fontSize);

});

function clearAll() {
    a = '';
    b = '';
    m = '';
    sign = '';
    finish = false;
    out.textContent = '0';
    memoryScreen.textContent = 'Memory: 0';
    culcError = false;
}
// получаем экран памяти
const memoryScreen = document.querySelector('.memory-screen');

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
    if (!calcError) out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;
    // debugger
    console.log(key)
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
    // debugger
    if (action.includes(key)) {
        sign = key;
        console.log(sign);
        if (sign === '+/-') {
            if (b !== '') {
                b = - (+b);
                out.textContent = b;
            } else if (a !== '' && b === '') {
                a = -(+a);
                out.textContent = a;
            } else {
                out.textContent = '0';
                a = '';
                b = '';
                m = '0';
                sign = '';
            }

            return;
        }
        // debugger
        if (sign === 'M+') {
            m = (+m) + (+a);
            memoryScreen.textContent = 'Memory: ' + m;
            out.textContent = a;
            return;
        }
        // debugger
        if (sign === 'M-') {
            if (b !== '') {
                m -= b;
                memoryScreen.textContent = 'Memory: ' + m;
                out.textContent = b;
            } else {
                m -= a;
                memoryScreen.textContent = 'Memory: ' + m;
                out.textContent = a;
            }
            return;
        }
        if (sign === 'MR') {
            // debugger
            a = m;
            memoryScreen.textContent = 'Memory: ' + m;
            out.textContent = a;
            return;
        }
        if (sign === 'MC') {
            m = 0;
            memoryScreen.textContent = 'Memory: ' + m;
            out.textContent = a;
            return;
        }

        // console.table(a, b, sign)
        out.textContent = sign;
        return;
    }
    // нажата =
    if (key === '=' && !calcError) {
        // debugger
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
                    out.textContent = 'Ошибка, деление на ноль';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case '%':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = (a / b) * 100;
                break;

        }
        // debugger
        if (a === Infinity) {
            a = 'Ошибка переполнения';
            calcError = true;
        }
        finish = true;
        out.textContent = a;
        b = '';
        console.table(a, b, sign);
    }

})



var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}