window.addEventListener('DOMContentLoaded', function () {

    let checkRemember = document.getElementById('remember'),
        labelRemember = document.querySelector('label.remember'),
        changeForm = document.querySelector('.changeForm'),
        form = document.querySelector('form'),
        submitBtn = document.querySelector('button.submit');

    if (localStorage.getItem('isChecked')) {     // проверка, был ли нажат чекбокс ранее
        checkRemember.checked = true;
        labelRemember.classList.add('active');
    }

    checkRemember.addEventListener('click', function () {   // установка значения в LocalStorage
        labelRemember.classList.toggle('active');           // при нажатии на чекбокс
        localStorage.setItem('isChecked', 'true');
    });



    changeForm.addEventListener('click', function () {
        form.classList.toggle('white');
        form.classList.toggle('black');
        localStorage.setItem('bg', 'changed');
    });

    if (localStorage.getItem('bg') == "changed") {     // проверка, был ли нажат чекбокс ранее
        form.classList.add('black');
    }

    let person = {
        name: "Sergey",
        age: 47,
        tech: ['phone', 'notebook', 'camera']
    }
    serializedPerson = JSON.stringify(person);
    localStorage.setItem("Sergey", serializedPerson);
    console.log(JSON.parse(serializedPerson));



    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });



});