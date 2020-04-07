import React from 'react';
import ReactDOM from 'react-dom';
import ListarTarefas from './listar-tarefas';

describe('teste do listar tarefas', () =>{

  it('deve rendenrizar sem erros', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<ListarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
