const Name=document.getElementById('Name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const form=document.getElementById('form');
const message=document.getElementById('message');
const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
const phone_error=document.getElementById('phone_error');
const message_error=document.getElementById('message_error');


form.addEventListener('submit',(e)=>{
   var email_check=/^([A-Za-z0-9_\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var name_check=/^[a-zA-Z\s'-]+$/;
   var phone_check=/^\d{10}$/;


    if(Name.value.trim() === '' || Name.value == null){
        e.preventDefault();
        name_error.innerHTML="*Name is required";
    }
    else if(!Name.value.match(name_check)){
        e.preventDefault();
        name_error.innerHTML="*Name is invalid";
    }
    else{
        name_error.textContent="";
    }
    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML="*E-mail is not in correct format";
    }
    else{
        email_error.textContent="";
    }
    if(!phone.value.match(phone_check)){
        e.preventDefault();
        phone_error.innerHTML="*Phone number is invalid";
    }
    else{
        phone_error.textContent="";
    }
    if(message.value.trim()==='' || message.value==null){
        e.preventDefault();
        message_error.innerHTML="*Message should not be empty";
    }
    else{
        message_error.textContent="";
    }
})
/*function name_checker()
{
    const Name=document.getElementById('Name').value;
    var Name_check=/^[a-zA-Z\s'-]+$/;
    if(Name.value.trim() === '' || Name.value == null){
        name_error.innerHTML='*Name is required';
        return false;
    }
    else if(!Name.value.match(Name_check)){
        name_error.innerHTML="*Name is invalid";
        return false;
    }
    else{
        name_error.innerHTML='';
        return true;
    }
}*/
