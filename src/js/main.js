document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.skills__block');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentSlide = 0;

    function showSlide(index, direction) {
        let newSlide = (index + slides.length) % slides.length;

        // Set the current slide to exit to the left
        slides[currentSlide].classList.remove('active', 'enteringRight', 'exitingLeft');
        slides[currentSlide].classList.add(direction === 'next' ? 'exitingLeft' : 'exitingRight');


        // Remove 'entering' and 'exiting' classes after the transition
        setTimeout(() => {

            slides[newSlide].classList.add('active');
            currentSlide = newSlide;

            // Add the active class to the new slide
            slides[currentSlide].classList.add('active');
            slides[currentSlide].classList.add(direction === 'next' ? 'enteringRight' : 'enteringLeft');

            // Remove the entering class after the transition is complete
            setTimeout(() => {
                slides[currentSlide].classList.remove('enteringRight', 'enteringLeft');
            }, 100); // Duration of the transition

        }, 100); // Duration of the transition
    }

    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1, 'next');
        slides[currentSlide].classList.add('enteringLeft')
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1, 'prev');
        slides[currentSlide].classList.add('enteringRight')
    });
});

function openContactForm(){
        const contactButtons = document.querySelectorAll('.contact-button');
        const contactForm = document.getElementById('contact__form');

        contactButtons.forEach((contactButton)=>{
            contactButton.addEventListener('click', function(event) {
                event.preventDefault();
                contactForm.classList.toggle('visually-hidden');  // Toggle die Klasse 'hidden'
            });
        })


        const close = document.querySelector('.contact__form__close')
        close.addEventListener('click', (e)=>{
            e.preventDefault();
            contactForm.classList.toggle('visually-hidden')
        })
}
openContactForm();


