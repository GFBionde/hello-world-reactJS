import { render, screen } from '@testing-library/react';
import App from './App';

/* Este arquivo é utilizado para realizar os unit tests/testes de unidade. */

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
