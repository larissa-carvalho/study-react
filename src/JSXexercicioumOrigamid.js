import React from 'react';


//origamid
const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const JSXexercicioumOrigamid = () => {
    var users = luana;

    //foi diferente da forma que usei o reduce, tipo porque no outro eu preciso usar 0, e aqui não? 
    const valueTotal = users.compras
        .map((item) => Number(item.preco.replace('R$ ', '')))
        .reduce((a, b) => a + b);

    return (
        <>
            <p>Nome: {users.cliente}</p>
            <p>Idade: {users.idade}</p>
            <p>Situação: <span style={{color: users.ativa ? "green" : "red"}}> {users.ativa ? "ativa" : "inativa"}</span></p>
            <p>Total Gasto: {valueTotal}</p>

            {/* esse && mudou total a estrutura do código */}
            {valueTotal > 10000 && <p>Você está gastando muito!</p>}
        </>
    );
}

export default JSXexercicioumOrigamid;