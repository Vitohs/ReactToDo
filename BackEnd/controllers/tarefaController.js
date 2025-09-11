import Tarefa from "../models/task.js";
import { isValidObjectId, Types } from "mongoose";

export default class tarefaController{
    static async create(req,res){
        const {titulo,descricao,dataLimite,situacao} = req.body
        if(!titulo){
           return res.status(422).json({
                message: 'titulo é um campo obrigatório.'
            })
        }
        if(!descricao){
            return res.status(422).json({
                 message: 'descrição é um campo obrigatório.'
             })
        }
        if(!dataLimite){
            return res.status(422).json({
                 message: 'data é um campo obrigatório.'
             })
        }
        if(!situacao){
            return res.status(422).json({
                 message: 'situação é um campo obrigatório.'
             })
        }

        const task = new Tarefa({
            titulo,
            descricao,
            dataLimite,
            situacao
        })
        try {
            const newTask = await task.save()
            res.status(200).json({
                message:'tarefa inserida com sucesso', newTask
            })
        } catch (error) {
            res.status(500).json({
                message: `deu bolote kk erro: ${error}`
            })
        }
    }

    static async remove(req,res){
        const id = req.params.id
        const objectId = Types.ObjectId
        if(!objectId.isValid(id)){
            return res.status(422).json({
                message:'id invalido'
            })
        }
        try{
            const task = await Tarefa.findOne({_id:id})
            if(!task){
                return res.status(404).json({message:'achei naokkj'})
            }
            await Tarefa.findByIdAndDelete(id)
            return res.status(200).json({message: 'oiiiii'})
        }
        catch(error){   
            res.status(500).json({
                message: `deu bololô kk erro: ${error}`
            })
        }
    }
    static async getAll(req,res){
        try{
            const tasks = await Tarefa.find({})//acha tudo ae
            res.status(200).json({
                tasks
            })
        }
        catch(error){
            res.status(500).json({
                message: `deu bololô kk erro: ${error}`
            })
        }
    }
    static async getOne(req,res){
        const id = req.params.id
        const objectId = Types.ObjectId
        if(!objectId.isValid(id)){
            return res.status(422).json({
                message:'id invalido'
            })
        }
        try{
            const task = await Tarefa.findOne({_id:id})
            if(!task){
                return res.status(404).json({message:'achei naokkj'})
            }
            return res.status(200).json({message: 'oiiiii'})
        }
        catch{
            res.status(500).json({
                message: `deu bololô kk erro: ${error}`
            })
        }
    }
}