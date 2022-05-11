import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a day rate based on desired wage', () => {
    render(<Home />);
    const wageInput = screen.getByTestId('wage');
    fireEvent.change(wageInput, { target: { value: 30000 } });

    expect(screen.getByText(/135/i)).toBeInTheDocument();
  });

  it('renders a day rate based on desired wage and costs', () => {
    render(<Home />);
    const wageInput = screen.getByTestId('wage');
    const costInput = screen.getByTestId('costs');
    fireEvent.change(wageInput, { target: { value: 30000 } });
    fireEvent.change(costInput, { target: { value: 10000 } });

    expect(screen.getByText(/180/i)).toBeInTheDocument();
  });
});
