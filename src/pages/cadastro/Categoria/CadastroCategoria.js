import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) { // chave pode ser nome, descricao e cor
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handlerChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValor(
      name,
      value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('locahost')
      ? 'http://localhost:8080/categorias'
      : 'https://react-myflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([...response]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
      }}
      >

        <FormField
          type="text"
          label="Nome da Categoria"
          name="nome"
          value={valores.nome}
          onChange={handlerChange}
        />

        <FormField
          type="text"
          label="Descrição"
          name="descricao"
          value={valores.descricao}
          onChange={handlerChange}
        />

        <FormField
          type="color"
          label="Cor"
          name="cor"
          value={valores.cor}
          onChange={handlerChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
