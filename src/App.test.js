import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Join Kominiti/i);
  expect(linkElement).toBeInTheDocument();
});

// it('correctly renders override header level', () => {
//   const  { getByRole } = render(<Heading overrideHeadingLevel="h2"/>)
//   expect (getByRole('heading', {level: 2})).toBeInTheDocument()
// });
