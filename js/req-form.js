var name = document.requestForm.name;
var phno = document.requestForm.phno;
var email = document.requestForm.mail;
var larea = document.requestForm.larea;
var budget = document.requestForm.budget;
var y = document.requestForm.yes;
var n = document.requestForm.no;

function formValidation()
{

if(allLetter(name))
{
if(phoneNumeric(phno))
{ 
if(validateEmail(email)) 
{   
if(minArea(larea))
{
if(budgetCheck(budget))
{    
if(check(y,n))
{
}
} 
}
} 
}
}
return false;
} 

function allLetter(name)
{ 
var letter = /^[A-Za-z]+$/;
if(name.value.match(letter))
{
return true;
}
else
{
alert('Your name must have alphabets only!');
name.focus();
return false;
}
}

function phoneNumeric(phno)
{ 
var phonenos = /^\d{10}$/;
if(phno.value.match(phonenos))
{
return true;
}
else
{
alert('Not a valid Phone Number!');
phno.focus();
return false;
}
}

function validateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}

function minArea(larea)
{ 
var numbers = /^[0-9]+$/;
if(larea.value.match(numbers) && larea.value >= 1200)
{
    return true;
}
else
{
alert('You have entered a value less than the minimun area required!');
larea.focus();
return false;
}
}

function budgetCheck(budget)
{
   if(budget.value == "")
   {
       return true;
   } 
   else if(budget.value >= 1800000){
       return true;
   }
   else{
       alert('Sorry we cannot offer you help in this budget, for the rates in market you should ideally keep atleast Rs 18,00,000 as your budget');
       budget.focus();
       return false;
   }
}

function check(y,n)
{
x=0;

if(y.checked) 
{
x++;
} 
if(n.checked)
{
x++; 
}
if(x==0)
{
alert('Select Yes/No');
umsex.focus();
return false;
}
else
{
alert('Thank You! We will get back to you soon.');
window.location.reload()
return true;
}
}
