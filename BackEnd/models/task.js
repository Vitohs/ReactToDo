import mongoose from "../db/conn.js";

//CRIANDO OS SCHEMAS

const {Schema} = mongoose
const taskSchema = new Schema({
    titulo:{
        type:String,
        required:true
    },
    descricao:{
        type:String,
        required:true
    },
    dataLimite:{
        type:Date,
        required:true
    },
    situacao:{
        type:String,
        required:true
    }
},{timestamps:true})

const Tarefa = mongoose.model('Tarefa', taskSchema)

export default Tarefa