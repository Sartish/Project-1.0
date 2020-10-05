const form =document.getElementById('form');
const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const nameValue = name.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

/* Showing message if blank= error sucess = filled in*/
if(nameValue === ''){
    //show error
    //add error class
    setErrorFor(name,'can not be blank');
} else {
    // add success class
    setSuccessFor(name);
}

if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'can not be blank');
} else {
        // add success class
        setSuccessFor(username);
}

if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
} else {
	setSuccessFor(email);
	}

}
function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small tag
    small.innerText= message;
    //add error class
    formControl.className ='form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; 
    formControl.className ='form-control success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}