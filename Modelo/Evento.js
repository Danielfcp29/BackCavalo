import EventoDAO from "../Persistencia/EventoDAO.js";

export default class Evento {
    #id;
    #InfoEvento;
    #NomeEvento;
    #DataHora;
    #LocalEvento;
    #Preco;
    #QuantidadeI;
    #telefone;
    #email;
    

    constructor(id = 0, InfoEvento = "", NomeEvento = "", DataHora = "", LocalEvento = "", Preco = "", QuantidadeI = "", telefone = "", email = "") {
        this.#id = id;
        this.#InfoEvento = InfoEvento;
        this.#NomeEvento = NomeEvento;
        this.#DataHora = DataHora;
        this.#LocalEvento = LocalEvento;
        this.#Preco = Preco;
        this.#QuantidadeI = QuantidadeI;
        this.#telefone = telefone;
        this.#email = email;
    }

    set id(novoCodigo){
        this.#id = novoCodigo;
    }

    get InfoEvento(){
        return this.#InfoEvento;
    }

    set InfoEvento(novoSobre_Evento){
        this.#InfoEvento = novoSobre_Evento;
    }

    get NomeEvento(){
        return this.#NomeEvento;
    }

    set NomeEvento(novoNome_Evento){
        this.#NomeEvento = novoNome_Evento;
    }

    get DataHora(){
        return this.#DataHora;
    }

    set DataHora(novoData_Hora){
        this.#DataHora = novoData_Hora;
    }

    get LocalEvento(){
        return this.#LocalEvento;
    }

    set LocalEvento(novoLocal_Evento){
        this.#LocalEvento = novoLocal_Evento;
    }

    get Preco(){
        return this.#Preco;
    }

    set Preco(novoPreco){
        this.#Preco = novoPreco;
    }

    get QuantidadeI(){
        return this.#QuantidadeI;
    }

    set QuantidadeI(novoQuantidade_ingresso){
        this.#QuantidadeI = novoQuantidade_ingresso;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }

    get email(){
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

    async gravar(){
        const dao = new EventoDAO();
        await dao.gravar(this); 
    }

    async atualizar(){
        const dao = new EventoDAO();
        await dao.atualizar(this);
    }

    async excluir(){
        const dao = new EventoDAO();
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa){
        const dao = new EventoDAO();
        return await dao.consultar(termoDePesquisa);
    }


    toString(){
        return `Evento cÃ³digo: ${this.#id} -  nome: ${this.#InfoEvento}`;
    }

    toJSON(){
        return {
            "id": this.#id,
            "cpf": this.#InfoEvento,
            "nome": this.#NomeEvento,
            "endereco": this.#DataHora,
            "bairro": this.#LocalEvento,
            "cidade": this.#Preco,
            "estado": this.#QuantidadeI,
            "telefone": this.#telefone,
            "email": this.#email
        }
    }
}