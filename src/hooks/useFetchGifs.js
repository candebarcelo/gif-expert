import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// a custom hook is just a function
export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
		setIsLoading(false);
	};

	// useEffect is to trigger secondary effects.
	useEffect(() => {
		getImages();
		// 2nd param tells it when to re-run the effect. empty array
		// means never, only when the component is first built.
	}, []);

	return {
		images,
		isLoading,
	};
};
