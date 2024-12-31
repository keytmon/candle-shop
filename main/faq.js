document.addEventListener("DOMContentLoaded", function (){

    const questions = document.querySelectorAll('.questions__item');

    questions.forEach((element) => {
        element.addEventListener('click', () => {
            let answer = element.lastElementChild;
            answer.classList.toggle('active');

        })
    })
})