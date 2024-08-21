import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChanged = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		// this is to avoid refreshing the page on form submit
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;

		onNewCategory(inputValue.trim());
		setInputValue('');
	};

	return (
		<form
			onSubmit={onSubmit}
			aria-label="form"
		>
			<input
				type="text"
				placeholder="Search gifs"
				value={inputValue}
				onChange={onInputChanged}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
};
