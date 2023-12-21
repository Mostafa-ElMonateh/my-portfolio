const getAllSections = document.querySelectorAll('.section');
const getSecBtnsContainer = document.querySelectorAll('.controllers');
const getSecBtns = document.querySelectorAll('.controller');



function pageTransitions() {
    // Button Click Active Class
    for (let i = 0; i < getSecBtns.length; i++) {
        getSecBtns[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace(/ active-btn/, '');
            this.className += ' active-btn';
        })
    }

    // Sections Active
    getSecBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;

            if (id) {
                getSecBtns.forEach((btn) => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');

                getAllSections.forEach((section) => {
                    section.classList.remove('active');
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    })


}

pageTransitions();