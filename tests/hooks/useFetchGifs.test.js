import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs', () => {
	test('should return initial state', () => {
		// renderHook is to be able to use hooks for tests, bc otherwise
		// u need to be inside a component to be able to run them.
		const { result } = renderHook(() => useFetchGifs('One Punch'));
		const { images, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('should return array of images and isLoading as false', async () => {
		const { result } = renderHook(() => useFetchGifs('One Punch'));

		// waitFor is like a skipUntil or a filter in ng, that waits for the condition to be
		// satisfied before moving on with the rest of the code
		await waitFor(
			() => expect(result.current.images.length).toBeGreaterThan(0),
			{ timeout: 1000 }
		);

		const { images, isLoading } = result.current;

		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
