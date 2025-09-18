//ROTAAAASSS XD
import { Router } from "express";
import TarefaController from '../controllers/tarefaController.js'

const rota = Router()//INSTANCIANDO A ROTA



rota.post('/Create', TarefaController.create) //ROTA DE INSERÇÃO

rota.get('/getAll', TarefaController.getAll) //ROTA PEGANDO TODAS AS TASKS

rota.delete('/:id', TarefaController.remove) //ROTA DELETE TASK

rota.get('/:id', TarefaController.getOne) //PEGANDO UMA TASK

export default rota