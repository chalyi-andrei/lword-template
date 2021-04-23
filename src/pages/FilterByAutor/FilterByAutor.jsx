import './FilterByAutor.scss';
import authorImg from '../../img/Autor.png';

const FilterByAuthor = () => {
	return (
		<div class="container">
			<div class="autor-block">
				<div class="autor-block__item">
					<div class="autor-avatar">
						<img src={authorImg} alt="" />
					</div>
					<div class="autor-description-block">
						<div class="autor-description-block__title">Андрей Резуненко</div>
						<div class="autor-description-block__desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</div>
						<button class="button">Все проповеди</button>
					</div>
				</div>
				<div class="autor-block__item">
					<div class="autor-avatar">
						<img src={authorImg} alt="" />
					</div>
					<div class="autor-description-block">
						<div class="autor-description-block__title">Андрей Резуненко</div>
						<div class="autor-description-block__desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</div>
						<button class="button">Все проповеди</button>
					</div>
				</div>
				<div class="autor-block__item">
					<div class="autor-avatar">
						<img src={authorImg} alt="" />
					</div>
					<div class="autor-description-block">
						<div class="autor-description-block__title">Андрей Резуненко</div>
						<div class="autor-description-block__desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</div>
						<button class="button">Все проповеди</button>
					</div>
				</div>
				<div class="autor-block__item">
					<div class="autor-avatar">
						<img src={authorImg} alt="" />
					</div>
					<div class="autor-description-block">
						<div class="autor-description-block__title">Андрей Резуненко</div>
						<div class="autor-description-block__desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</div>
						<button class="button">Все проповеди</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterByAuthor;
