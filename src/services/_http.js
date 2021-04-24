import axios from 'axios'
let baseURL = process.env.REACT_APP_SERVER_URL

const instance = axios.create({
	baseURL
})

export default instance