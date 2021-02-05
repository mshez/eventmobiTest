import { render, screen } from '@testing-library/react';
import App from 'src/containers/App';

test('renders APP', () => {
  render(<App />);
  const linkElement = screen.getByText(/No users found/i);
  expect(linkElement).toBeInTheDocument();
});
