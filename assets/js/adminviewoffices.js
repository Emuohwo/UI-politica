// const viewOffices = document.querySelector('.viewOffices');

const displayOffices = document.querySelector('.displayOffices');


// currApiEndpoint = 'http://localhost:3000/offices';
const currApiEndpoint = 'https://warri-politica.herokuapp.com/offices';

let officesFetched = '';

// TRIAL ZONE START HERE======================================================
const updateOffices = (e) => {

    e.preventDefault();

    let edit = e.target.tagName
   
        // let edit = document.querySelector('.editOffice')
        // edit.addEventListener.addEventListener('click', updateOffices)
     
}



// TRIAL ZONE ENDS HERE==========================================================

const getOffices = (offices) => {
    offices.rows.forEach((office) => {
        const { id, type, name } = office

        officesFetched +=
        `<tr>
            <td>${id}</td>
            <td>${type}</td>
            <td>${name}</td>
            <td>
                <div class="action">
                    <a href="/${id}" class="btn edit editOffice">Edit</a>
                    <a href="/${id}" class="btn delete">Delete</a>
                </div>
            </td>
        </tr>`
    })
    displayOffices.innerHTML += officesFetched;
}



const offices = (offices) => {
    // call the getOffices Function
    getOffices(offices)

    // TRIAL
    // updateOffices(offices)
    // TRIAL ENDS

}

const officesInDatabase = e => {
    e.preventDefault();

    const configFetch = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': localStorage.token
        }
    }

    fetch(currApiEndpoint, configFetch)
    .then((response) => {return response.json()})
    .then(offices)
}

// document.querySelector('tr.editOffice').addEventListener('click', update)

// viewOffices.addEventListener('click', officesInDatabase);
window.addEventListener('load', officesInDatabase);



function update(event){
    var officesFetched = event.target.getAttribute("officeid")
    console.log(officesFetched);
    
	fetch(currApiEndpoint + "/" + officesFetched, {
	  method: 'PATCH',
	  body: JSON.stringify({
	   text: event.target.innerText
	  })
	}).then(function(response){
	  response.json().then(function(todo){
	    console.log(todo)
	  })
	})
}