import Evento from "./Modelos/Evento.js";

const evento = new Evento(0, "dsadscrição do Evento", "sd do Evento", "2022", "sf do Evento", "100.00", "f", "(11)ds-8834", "email@exemplo.com");

evento.gravar().then(() =>{
    console.log("Cliente gravado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});