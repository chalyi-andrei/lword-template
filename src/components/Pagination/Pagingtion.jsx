import './Pagination.scss';

const Pagination = () => (
	<div class="container">
		<div class="pagination-block">
			<div class="pagination-block__item">1</div>
			<div class="pagination-block__item">2</div>
			<div class="pagination-block__item">3</div>
			<div class="pagination-block__item item--active">
				<svg width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.62931 8.99986L0.770508 1.6838L2.22958 0.315918L10.3708 8.99986L2.22958 17.6838L0.770508 16.3159L7.62931 8.99986Z"
					/>
				</svg>
			</div>
			<div class="pagination-block__item">
				<svg width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.62931 8.99986L0.770508 1.6838L2.22958 0.315918L10.3708 8.99986L2.22958 17.6838L0.770508 16.3159L7.62931 8.99986Z"
					/>
				</svg>
				<svg width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.62931 8.99986L0.770508 1.6838L2.22958 0.315918L10.3708 8.99986L2.22958 17.6838L0.770508 16.3159L7.62931 8.99986Z"
					/>
				</svg>
			</div>
		</div>
	</div>
);

export default Pagination;
