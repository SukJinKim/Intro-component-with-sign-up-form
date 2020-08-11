(function (window, document) {

    'use strict';
    
    // GLOBAL VARIABLES
    const $inputs = document.querySelectorAll('.input--text');
    const $form = document.getElementById('register-form');

    // EVENT HANDLERS
    $form.addEventListener('submit', () => {
        let isValidate = true;

        $inputs.forEach((input) => {
            if(input.id === 'email' && !validateEmail(input.value)) {
                input.classList.add('invalid');
                isValidate = false;
                return;
            }

            if(input.value === '') {
                input.classList.add('invalid');
                isValidate = false;
            }
        });

        // prevent the form from being sent by canceling the event
        if(!isValidate) event.preventDefault();
    });

    $inputs.forEach((input) => {
        input.addEventListener('click', () => {
            if(input.classList.contains('invalid')) input.classList.remove('invalid');
        });
    })
    
    // FUNCTIONS
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

})(window, document)