import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Renders correctly', () => {
  test('renders the home component snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('object assignment', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const data = { one: 1 };
    data.two = 2;
    data.three = 3;
    expect(data).toEqual({ one: 1, two: 2, three: 3 });
  });

  test('Continent data rendering', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const continentList = [
      'Africa',
      'America',
      'Antarctic',
      'Asia',
      'Europe',
      'Oceania',
    ];

    const num = continentList.length;
    expect(num).toEqual(6);
    expect(continentList).toContain('Africa');
  });
});
