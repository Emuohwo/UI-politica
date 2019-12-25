const signInForm = document.querySelector('.signinForm')
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const emailError = document.querySelector('.emailerror');
const passwordError = document.querySelector('.passworderror');

// const currApiEndpoint = 'http://localhost:3000';
const currApiEndpoint = 'https://warri-politica.herokuapp.com';


signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signInData = {};

  if (email.value) {
    signInData.email = email.value;
  }
  if (password.value) {
    signInData.password = password.value;
  }

  const fetchConfig = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': localStorage.token
    },
    body: JSON.stringify(signInData),
  };
  fetch(`${currApiEndpoint}/auth/login`, fetchConfig)
    .then(resp => resp.json())
    .then((resp) => {
      const { error, data } = resp;
      if (error) {
        if (error.email) {
          emailError.innerHTML = error.email;
          emailError.style.color = 'red';
        }
        if (error.message) {
          passwordError.innerHTML = error.message;
          passwordError.style.color = 'red';
        }
      }
      if (data) {
        const { user, token } = data[0];
        localStorage.user = JSON.stringify(user);
        localStorage.token = token;

        if (user.isadmin === true) {
          window.alert('Click "OK" to login to Admin Dashboard');
          window.location = './admin.html';
        } else if (user.isadmin === false) {
          window.alert('Click "OK" to login to User Dashboard');
          window.location = './user.html';
        } else {
          window.alert('Click "OK" to try again');
          window.location = './signin.html';
        }
      }
    })
    .catch(err => console.log(err));
});
