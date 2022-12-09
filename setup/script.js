//using selectors inside the element

const questions = document.querySelectorAll('.question');
questions.forEach(back);
function back(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', funBtn);
    function funBtn(e) {
        questions.forEach(call);
        function call(item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        question.classList.toggle('show-text');
    }
}
}






// traversing the dom

// const button = document.querySelectorAll('.question-btn');
// button.forEach(back);
// function back(btn) {
//     btn.addEventListener('click', funBtn);
// }

// function funBtn(e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
// }