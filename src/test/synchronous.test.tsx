import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../components/Button';
import CarList from '../components/CarList';

it('text renders', () => {
    render(<Button>test</Button>);

    const btn = screen.getByText(/test/i);
    expect(btn).toBeInTheDocument();
})

// it('click event', () => {
//     render(<CarList />);
//     expect(screen.getByRole('button', { name: "Add to cart" })).toBeInTheDocument()

//     fireEvent.click(screen.getByRole('button', { name: "Add to cart" }))
//     expect(screen.getAllByRole("item")).toHaveLength(1)
// })