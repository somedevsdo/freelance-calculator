import { render, screen } from '@testing-library/react';
import Example from './Example';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders link text', () => {
    render(<Example text="somedevsdo" />);
    expect(screen.getByText('somedevsdo')).toBeInTheDocument();
  });
});
