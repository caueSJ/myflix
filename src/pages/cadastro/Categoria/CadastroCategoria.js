import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    };

    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);

    function setValor(chave, valor) { // chave pode ser nome, descricao e cor
        setValores({
            ...valores,
            [chave]:valor
        })
    }

    function handlerChange(infosDoEvento) {
        const {name, value} = infosDoEvento.target;
        setValor(
            name,
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);
            }}>

                <FormField
                    type="text"
                    label="Nome da Categoria:"
                    name="nome"
                    value={valores.nome}
                    onChange={handlerChange}
                />

                <FormField
                    type="text"
                    label="Descrição:"
                    name="descricao"
                    value={valores.descricao}
                    onChange={handlerChange}
                />

                <FormField
                    type="color"
                    label="Cor:"
                    name="cor"
                    value={valores.cor}
                    onChange={handlerChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Voltar para a Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;