import axios from 'axios';

const apiURL = `https://one-line-daily.herokuapp.com/api/entries`;

//access a specific entry
export function getEntry(id) {
    return axios.get(`${apiURL}/entry/${id}`);
}

//return all entries
export function getEntries() {
    return axios.get(`${apiURL}/entry`);
}

//add entry to our api
export function addEntry(entry) {
    return axios.post(`${apiURL}/entry`, entry);
}

//return entry to be edited (by id)
export function editEntry(id, entry) {
    return axios.put(`${apiURL}/entry/${id}`, entry);
}

const api = {
    getEntry,
    getEntries,
    addEntry,
    editEntry
};

export default api;