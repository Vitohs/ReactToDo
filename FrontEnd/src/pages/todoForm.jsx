import React, {useState} from "react"; // importando react junto com um controlador de estado
import { useNavigate } from "react-router-dom"; // nescessário para poder trabalhar com rotas da aplicação
import { getTodos } from "../api/todoapi";
import { deleteTodo } from "../api/todoapi";
import { createTodo } from "../api/todoapi";
import style from "./TodoForm.module.css"

export default function TodoForm(){
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [dataLimite, setDataLimite] = useState("")
    const [situacao, setSituacao] = useState("Pendente")
    const [saving, setSaving] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault() //não recarrega a página
        setSaving(true)
        try {
            //salvando no banco
            await createTodo({titulo,descricao,dataLimite,situacao})
            navigate("/")
        } catch (error) {
            alert(error.Message || "Erro")
        }
        finally {
            setSaving(false)
        }
    }
    return(
        <form onSubmit={handleSubmit} className={style.formContainer}>
            <div>
                <label className={style.formLabel}>Titulo:</label>
                <input required value={titulo} className={style.formInput} onChange={e => setTitulo(e.target.value)} />

            </div>

            <div>
                <label className={style.formLabel}>Descrição:</label>
                <textarea required value={descricao} onChange={e => setDescricao(e.target.value)} className={style.formInput}></textarea>
            </div>

            <div>
                <label className={style.formLabel}>Data limite:</label>
                <input type="text" required value={dataLimite} className={style.formInput} onChange={e => setDataLimite(e.target.value)} />

            </div>

            <div className={style.buttonGroup}>
                <button disabled = {saving} className={style.buttonPrimary}>
                    {saving?"Salvando....":"Salvar"}
                </button>

                {/* navigate menos 1 faz ele ir para a pagina anterior */}
                <button type="button" className={style.buttonSecondary} onClick={()=>navigate(-1)}>
                    Cancelar
                </button>
            </div>
        </form>
    );
}