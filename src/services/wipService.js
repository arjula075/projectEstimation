import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/notes'

const getAll = async (parameters) => {
  console.log('service', parameters)
  const response = await axios.post(baseUrl, parameters)
  return response.data
}

export default { getAll }
