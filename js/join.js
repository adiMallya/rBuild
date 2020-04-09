function allLetter()
{    
var uname = document.joinform.name;    
var letter = /^[A-Za-z +]+$/;
if(uname.value.match(letter))
{
    setSuccesFor(uname);
    document.joinform.phno.focus();
    return true; 
}
else
{
    setErrorFor(uname,"Invalid Name!");
    if(uname.value === ''){
        setErrorFor(uname,"Field cannot be left blank");
        return false;
    }
    return false;
    
}
}
function phoneNumeric()
{ 
var num = document.joinform.phno;    
var phonenos = /^\d{10}$/;
if(num.value.match(phonenos))
{
    setSuccesFor(num);    
    document.joinform.mail.focus();  
    return true;
}
else
{
    setErrorFor(num,"Invalid Phone No.!");
    if(num.value === ''){
        setErrorFor(num,"Field cannot be left blank");
        return false;
    }
    return false;
}
}
function validateEmail()
{
var email = document.joinform.mail;    
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
    setSuccesFor(email);      
    return true;
}
else
{
    setErrorFor(email,"Invalid Email-id!");
    if(email.value === ''){
        setErrorFor(email,"Field cannot be left blank");
        return false;
    }
    return false;
}
}
function setErrorFor(input,message){
    const parent = input.parentElement;
    const small = parent.querySelector('small');
    
    small.innerText = message;
    parent.className = 'col-75 error';
}
function setSuccesFor(input){
    const parent = input.parentElement;
    parent.className =  'col-75 success';
}

function onSubmission(){
    var n = allLetter();
    var p = phoneNumeric();
    var e = validateEmail();
    if (n.value == false || p.value == false || e.value ==false){
        document.getElementById("btnsubmit").addEventListener("click",function(event){
        event.preventDefault();
    });
    }
    else{
        const frm = document.getElementById("form3");
        alert('Thank You! We will get in touch soon.');
        frm.submit();
        frm.reset();
        return false;
    }
}