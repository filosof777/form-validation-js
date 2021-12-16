let elForm = document.querySelector('.form');
let elFormBtn = document.querySelector('.form__btn')

let elFirstName = document.querySelector('#fname');
let elLastName = document.querySelector('#lname');
let elEmail = document.querySelector('#email');
let elPassword_1 = document.querySelector('#password-1');
let elPassword_2 = document.querySelector('#password-2');

let elSpanFName = document.querySelector('.form__label:nth-child(1) .form__span');
let elSpanSName = document.querySelector('.form__label:nth-child(2) .form__span');
let elSpanEmail = document.querySelector('.form__label:nth-child(3) .form__span');
let elSpanPassword_1 = document.querySelector('.form__label:nth-child(4) .form__span');
let elSpanPassword_2 = document.querySelector('.form__label:nth-child(5) .form__span');

let inputName = '';
let userInfo = {};

elForm.addEventListener('click', (e) => {
  e.preventDefault();
  elFirstName.addEventListener('keyup', () => {
    userInfo.fName = elFirstName.value;
  });
  elLastName.addEventListener('keyup', () => {
    userInfo.lname = elLastName.value;
  });
  elEmail.addEventListener('keyup', () => {
    userInfo.email = elEmail.value;
  });
  elPassword_1.addEventListener('keyup', () => {
    userInfo.password_1 = elPassword_1.value;
  });
  elPassword_2.addEventListener('keyup', () => {
    userInfo.password_2 = elPassword_2.value;
  });

  
  // console.log(userInfo);
});

try {
  
} catch (error) {
  
}

elFormBtn.addEventListener('click', () => {
  if (elFirstName.value != '' && elLastName.value != '' && elEmail.value != '' && elPassword_1.value != '' && elPassword_2.value != '' && elPassword_1.value == elPassword_2.value) {
    elFirstName.value = ''
    elLastName.value = ''
    elEmail.value = ''
    elPassword_1.value = ''
    elPassword_2.value = ''
  }
  console.log(userInfo.email);
  if (userInfo.fName == undefined) {
    elFirstName.style.borderColor = 'red';
    elSpanFName.textContent = 'Please enter first name email';
    elSpanFName.style.color = 'red';
  } 
  else if (userInfo.email != ''){
    elFirstName.style.borderColor = 'green';
    elSpanFName.textContent = '0';
    elSpanFName.style.color = 'transparent';
  }
  if (userInfo.lname == undefined) {
    elLastName.style.borderColor = 'red';
    elSpanSName.textContent = 'Please enter last name email';
    elSpanSName.style.color = 'red';
  } 
  else if (userInfo.email != ''){
    elLastName.style.borderColor = 'green';
    elSpanSName.textContent = '0';
    elSpanSName.style.color = 'transparent';
  }
  if (userInfo.email == undefined) {
    elEmail.style.borderColor = 'red';
    elSpanEmail.textContent = 'Please enter enter email';
    elSpanEmail.style.color = 'red';
  } 
  else if (userInfo.email != ''){
    elEmail.style.borderColor = 'green';
    elSpanEmail.textContent = '0';
    elSpanEmail.style.color = 'transparent';
  }
  if (userInfo.password_1 == undefined) {
    elPassword_1.style.borderColor = 'red';
    elSpanPassword_1.textContent = 'Please enter password email';
    elSpanPassword_1.style.color = 'red';
  } 
  else if (userInfo.password_1 != ''){
    elPassword_1.style.borderColor = 'green';
    elSpanPassword_1.textContent = '0';
    elSpanPassword_1.style.color = 'transparent';
  }
  if (userInfo.password_2 == undefined) {
    elPassword_2.style.borderColor = 'red';
    elSpanPassword_2.textContent = 'Please enter password again email';
    elSpanPassword_2.style.color = 'red';
  } 
  else if (userInfo.password_2 != ''){
    elPassword_2.style.borderColor = 'green';
    elSpanPassword_2.textContent = '0';
    elSpanPassword_2.style.color = 'transparent';
  }


});

// console.log([/^\S+@\S+\.\S+$/]);

// console.log('gap gap let');



// let a = /[^a-z\s]/
// /^\S+@\S+\.\S+$/

// console.log(a);