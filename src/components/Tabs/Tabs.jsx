import './Tabs.scss';

const Tabs = () => (
	<div class="tabs-container">
		<div class="tabs-block">
			<h3 class="tabs-title">Выбрать Проповеди</h3>
			<div class="tabs-navigation">
				<button title="Последние" class="tabs-navigation__item">
					Последние
				</button>
				<button title="По книге" class="tabs-navigation__item tab-item--active">
					По книге
				</button>
				<button title="По темам" class="tabs-navigation__item">
					По темам
				</button>
				<button title="Серии" class="tabs-navigation__item">
					Серии
				</button>
				<button title="По автору" class="tabs-navigation__item">
					По автору
				</button>
			</div>
		</div>
	</div>
);

export default Tabs;
