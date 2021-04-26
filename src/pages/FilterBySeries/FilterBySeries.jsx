import { Link } from 'react-router-dom';

import Tabs from '../../components/Tabs/Tabs';
import './FilterBySeries.scss';
import s1 from '../../img/s1.png';
import s2 from '../../img/s2.png';
import s3 from '../../img/s3.png';

const FilterBySeries = () => {
	return (
		<div className="container series-page">
			<div className="wrapper">
				<div className="sermons-block">
					<Tabs />
					<div className="sermons-list">
						<Link className="sermons-list-item" to="/sermoons/1">
							<img className="sermons-list-item__image" src={s1} alt="sermon" />
							<div className="sermons-list-item__title">Евангелие от Иоанна</div>
						</Link>
						<Link className="sermons-list-item" to="/sermoons/1">
							<img className="sermons-list-item__image" src={s2} alt="sermon" />
							<div className="sermons-list-item__title">Послание к Колосянам</div>
						</Link>

						<Link className="sermons-list-item" to="/sermoons/1">
							<img className="sermons-list-item__image" src={s3} alt="sermon" />
							<div className="sermons-list-item__title">Послание к Римлянам</div>
						</Link>

						<Link className="sermons-list-item" to="/sermoons/1">
							<img className="sermons-list-item__image" src={s2} alt="sermon" />
							<div className="sermons-list-item__title">Евангелие от Матфея</div>
						</Link>

						<Link className="sermons-list-item" to="/sermoons/1">
							<img className="sermons-list-item__image" src={s3} alt="sermon" />
							<div className="sermons-list-item__title">Книга пророка Малахии</div>
						</Link>
					</div>

					<a href="/" className="sermoons-link">
						Все проповеди
					</a>
				</div>
			</div>
		</div>
	);
};

export default FilterBySeries;
