const viewOffices = document.querySelector('.viewOffices');

const displayOffices = document.querySelector('.displayOffices');

const officesInDatabase = e => {
    e.preventDefault();

    // currApiEndpoint = 'http://localhost:3000/offices';
    const currApiEndpoint = 'https://warri-politica.herokuapp.com/offices';

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
    .then((offices) => {
        let officesFetched = '';
        console.log(offices);
        offices.rows.forEach((office) => {
            const { id, type, name } = office

            officesFetched +=
            `<tr>
                <td>${id}</td>
                <td>${type}</td>
                <td>${name}</td>
            </tr>`
        })
        displayOffices.innerHTML += officesFetched;
    })
}

// viewOffices.addEventListener('click', officesInDatabase);
window.addEventListener('load', officesInDatabase)