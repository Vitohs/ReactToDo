import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoapi";
import { deleteTodo } from "../api/todoapi";
import TodoItem from "../components/todoItem";
import style from "./TodoList.module.css"

export default function ToList(){
    const [todos,setTodos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetch = async()=>{
        try {
            setLoading(true)
            const res = await getTodos()
            setTodos(res.data)
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
            <div className={style.header}>
                <h2 className={style.title}>Tarefas</h2>
                <Link to="/new">Nova Tarefa</Link>
            </div>
            {loading && <p>Carregando...</p>}
            {error && <p className={style.error}>{error}</p>}
            <div className={style.container}>
                {todos?.length === 0 && !loading ? (<p className={style.noTasks}>Nenhuma tarefa encontrada </p>) : 
                    (todos?.map(todo => (<TodoItem
                        key={todo._id}
                        todo={todo}
                        onDelete={() => handleDelete(todo._id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}