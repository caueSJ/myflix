import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { handlerChange, values } = useForm({
    titulo: 'Título Padrão',
    url: 'https://www.google.com',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  console.log(categorias);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >

        <FormField
          type="text"
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handlerChange}
        />

        <FormField
          type="text"
          label="URL"
          name="url"
          value={values.url}
          onChange={handlerChange}
        />

        <FormField
          type="text" // Mudar
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handlerChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
