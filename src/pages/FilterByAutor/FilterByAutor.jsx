import { Link } from 'react-router-dom';

import './FilterByAutor.scss';
import authorImg from '../../img/Autor.png';
import igorImg from '../../img/igor.png';
import denisImg from '../../img/denis.jpeg';
import artemImg from '../../img/artem.png';
import genrihImg from '../../img/genrih.jpeg';
import sanyaImg from '../../img/sanya.png';

import Tabs from '../../components/Tabs/Tabs';

const FilterByAuthor = () => {
	return (
		<div class="container">
			<div>
				<Tabs />
				<div class="autor-block">
					<div class="autor-block__item">
						<div class="autor-avatar">
							<img src={authorImg} alt="" />
						</div>
						<div class="autor-description-block">
							<div class="autor-description-block__title">Андрей Резуненко</div>
							<div class="autor-description-block__desc">Пастор учитель</div>
							<Link to="/" class="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div class="autor-block__item">
						<div class="autor-avatar">
							<img src={igorImg} alt="" />
						</div>
						<div class="autor-description-block">
							<div class="autor-description-block__title">Игорь решетняк</div>
							<div class="autor-description-block__desc">Член пресвитерского совета</div>
							<Link to="/" class="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div class="autor-block__item">
						<div class="autor-avatar">
							<img src={denisImg} alt="" />
						</div>
						<div class="autor-description-block">
							<div class="autor-description-block__title">Денис Домричев</div>
							<div class="autor-description-block__desc">Член пресвитерского совета</div>
							<Link to="/" class="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div class="autor-block__item">
						<div class="autor-avatar">
							<img src={artemImg} alt="" />
						</div>
						<div class="autor-description-block">
							<div class="autor-description-block__title">Артем Кутасевич</div>
							<div class="autor-description-block__desc">Член пресвитерского совета.</div>
							<Link to="/" class="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div class="autor-block__item">
						<div class="autor-avatar">
							<img src={sanyaImg} alt="" />
						</div>
						<div class="autor-description-block">
							<div class="autor-description-block__title">Александр Витер</div>
							<div class="autor-description-block__desc">Лидер домашней группы.</div>
							<Link to="/" class="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div class="autor-block__item">
						<div class="autor-avatar">
							<img src={genrihImg} alt="" />
						</div>
						<div class="autor-description-block">
							<div class="autor-description-block__title">Генрих Кравченко</div>
							<div class="autor-description-block__desc">Лидер домашней группы.</div>
							<Link class="button" to="">
								Все проповеди
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterByAuthor;
