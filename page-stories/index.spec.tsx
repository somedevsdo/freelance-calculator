import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders link text', () => {
    render(<Home />);
    expect(screen.getByText('somedevsdo')).toBeInTheDocument();
  });
});
