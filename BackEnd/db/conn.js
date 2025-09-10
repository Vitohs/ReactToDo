//CONEXÃO COM O MONGODB YESSSSSSSSIRRRRRR
import mongoose from "mongoose"; //IMPORTANDO O HOMI

async function main(){
    await mongoose.connect('mongodb://localhost/27017/toDo') //PORTA DO BANCO, SE NÃO EXISTIR BANCO COM O NOME ELE CRIA
    console.log('conexão feita com sucesso')
}
main().catch((erro)=>{
    console.log(erro)
})//VAI TENTAR FAZER A CONEXÃO CASO NAO CONSEGUIR ELE CAI NO CATCH E MOSTRA O ERRO!! XD

export default mongoose //EXPORTANDO O MENINO NEY 'O'