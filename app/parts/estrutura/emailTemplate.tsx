import { ContatoTypes } from "../Componentes/ContatoFormHome";

export function EmailTemplate(body: ContatoTypes) {
    return (
        <div>
            <h1>Contato Site - Movitech</h1>
            <p>Nome: {body.nome}!</p>
            <p>E-mail: {body.email}!</p>
            <p>Telefone: {body.telefone}!</p>
            <p>Mensagem: <br /> {body.mensagem}!</p>
        </div>
    )
};