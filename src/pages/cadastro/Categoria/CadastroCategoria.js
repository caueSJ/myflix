import React from 'react';
import PageDefault from '../../../components/PageDefault/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form>
                <label>
                    Noma da Categoria:
                    <input type="text" />
                </label>
                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Voltar para a Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;