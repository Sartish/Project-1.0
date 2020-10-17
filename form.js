//Declearing variables I want to use in functions//

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

//Need to prevent the page from reloading when entering submit. Adding a event listener with a function to prevent this

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


//get values from the inputs (trim removes white space in the string)
function checkInputs(){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

 //If they put in correct values we want to show success and wrong values, want to show error 
  //show error // add error class //add success class

    if(firstnameValue ===''){
        setErrorFor(firstname, 'first name cannot be blank');
    } else{
        setSuccessFor(firstname);
    }

    //Lastname
    if(lastnameValue ===''){
        setErrorFor(lastname, 'first name cannot be blank');
    } else{
        setSuccessFor(lastname);
    }

    //Phone
    if(phoneValue ===''){
        setErrorFor(phone, 'Phone number cannot be blank');
    } else{
        setSuccessFor(phone);
    }

    //email
    if(emailValue ===''){
    setErrorFor(email, 'Email name cannot be blank');
    } 
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else{
        setSuccessFor(email);
    }
    
}

//Error function 
//add error message inside small
//add error class
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
	
//costum made function for valid email 
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





