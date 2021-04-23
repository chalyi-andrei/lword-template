import { Link } from 'react-router-dom';
import './Tabs.scss';

const Tabs = () => (
	<div class="tabs-container">
		<div class="tabs-block">
			<div class="tabs-navigation">
				<Link title="Последние" class="tabs-navigation__item" to="/">
					Последние
				</Link>
				<Link title="По книге" class="tabs-navigation__item tab-item--active" to="books">
					По книге
				</Link>
				<Link title="По темам" class="tabs-navigation__item" to="themes">
					По темам
				</Link>
				<Link title="Серии" class="tabs-navigation__item" to="/series">
					Серии
				</Link>
				<Link title="По автору" class="tabs-navigation__item" to="/author">
					По автору
				</Link>
			</div>
		</div>
	</div>
);

export default Tabs;
