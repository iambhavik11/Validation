let myForm = document.querySelector('#my-Form');
let myEmail = document.querySelector('#Email');
let myPassword = document.querySelector('#passWord');
let msgError1 = document.querySelector('#span1');
let msgError2 = document.querySelector('#span2');
let msgSuccess = document.querySelector('#span3');
let BodyColor = document.querySelector('body');
BodyColor.style.background = 'rgb(253, 249, 232)';

msgError1.innerHTML = '<small>(eg. example@gmail.com)</small>';
msgError1.style.color = 'grey';

msgError2.innerHTML = '<small>(eg. It can be mixture of 0-9 , A-z , a-z , @ , $ are allowed)</small>';
msgError2.style.color = 'grey';

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
        msgError1.innerHTML = '<small>(eg. example@gmail.com)</small>';
        msgError1.style.color = 'grey';
        msgError2.innerHTML ='<small>Please fill the input field!</small>';
        msgError2.style.color = 'red';
    }
    
    else if((myEmail.value === '') && !(myPassword.value === '')){
        msgError1.innerHTML ='<small>Please fill the input field!</small>';
        msgError1.style.color = 'red';
        msgError2.innerHTML = '<small>(eg. It can be mixture of 0-9 , A-z , a-z , @ , $ are allowed)</small>';
        msgError2.style.color = 'grey';
    }
    else {
        msgError1.innerHTML = '<small>(eg. example@gmail.com)</small>';
        msgError1.style.color = 'grey';
        msgError2.innerHTML = '<small>(eg. It can be mixture of 0-9 , A-z , a-z , @ , $ are allowed)</small>';
        msgError2.style.color = 'grey';
        msgSuccess.innerHTML ='<small>SignUp Successfull</small>';
        msgSuccess.style.color = 'green';
    }
    
}