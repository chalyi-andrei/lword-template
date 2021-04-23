import { Link } from 'react-router-dom';

import Paginations from '../../components/Pagination/Pagingtion';
import Tabs from '../../components/Tabs/Tabs';
import './Sermons.scss';
import bgImg from '../../img/background-sermon.png';

const SermoonPage = () => {
	return (
		<div class="container sermons-page">
			<div class="wrapper">
				<div class="sermons-block">
					<div class="sermons-title">Выбрать Проповеди</div>

					<Tabs />
					<div class="sermons-list">
						<Link class="sermons-list-item" to="/sermoons/1">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</Link>
						<Link class="sermons-list-item" to="/sermoons/1">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</Link>
						<Link class="sermons-list-item" to="/sermoons/1">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</Link>
						<Link class="sermons-list-item" to="/sermoons/1">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</Link>
						<Link class="sermons-list-item" to="/sermoons/1">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</Link>
						<Link class="sermons-list-item" to="/sermoons/1">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</Link>
						<Link class="sermons-list-item" to="/sermoons/1">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</Link>
						<Link class="sermons-list-item" to="/sermoons/1">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</Link>
						<Link class="sermons-list-item" to="/sermoons/1">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</Link>
					</div>
				</div>

				<Paginations />
			</div>
		</div>
	);
};

export default SermoonPage;
