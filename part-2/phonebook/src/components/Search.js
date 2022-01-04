const Search = ({ searchString, handleSearch }) => {
	return (
		<div>
			filter shown with:
			<input
				type="search"
				name="search"
				value={searchString}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default Search;
