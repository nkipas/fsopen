import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
    const q = axios.get(baseUrl)
    return q.then(s => s.data)
}

const create = newObject => {
    const q = axios.post(baseUrl, newObject)
    return q.then(s => s.data)
}

const update = (id, newObject) => {
    const q = axios.put(`${baseUrl}/${id}`, newObject)
    return q.then(s => s.data)
}

const exports = {
    getAll,
    create,
    update,
};

export default exports
