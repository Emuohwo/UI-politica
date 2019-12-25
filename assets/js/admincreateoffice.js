const admincreateoffice = document.querySelector('.admincreateoffice');

const typefield = document.querySelector('.type');
const typeError = document.querySelector('.typeError');
const namefield = document.querySelector('.name');
const nameError = document.querySelector('.nameError');

const officeData = [];
const { type, name } = officeData

if (typefield.value) {
    type = typefield.value;
}
if (typefield.value === "") {
    typeError.innerHTML = 'Select Office type';
    typeError.style.color = 'red'
} else {
    typeError.innerHTML = 'Select Office type';
    typeError.style.color = 'red'
}

if (namefield.value) {
    name = namefield.value
} else {
    nameError.innerHTML = 'Name of office is required';
    nameError.style.color = 'red'
}

// let postOfficeURl = 'http://localhost:3000/offices'
const postOfficeURl = 'https://warri-politica.herokuapp.com/offices';


const createOffice = (e) => {
    e.preventDefault();

    const fetchConfig = {
        method: 'POST',
        headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',
            'x-access-token': localStorage.token
        }),
        mode: 'cors',
        body: JSON.stringify(officeData)
    }

    fetch(postOfficeURl, fetchConfig)
    .then(response => response.json())
    .then((office) =>{
        console.log(office);
        
    })
    .catch((error) => {
        console.log(error);
        
    })

}

admincreateoffice.addEventListener('submit', createOffice)