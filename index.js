let myForm = document.querySelector('#my-Form');
let myEmail = document.querySelector('#Email');
let myPassword = document.querySelector('#passWord');
let msgError1 = document.querySelector('#span1');
let msgError2 = document.querySelector('#span2');
let msgSuccess = document.querySelector('#span3');

myForm.addEventListener('submit',onSubmit);

function onSubmit(){
    event.preventDefault();
    if(myEmail.value === '' && myPassword.value === ''){
        msgError1.innerHTML ='<small>Please fill the input field!</small>';
        msgError1.style.color = 'red';

        msgError2.innerHTML ='<small>Please fill the input field!</small>';
        msgError2.style.color = 'red';
    }
    else if(!(myEmail.value === '') && (myPassword.value === '')){
        msgError1.innerHTML ='';
        msgError2.innerHTML ='<small>Please fill the input field!</small>';
        msgError2.style.color = 'red';
    }
    
    else if((myEmail.value === '') && !(myPassword.value === '')){
        msgError1.innerHTML ='<small>Please fill the input field!</small>';
        msgError1.style.color = 'red';
        msgError2.innerHTML ='';
    }
    else {
        msgError1.innerHTML ='';
        msgError2.innerHTML ='';
        msgSuccess.innerHTML ='<small>SignUp Successfull</small>';
        msgSuccess.style.color = 'green';
    }
    
}