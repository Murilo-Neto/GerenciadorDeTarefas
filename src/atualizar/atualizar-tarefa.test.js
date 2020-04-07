import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa';

describe('teste do componente atualizar tarefas', () =>{

  it('deve rendenrizar sem erros', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<AtualizarTarefa id={1}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
