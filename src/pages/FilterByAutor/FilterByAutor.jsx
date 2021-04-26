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
		<div>
			<Tabs />
			<div className="container autor-page">
				<div className="autor-block">
					<div className="autor-block__item">
						<div className="autor-avatar">
							<img src={authorImg} alt="" />
						</div>
						<div className="autor-description-block">
							<div className="autor-description-block__title">Андрей Резуненко</div>
							<div className="autor-description-block__desc">Пастор учитель</div>
							<Link to="/" className="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div className="autor-block__item">
						<div className="autor-avatar">
							<img src={igorImg} alt="" />
						</div>
						<div className="autor-description-block">
							<div className="autor-description-block__title">Игорь решетняк</div>
							<div className="autor-description-block__desc">Член пресвитерского совета</div>
							<Link to="/" className="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div className="autor-block__item">
						<div className="autor-avatar">
							<img src={denisImg} alt="" />
						</div>
						<div className="autor-description-block">
							<div className="autor-description-block__title">Денис Домричев</div>
							<div className="autor-description-block__desc">Член пресвитерского совета</div>
							<Link to="/" className="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div className="autor-block__item">
						<div className="autor-avatar">
							<img src={artemImg} alt="" />
						</div>
						<div className="autor-description-block">
							<div className="autor-description-block__title">Артем Кутасевич</div>
							<div className="autor-description-block__desc">Член пресвитерского совета.</div>
							<Link to="/" className="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div className="autor-block__item">
						<div className="autor-avatar">
							<img src={sanyaImg} alt="" />
						</div>
						<div className="autor-description-block">
							<div className="autor-description-block__title">Александр Витер</div>
							<div className="autor-description-block__desc">Лидер домашней группы.</div>
							<Link to="/" className="button">
								Все проповеди
							</Link>
						</div>
					</div>
					<div className="autor-block__item">
						<div className="autor-avatar">
							<img src={genrihImg} alt="" />
						</div>
						<div className="autor-description-block">
							<div className="autor-description-block__title">Генрих Кравченко</div>
							<div className="autor-description-block__desc">Лидер домашней группы.</div>
							<Link className="button" to="">
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
