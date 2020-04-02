# Landing page Aplicação twoDevs

Este projeto foi iniciado com o [Create React App] (https://github.com/facebookincubator/create-react-app).

Abaixo, você encontrará informações sobre como executar tarefas comuns. <br>
Você pode encontrar a versão mais recente deste guia [aqui] (https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Passos a seguir


#### Fazendo o download do código fonte
```
# git clone https://github.com/frontendDieferson/twoDevs.git
```

#### Executando o aplicativo
```
# cd twoDevs
# npm install
# npm start
```

### Executando no navegador

Abra no seu navegador o endereço http://127.0.0.1:3000


### Novas Features no Projeto

Criando as rotas para navegar entre as páginas do site.
```

# npm install --save react-router-dom

Após instalado abra o projeto no editor de código e abra o arquivo index.js

e importar as bibliotecas 

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/showcase" component={showcase} />
            <Route path="/blog" component={blog} />
            <Route path="/contato" component={contato} />
        </Switch>
        </BrowserRouter>
 , document.getElementById('root'));
registerServiceWorker();

Feito isso criar os arquivos .js exemplo showcase.js 

e dentro de cada arquivo adicionar alguns comandos essenciais. Se estiver criado a página showcase alterar os comandos

class showcase extends Component


e no fim do arquivo...


export default showcase;






