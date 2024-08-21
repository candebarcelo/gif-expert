import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{/* this is a logic and, it works as an if, meaning if isLoading, 
            then render the h2. */}
			{isLoading && <h2>Loading...</h2>}

			<div className="card-grid">
				{images.map((image) => (
					<GifItem
						key={image.id}
						// the spread here means it'll pass each
						// item in the image obj as individual props.
						{...image}
					/>
				))}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
