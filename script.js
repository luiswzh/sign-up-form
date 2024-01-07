const pass = document.querySelector('#password');
const passCheck = document.querySelector('#confirm-password')
const form = document.querySelector('form');
const checkError = document.querySelector('.error');

form.addEventListener('submit', (event)=>{
    if(!(pass.value==passCheck.value)){
        console.log('hey its not the same password')
        event.preventDefault();
        checkError.textContent='*passwords don\'t match';
    };
});