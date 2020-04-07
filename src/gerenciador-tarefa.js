import React from 'react';
import './gerenciador-tarefa.css';
import { useRoutes } from 'hookrouter';
import ListarTarefas from './listar/listar-tarefas';
import CadastrarTarefa from './cadastrar/cadastrar-tarefa';
import AtualizarTarefa from './atualizar/atualizar-tarefa';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefa />,
  '/atualizar/:id': ({id}) => <AtualizarTarefa id={id} />
};

function GerenciadorTarefa() {
  return useRoutes (routes);
}

export default GerenciadorTarefa;
