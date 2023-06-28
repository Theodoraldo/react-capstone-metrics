import { render, screen } from '@testing-library/react';
import Country from '../components/Country';

describe('Country', () => {
  test('Renders correctly', () => {
    render(<Country />);
    const textElement = screen.getByText('Country');
    expect(textElement).toBeInTheDocument();
  });

  test('render capital of country', async () => {
    render(<Country />);
    const capital = await screen.findAllByRole('caption');
    expect(capital).toHaveLength(3);
  });
});
