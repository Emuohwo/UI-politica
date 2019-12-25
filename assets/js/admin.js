
const displayCandidates = document.querySelector('.displayCandidates');


// const currApiEndpoint = 'http://localhost:3000/candidates';
const currApiEndpoint = 'https://warri-politica.herokuapp.com/candidates';

let candidatesFetched = '';


const getAllCandidates = (candidates) => {
    candidates.data.forEach((candid) => {
        const { id, office, party, candidate, status } = candid

        candidatesFetched +=
        `
        <tr>
            <td>${id}</td>
            <td>${office}</td>
            <td> ${party} </td>
            <td> ${candidate} </td>
            <td> ${status} </td>
            <td>
                <div class="action">
                    <a href="/${id}" class="btn edit">Edit</a>
                    <a href="/${id}" class="btn delete">Delete</a>
                </div>
            </td>
        </tr>`
    })
    displayCandidates.innerHTML += candidatesFetched;
}



const candidates = (candidates) => {
    
    getAllCandidates(candidates)

}

const candidatesDatabase = e => {
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
    .then(candidates)
}


window.addEventListener('load', candidatesDatabase);


