import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';

test('renders the home component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
