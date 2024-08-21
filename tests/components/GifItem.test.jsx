import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('GifItem', () => {
	const title = 'Saitama';
	const url = 'https://one-punch.com/saitama.jpg';

	test('should match snapshot', () => {
		const { container } = render(
			<GifItem
				title={title}
				url={url}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	test('should show image with the correct url and alt', () => {
		render(
			<GifItem
				title={title}
				url={url}
			/>
		);

		const { src, alt } = screen.getByRole('img');

		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('should show title in the component', () => {
		render(
			<GifItem
				title={title}
				url={url}
			/>
		);

		expect(screen.getByText(title)).toBeTruthy();
	});
});
