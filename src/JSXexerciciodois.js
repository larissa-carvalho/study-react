import React from 'react';


// Forma que eu fiz
const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];
  
const JSXexerciciodois = () => {

    const valueMinShow = 1500;

    return (
        <>
            {produtos.filter((produto) => Number(produto.preco.replace('R$ ', '')) > valueMinShow).map(({preco, nome, cores}) => {
                return (
                    <div key={nome}>
                        <h1>{nome}</h1>
                        <p>{preco}</p>
                        <ul>
                            {cores.map((cor) => <li style={{background: cor, listStyle: 'none', color: '#fff'}} key={cor}> {cor}</li>)}     
                        </ul>
                    </div>
                )
            })}
        </>
    );
}

export default JSXexerciciodois;