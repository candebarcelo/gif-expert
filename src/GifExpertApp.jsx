import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Cartoon Cats']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>Gif Expert</h1>

			{/* in this case, the prop is an event the child emits. we're not 
            passing anything, but receiving. */}
			<AddCategory onNewCategory={onAddCategory} />

			{categories.map((category) => (
				<GifGrid
					key={category}
					category={category}
				/>
			))}
		</>
	);
};
