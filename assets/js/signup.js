const signUpForm = document.querySelector('.signup');
const firstname = document.querySelector('.firstname');
const firstnameError = document.querySelector('.firstnameError');
const lastname = document.querySelector('.lastname');
const lastnameError = document.querySelector('.lastnameError');
const othernames = document.querySelector('.othernames');
const othernamesError = document.querySelector('.othernamesError');
const email = document.querySelector('.email');
const emailError = document.querySelector('.emailError');
const phonenumber = document.querySelector('.phonenumber');
const phonenumberError = document.querySelector('.phonenumberError');
const password = document.querySelector('.password');
const passwordError = document.querySelector('.passwordError');
const passporturl = document.querySelector('.passporturl');
const passporturlError = document.querySelector('.passporturlError')

// const currApiEndpoint = 'http://127.0.0.1:3000';
const currApiEndpoint = 'https://warri-politica.herokuapp.com';

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {};
  if (firstname.value) {
    formData.firstname = firstname.value;
  }
  if (lastname.value) {
    formData.lastname = lastname.value;
  }
  if (othernames.value) {
    formData.othernames = othernames.value;
  }
  
  if (email.value) {
    formData.email = email.value;
  }
  if (phonenumber.value) {
    formData.phonenumber = phonenumber.value;
  }
  if (password.value) {
    formData.password = password.value;
  }
  if (passporturl.value) {
    formData.passporturl = passporturl.value;
  }

  // checks if input contains only letters
  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  // checks if password is valid
  function isValidPass(s) {
    const re = /[a-z]\d|\d[a-z]/i;
    return re.test(s) && s.length > 3;
  }

  if (hasNumber(firstname.value)) {
    spanFirstName.innerHTML = '** firstname can only contain letters';
    spanFirstName.style.color = 'red';
    return false;
  }
  if (hasNumber(lastname.value)) {
    spanLastName.innerHTML = '** lastname can only contain letters';
    spanLastName.style.color = 'red';
    return false;
  }
  if (hasNumber(othernames.value)) {
    othernamesError.innerHTML = '** other names can only contain letters';
    othernamesError.style.color = 'red';
    return false;
  }
  if (!isValidPass(password.value)) {
    passwordError.innerHTML = '** password should contain letters and numbers';
    passwordError.style.color = 'red';
    return false;
  };
  console.log(formData);
  console.log(JSON.stringify(formData));
  
  const fetchConfig = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
    
  };
  fetch(`${currApiEndpoint}/auth/signup`, fetchConfig)
    .then(resp => resp.json())
    .then((resp) => {
      const { error, data } = resp;
      if (error) {
        if(error.password){
          passporturlError.innerHTML = error.password
          console.log(error.password);
          
        }
        console.log(error);
        
      }

      if (data) {
        alert('Account created successfully! Click OK')
        window.location = './signin.html';
      }
    })
    .catch(err => console.log(err));
});
