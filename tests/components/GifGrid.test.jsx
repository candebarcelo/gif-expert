import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// mock the custom hook so we don't call it and only test this component
jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid', () => {
	const category = 'One Punch';

	test('should initially show Loading message', () => {
		// mock hook return value
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});
		render(<GifGrid category={category} />);
		expect(screen.getByText('Loading...')).toBeTruthy();
		expect(screen.getByText(category)).toBeTruthy();
	});

	test('should show items when images load from useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Saitama',
				url: 'https://localhost/saitama.jpg',
			},
			{
				id: '123',
				title: 'Goku',
				url: 'https://localhost/goku.jpg',
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);
		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
