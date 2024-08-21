import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('GifExpertApp', () => {
	const inputValue = 'Saitama';

	test('should call add new categories', () => {
		const { container } = render(<GifExpertApp />);

		screen.debug();
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		fireEvent.input(input, { target: { value: inputValue + 2 } });
		fireEvent.submit(form);

		expect(container.getElementsByClassName('card-grid').length).toBe(3);
	});

	test('should not add duplicate categories', () => {
		const { container } = render(<GifExpertApp />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(container.getElementsByClassName('card-grid').length).toBe(2);
	});
});
