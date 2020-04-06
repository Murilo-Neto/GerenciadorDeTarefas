import React from 'react';
import { render } from '@testing-library/react';
import GerenciadorTarefa from './gerenciador-tarefa';

test('renders learn react link', () => {
  const { getByText } = render(<GerenciadorTarefa />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
