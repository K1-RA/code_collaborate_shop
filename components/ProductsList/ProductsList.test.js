// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import ProductsList from './ProductsList';
import '@testing-library/jest-dom';

describe('ProductsList', () => {
	xit('renders an Price', () => {
		const { getByText } = render(<ProductsList />);
		expect(getByText('489 SEK')).toBeInTheDocument();
	});

	xit('renders an Price', () => {
		render(<ProductsList />);

		const price = screen.getByRole('p', {
			name: /489 SEK/i,
		});

		expect(price).toBeInTheDocument();
	});
});
