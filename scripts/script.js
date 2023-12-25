const getAllSections = document.querySelectorAll('.section');
const getSecBtnsContainer = document.querySelectorAll('.controllers');
const getSecBtns = document.querySelectorAll('.controller');
const getKitchenGithub = document.getElementById('kitchen_restaurant_gitHub');
const getKitchenLive = document.getElementById('kitchen_restaurant');
const getStoreGithub = document.getElementById('Store_Management_System_gitHub');
const getStoreLive = document.getElementById('Store_Management_System');

getKitchenGithub.onclick = function() {
    getKitchenGithub.setAttribute('href', 'https://github.com/Mostafa-ElMonateh/ITI-project-HTML_CSS')
}

getKitchenLive.onclick = function() {
    getKitchenLive.setAttribute('href', 'https://mostafa-elmonateh.github.io/ITI-project-HTML_CSS/')
}

getStoreGithub.onclick = function() {
    getStoreGithub.setAttribute('href', 'https://github.com/Mostafa-ElMonateh/Store-Management-System')
}

getStoreLive.onclick = function() {
    getStoreLive.setAttribute('href', 'https://mostafa-elmonateh.github.io/Store-Management-System/')
}



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


    // Toggle theme
    const themeBtn = document.querySelectorAll('.theme-btn');
    themeBtn[0].addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

pageTransitions();