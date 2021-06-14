// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f1() {
    alert('Task #1');
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f2() {
    alert('Task #2');
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

function f3() {
    alert ('Task #3');
}

document.querySelector('.p-3').onclick = f3;


// Task 4. Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4

function f4() {
    let checkboxI4 = document.querySelector('.i-4');
    let divOut = document.querySelector('.out-4');

    if (checkboxI4.checked) {
        divOut.textContent = 'true';
    }
    else {
        divOut.textContent = 'false';
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
//Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

function f5() {
    let checkboxI5 = document.querySelector('.i-5');
    let checkboxCheck = checkboxI5.value;
    let divOut = document.querySelector('.out-5');

    if (checkboxI5.checked) {
        divOut.textContent = checkboxCheck;
    }
    else {
        divOut.textContent = 'false';
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6

function f6() {
    let checkboxI6 = document.querySelector('.i-6').value;
    let divOut = document.querySelector('.out-6');

    divOut.textContent = checkboxI6;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

function f7() {
    let checkboxI7 = document.querySelector('.i-7').value;
    let divOut71 = document.querySelector('.out-71');
    let divOut72 = document.querySelector('.out-72');

    if (checkboxI7.length >= 6 || checkboxI7.length < 0) {
        divOut72.textContent = 1;
        divOut71.textContent = checkboxI7;
    }
    else {
        divOut72.textContent = 0;
        divOut71.textContent = checkboxI7;
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

function f8() {
    let divOut = document.querySelector('.out-8');

    divOut.innerHTML = '<input type="text" class="i-81"><button class="b-81">Push</button>';

    document.querySelector('.b-81').onclick = f81;
}

function f81() {
    let inputValue = document.querySelector('.i-81').value;
    let divOut = document.querySelector('.out-81');

    divOut.textContent = inputValue;
}

document.querySelector('.b-8').onclick = f8;


// Task 9
//Создайте один input(radio).r-9  и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен. 

function f9() {
    let inputRadio = document.querySelector('.r-9');
    let radioCheck = inputRadio.value;
    let divOut = document.querySelector('.out-9');

    if (inputRadio.checked) {
        divOut.textContent = radioCheck;
    }
    else {
        divOut.textContent = 0;
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// >Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).


function f10() {
    let inputColor = document.querySelector('.i-10').value;
    let divOut = document.querySelector('.out-10');

    divOut.style.background = inputColor;
}

document.querySelector('.b-10').onclick = f10;


// Task     11
//   Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

function f11() {
    let inputColor111 = document.querySelector('.i-111').value;
    let inputColor112 = document.querySelector('.i-112');
    console.log(inputColor111);
    
    inputColor112.style.background = inputColor111;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в  out-12 выбранную в input дату.

function f12() {
    let inputDate = document.querySelector('.i-12').value;
    let divOut = document.querySelector('.out-12');

    divOut.textContent = inputDate;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
//  Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

function f13() {
    let inputRange = document.querySelector('.i-13').value;
    let divOut = document.querySelector('.out-13');

    divOut.textContent = inputRange;
}

document.querySelector('.i-13').oninput = f13;

// Task 14
// Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

function f14() {
    let textareaValue = document.querySelector('.t-14').value;
    let divOut = document.querySelector('.out-14');

    divOut.textContent = textareaValue;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

function f15() {
    let inputValue = document.querySelector('.i-15').value;
    let textareaT15 = document.querySelector('.t-15');
    let divOut = document.querySelector('.out-15');

    textareaT15.textContent = inputValue;
    divOut.textContent = inputValue;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.

function f16() {
    let selectValue = document.querySelector('.s-16').value;
    let divOut = document.querySelector('.out-16');

    divOut.textContent = selectValue;
    // для получения выбранного option просто получите select в переменную и select.value;
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

function f17() {
    let selectValue = document.querySelector('.s-17').value;
    let divOut = document.querySelector('.out-17');

    divOut.textContent = selectValue;
}

document.querySelector('.s-17').onchange = f17;

// Task 18
// Создайте select.s-18 и console.log(input18);. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.

function f18() {
    let input18 = document.querySelector('.i-18');
    let select18 = document.querySelector('.s-18').value;

    input18.innerHTML = select18;
    console.log(select18);
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

function f19() {
    let inputText = document.querySelector('.i-191').value;
    let inputPassword = document.querySelector ('.i-192').value;
    let divOut = document.querySelector('.out-19');
    
    divOut.textContent = inputText + ' ' + inputPassword;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

// очень внимательно изучите верстку!!! 
// обратите внимание, что мы не используем class, а присвоили name!!!

function f20(e) {
    e.preventDefault(); // чтобы форма не перезагружала страницу!!!!
    let form = document.querySelector('.f-20');
    let divOut = document.querySelector('.out-20');

    divOut.textContent = form.elements['username'].value + ' ' + form.elements['password'].value;

    console.log(form.elements);
    console.log(form.elements['username'].value); // так можно обратиться к элементу внутри формы
}

document.querySelector('.b-20').onclick = f20;