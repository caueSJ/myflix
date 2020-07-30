import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Páginas
import Home from './pages/Home/Home';
import CadastroVideo from './pages/cadastro/Video/CadastroVideo';
import CadastroCategoria from './pages/cadastro/Categoria/CadastroCategoria';

// CSS
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route path="/cadastro/categoria" component={CadastroCategoria} />
            <Route component={()=> (<div>Erro 404: Página não encontrada.</div>) }  />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);