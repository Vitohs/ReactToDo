import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getATodos } from "../api/todoapi";
import { deleteTodo } from "../api/todoapi";
import TodoItem from "../components/todoItem";

export default function ToList(){
    const {todos,setTodos} = useState([])
    const {loading, setLoading} = useState(false)
    const {èrror, setError} = useState(null)

    const fetch = async()=>{
        try {
            
        } catch (error) {
            
        }
    }
}