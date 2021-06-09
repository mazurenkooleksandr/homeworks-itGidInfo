
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').textContent = 'touch';
}
document.querySelector('.div-1').addEventListener('touchstart', t1);

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let c = 0;
function t2() {
    document.querySelector('.out-2').textContent = c++;
}
document.querySelector('.div-2').addEventListener('touchstart', t2);

// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
let a = document.querySelector('.div-3_1');
let b = document.querySelector('.div-3_2');
let out = document.querySelector('.out-3');
function t3(event) {
    console.log(event);
    if (event.target == a) {
        out.textContent = 1;
    } else if (event.target == b) {
        out.textContent = 2;
    }
}
a.addEventListener('touchstart', t3);
b.addEventListener('touchstart', t3);

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let button = document.createElement('button');
let div4 = document.querySelector('.div-4');
button.classList.add('b-4');
button.textContent = 'button';
button.style.marginLeft = '80px';
div4.appendChild(button);

function t4() {
    document.querySelector('.out-4').textContent += 'touch ';
}
document.querySelector('.b-4').addEventListener('touchstart', t4);


// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.b-4').removeEventListener('touchstart', t4);
}
document.querySelector('.b-5').addEventListener('click', t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').textContent = 'touchend';
}
document.querySelector('.div-4').addEventListener('touchend', t6);
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.backgroundColor = 'red';
}
document.querySelector('.div-7').addEventListener('touch', t7);

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
const a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
function t8() {
    let i = Math.floor(Math.random() * 6);
    document.querySelector('.div-8').style.backgroundColor = a8[i];
}
document.querySelector('.div-8').addEventListener('touch', t8);
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let h = 0;
function t9() {
    document.querySelector('.out-9').textContent = h++;
}

document.querySelector('.div-9').ontouchstart = t9;

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let block = document.querySelector('.div-10');
let r = 75;
function t10() {
    r++;
    block.style.width = r + 'px';
}
block.addEventListener('touchmove', t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
function t11(event) {
    let out11 = document.querySelector('.out-11');
    out11.textContent += 'radiusX: ' + event.changedTouches[0].radiusX;
    out11.textContent += 'radiusY: ' + event.changedTouches[0].radiusY;
}
document.querySelector('.div-11').addEventListener('touchstart', t11);
// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;

function nextFunction() {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            count = i + 1;
            if ((count) >= images.length) {
                count = 0;
            }
            for (let img of images) {
                img.classList.remove('active-img');
            }
        }
    }
    images[count].classList.add('active-img');
    document.querySelector('.img-12-max').src = images[count].src;
    createResetButton()
}
function prevFunction() {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            count = i - 1;
            if ((count) < 0) {
                count = (images.length - 1);
            }
            for (let img of images) {
                img.classList.remove('active-img');
            }
        }
    }
    images[count].classList.add('active-img');
    document.querySelector('.img-12-max').src = images[count].src;
    createResetButton();
}

function createResetButton() {
    if (document.querySelector('.b-12') !== null) {
        removeResetButton();
    }
    let btn = document.createElement('button');
    btn.classList.add('button-primary', 'b-12');
    btn.textContent = 'Reset';
    document.querySelector('.out-12').appendChild(btn);
    document.querySelector('.b-12').onclick = resetFunction;
}

function removeResetButton() {
    document.querySelector('.b-12').remove();
}

function resetFunction() {
    count = 0;
    for (let img of images) {
        img.classList.remove('active-img');
    }
    images[count].classList.add('active-img');
    document.querySelector('.img-12-max').src = images[count].src;
}


// ваше событие здесь!!!
