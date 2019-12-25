
const displayParties = document.querySelector('.displayParties');


// currApiEndpoint = 'http://localhost:3000/parties';
const currApiEndpoint = 'https://warri-politica.herokuapp.com/parties';

let partiesFetched = '';


const getAllParties = (parties) => {
    parties.data.forEach((party) => {
        const { id, name, hqaddress, logourl, createddate, modifieddate } = party

        partiesFetched +=
        `
        <tr>
            <td>${id}</td>
            <td><img src="${logourl}" alt="${name}" class="party_logo" /> </td>
            <td>${name}</td>
            <td> ${createddate} </td>
            <td> ${modifieddate} </td>
            <td> ${hqaddress} </td>
            <td>
                <div class="action">
                    <a href="/${id}" class="btn edit">Edit</a>
                    <a href="/${id}" class="btn delete">Delete</a>
                </div>
            </td>
        </tr>`
    })
    displayParties.innerHTML += partiesFetched;
}



const parties = (parties) => {
    
    getAllParties(parties)

}

const partiesDatabase = e => {
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
    .then(parties)
}


window.addEventListener('load', partiesDatabase);


