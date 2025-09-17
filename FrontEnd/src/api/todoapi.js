//APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
import axios from "axios" //RESPONSÁVEL PELA COMUNICAÇÃO
const api = axios.create({
    baseURL: 'http://localhost:8000/ToDo',  //rota do back
    headers:({
        "Content-Type": "application/json"
    })
})
export const getTodos = ()=>api.get('/getAll')
export const createTodo = (payload)=>api.post('/Create', payload)
export const deleteTodo = (id)=>api.delete(`/${id}`)

export default api