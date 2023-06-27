import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Country from '../components/Country';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe('CountryData', () => {
  let mockAxios;

  beforeAll(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('renders country data correctly', async () => {
    const mockData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];

    mockAxios.onGet('/country/data').reply(200, mockData);

    render(<Country />);

    await waitFor(() => {
      const items = screen.getAllByRole('div', { name: /item/i });
      expect(items.length).toBe(mockData.length);
    });
  });

  it('handles error correctly', async () => {
    mockAxios.onGet('/country/data').reply(500);

    render(<Country />);

    await waitFor(() => {
      const errorMessage = screen.getByText(/error/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
