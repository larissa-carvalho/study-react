import React from 'react';


//forma que eu fiz
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

const JSXexercicioum = () => {
    var users = luana;

    const valueTotal = users.compras.reduce((valorTotal, item) => valorTotal + Number(item.preco.replace('R$ ', '')), 0);

    return (
        <>
            <p>Nome: {users.cliente}</p>
            <p>Idade: {users.idade}</p>
            <p>Situação: <span style={users.ativa ? {color: 'green'} : {color: 'red'} }> {users.ativa ? "ativa" : "inativa"}</span></p>
            <p>Total Gasto: {valueTotal}</p>
            {valueTotal > 10000 ? <p>Você está gastando muito!</p> : ''}
        </>
    );
}

export default JSXexercicioum;