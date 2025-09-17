import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoapi";
import { deleteTodo } from "../api/todoapi";
import TodoItem from "../components/todoItem";

export default function ToList(){
    const {todos,setTodos} = useState([])
    const {loading, setLoading} = useState(false)
    const {error, setError} = useState(null)

    const fetch = async()=>{
        try {
            setLoading(true)
            const res = await getTodos()
            setTodos(res)
        } catch (error) {
            setError(error.Message || "Erro")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(()=>{fetch()},[])
    const handleDelete = async(id)=>{

    }
    return (
        <div>
            <div>
                <h2>Tarefas</h2>
                <Link to="/new">Nova Tarefa</Link>
            </div>
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            <div>
                {todos?.length === 0 && !loading ? (<p>Nenhuma tarefa encontrada </p>) : (todo?.map(todo => (<TodoItem
                    key={todo._id}
                    todo={todo}
                    onDelete={() => handleDelete(todo._id)}
                />
                )))}
            </div>
        </div>
    );
}