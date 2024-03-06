import conectar from "./Conexao.js"; //não esquecer de colocar a extensão .js no final
import Evento from "../Modelo/Evento.js";
//DAO - Data Access Object
export default class EventoDAO{
    async gravar(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `INSERT INTO evento (InfoEvento, NomeEvento, DataHora, LocalEvento,
                Preco, QuantidadeI, telefone, email) 
                         values (?, ?, ?, ?, ?, ?, ?, ?)`;
            const parametros = [
                evento.InfoEvento,
                evento.NomeEvento,
                evento.DataHora,
                evento.LocalEvento,
                evento.Preco,
                evento.QuantidadeI,
                evento.telefone,
                evento.email
            ];
            const [resultados, campos] = await conexao.execute(sql,parametros);
            evento.id = resultados.insertId; 
        }
    }

    async atualizar(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `UPDATE evento SET InfoEvento = ?,
            NomeEvento = ?, DataHora = ?, LocalEvento = ?,
            Preco = ?, QuantidadeI = ?, telefone = ?,
                         email = ? WHERE id = ?`;
            const parametros = [
                evento.InfoEvento, 
                evento.NomeEvento,
                evento.DataHora,
                evento.LocalEvento,
                evento.Preco,
                evento.QuantidadeI,
                evento.telefone,
                evento.email,
                evento.id
            ];

            await conexao.execute(sql,parametros);
        }
    }

    async excluir(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `DELETE FROM cliente WHERE id = ?`;
            const parametros = [
                evento.codigo
            ]
            await conexao.execute(sql,parametros);
        }
    }


    
    async consultar(termoDePesquisa){
        if (termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql="";
        if (isNaN(termoDePesquisa)){ 
            sql = `SELECT * FROM evento WHERE nome LIKE ?`;
            termoDePesquisa= '%' + termoDePesquisa + '%';
        }
        else{
            sql = `SELECT * FROM evento WHERE id = ?`;
        }
        const conexao = await conectar();
        const [registros] = await conexao.execute(sql,[termoDePesquisa]);
        let listaEvento = [];
        for (const registro of registros){
            const evento = new Evento(
                registro.id,
                registro.InfoEvento,
                registro.NomeEvento,
                registro.DataHora,
                registro.LocalEvento,
                registro.Preco,
                registro.QuantidadeI,
                registro.telefone,
                registro.email
            );
            listaEvento.push(evento);
        }
        return listaEvento;
    }
}