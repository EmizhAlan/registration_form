var body = document.querySelector('body');
body.style.cssText = 'background-color: blue;';

//Create form
var form = document.createElement('form');
form.id = 'registrationForm';
form.style.cssText = 'border: 2px solid black';

//create username form
var label = document.createElement('label');
label.setAttribute('for', 'username');
label.innerHTML = 'text';
label.textContent = 'Name user';

var input = document.createElement('input');
input.type = 'text';
input.id = 'username';
input.name = 'username';

var br = document.createElement('br');

////Create password form

var label2 = document.createElement('label');
label2.setAttribute('for', 'password');
label2.innerHTML = 'text';
label2.textContent = 'Password';

var input2 = document.createElement('input');
input2.type = 'text';
input2.id = 'password';
input2.name = 'password';

var br2 = document.createElement('br');

//Regis
var input3 = document.createElement('input');
input3.type = 'submit';
input3.value = 'Sign up';

//Add an elements:
body.appendChild(form);
form.appendChild(label);
form.appendChild(input);
form.appendChild(br);
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(br2);
form.appendChild(input3);

