import { render, screen } from '@testing-library/react';
// import App from './App';
// import Functio from './Functio';
// import App1 from './Appl';
import AppButton from './AppButton';
test('renders learn react link', () => {
  render(<AppButton />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
