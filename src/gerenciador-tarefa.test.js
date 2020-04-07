import React from 'react';
import ReactDOM from 'react-dom';
import GerenciadorTarefa from './gerenciador-tarefa';

describe('teste do componente gerenciador tarefas', () =>{

  it('deve rendenrizar sem erros', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<GerenciadorTarefa />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
