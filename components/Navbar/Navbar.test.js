import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
	xit('', () => {
		render(<Navbar />);

		const nav = screen.getByRole('nav');

		expect(nav).toBeInTheDocument();
	});
});
