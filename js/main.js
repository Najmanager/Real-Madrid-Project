const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger');


navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
    hamburger.classList.toggle('open');
})


const container = document.querySelector('.trophies-grid-layout');

container.addEventListener('click', function (Event) {
    const modalToggle = Event.target.closest('.modal-open');

    if (! modalToggle) return;

    const modal = modalToggle.parentNode.nextElementSibling;
    const closeModal = modal.querySelector('.close-modal');
    const modalOpen =  function () {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }
    const modalClose = function () {
        modal.classList.remove('is-open');
        document.body.style.overflow = 'scroll';
    }
    
    document.addEventListener('keydown', function (Event) {
        
        if ((Event.key === 'Backspace') || (Event.key === 'Escape')) {
            modalClose();
        }
    })

    closeModal.addEventListener('click', modalClose);

    modalOpen()
})














    
   