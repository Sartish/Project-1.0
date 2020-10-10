//Declearing variables I want to use in functions//

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');


//Need to prevent the page from reloading when entering submit. Adding a event listener with a function to prevent this

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    //cutom made function
    checkInputs();
});

function checkInputs(){
    //get values from the inputs (trim removes white space in the string.
   

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
//If they put in correct values we want to show success and wrong values, want to show erroe 
    if(firstnameValue ===''){
        //show error
        // add error class
        setErrorFor(firstname, 'first name cannot be blank');
    } else{
        //add success class
        setSucessFor(firstname);
    }

}

//Error function 

Function setErrorFor(input, message) 
{
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function SetSuccessFor (input) {
    const formControl = input.parentElement; 
    formControl.className = 'form-control sucess';
}