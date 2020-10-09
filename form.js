//Declearing variables I want to use as//
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

//Adding an event to submit button. That something needs to happen when we click submit. 
//The checkInput function is then running
form.addEventListener('submit', (e) => {
    e.preventDefault();
//We want to chek and verify the input, if it is valid//
    checkInputs();
});

//decsiding what we want the checkInput function to do.
function checkInputs(){
    const firstName = firstName.value();
    const lastName = lastName.value();
    const email = email.value();
    const phone = phone.value();
    const message = message.value();


// show error if fields are blank.
if(firstNameValue === ''){
        //show error
        //add error class
        setErrorFor(firstNameValue,'can not be blank');
    } else {
        // add success class
        setSuccessFor(firstNameValue);
    }
}




