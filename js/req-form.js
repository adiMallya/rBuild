function allLetter()
{    
var uname = document.requestform.name;    
var letter = /^[A-Za-z +]+$/;
if(uname.value.match(letter))
{
    setSuccesFor(uname);
    document.requestform.phno.focus();
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
var num = document.requestform.phno;    
var phonenos = /^\d{10}$/;
if(num.value.match(phonenos))
{
    setSuccesFor(num);    
    document.requestform.mail.focus();  
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
var email = document.requestform.mail;    
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
    setSuccesFor(email);    
    document.requestform.larea.focus();  
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
function minArea()
{ 
var area = document.requestform.larea;    
var numbers = /^[0-9]+$/;
if(area.value.match(numbers) && parseInt(area.value)>= 1200)
{
    setSuccesFor(area);    
    document.requestform.budget.focus();  
    return true;
}
else
{
    setErrorFor(area,"");
    if(area.value === ''){
        area.value = 1200;
        setSuccesFor(area);
    }
    return false;
}
}
function budgetCheck()
{
   var bdg = document.requestform.budget; 
   if(bdg.value == "")
   {
       setSuccesFor(bdg);
       return true;
   } 
   else if(parseInt(bdg.value) >= 1800000){
       setSuccesFor(bdg);
       return true;
   }
   else{
        setErrorFor(bdg,"Minimum Rs 18,00,000!");
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
    var a = minArea();
    var b = budgetCheck();
    if (n.value == false || p.value == false ||e.value == false ||a.value == false|| b.value == false){
        document.getElementById("btnsubmit").addEventListener("click",function(event){
        event.preventDefault();
    });
    }
    else{
        const frm = document.getElementById("form1");
        alert('Thank You! We will get in touch soon.');
        frm.submit();
        frm.reset();
        return false;
    }
}

