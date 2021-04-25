import { Link } from "react-router-dom";
import "./Tabs.scss";

const Tabs = () => (
  <div className="tabs-container">
    <div className="tabs-block">
      <div className="tabs-title">Выбрать Проповеди</div>
      <div className="tabs-navigation">
        <Link title="Последние" className="tabs-navigation__item" to="/">
          Последние
        </Link>
        <Link
          title="По книге"
          className="tabs-navigation__item tab-item--active"
          to="books"
        >
          По книге
        </Link>
        <Link title="По темам" className="tabs-navigation__item" to="/topic">
          По темам
        </Link>
        <Link title="Серии" className="tabs-navigation__item" to="/series">
          Серии
        </Link>
        <Link title="По автору" className="tabs-navigation__item" to="/author">
          По автору
        </Link>
      </div>
    </div>
  </div>
);

export default Tabs;
