import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

test('renders the home component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});