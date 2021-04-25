import { Link } from "react-router-dom";

import Paginations from "../../components/Pagination/Pagingtion";
import Tabs from "../../components/Tabs/Tabs";
import "./Sermons.scss";
import bgImg from "../../img/background-sermon.png";

const SermoonPage = () => {
  return (
    <div className="container sermons-page">
      <div className="wrapper">
        <div className="sermons-block">
          <Tabs />
          <div className="sermons-list">
            <Link className="sermons-list-item" to="/sermoons/1">
              <img
                className="sermons-list-item__image"
                src={bgImg}
                alt="sermon"
              />
              <div className="sermons-list-item__title">
                Перемены - дело всей общины
              </div>
              <div className="sermons-list-item__date">14 июля 2020 г.</div>
            </Link>
            <Link className="sermons-list-item" to="/sermoons/1">
              <img
                className="sermons-list-item__image"
                src={bgImg}
                alt="sermon"
              />
              <div className="sermons-list-item__title">
                Перемены - дело всей общины
              </div>
              <div className="sermons-list-item__date">14 июля 2020 г.</div>
            </Link>
            <Link className="sermons-list-item" to="/sermoons/1">
              <img
                className="sermons-list-item__image"
                src={bgImg}
                alt="sermon"
              />
              <div className="sermons-list-item__title">
                Перемены - дело всей общины
              </div>
              <div className="sermons-list-item__date">14 июля 2020 г.</div>
            </Link>
            <Link className="sermons-list-item" to="/sermoons/1">
              <img
                className="sermons-list-item__image"
                src={bgImg}
                alt="sermon"
              />
              <div className="sermons-list-item__title">
                Перемены - дело всей общины
              </div>
              <div className="sermons-list-item__date">14 июля 2020 г.</div>
            </Link>
            <Link className="sermons-list-item" to="/sermoons/1">
              <img
                className="sermons-list-item__image"
                src={bgImg}
                alt="sermon"
              />
              <div className="sermons-list-item__title">
                Перемены - дело всей общины
              </div>
              <div className="sermons-list-item__date">14 июля 2020 г.</div>
            </Link>
            <Link className="sermons-list-item" to="/sermoons/1">
              <img
                className="sermons-list-item__image"
                src={bgImg}
                alt="sermon"
              />
              <div className="sermons-list-item__title">
                Перемены - дело всей общины
              </div>
              <div className="sermons-list-item__date">14 июля 2020 г.</div>
            </Link>
            <Link className="sermons-list-item" to="/sermoons/1">
              <img
                className="sermons-list-item__image"
                src={bgImg}
                alt="sermon"
              />
              <div className="sermons-list-item__title">
                Перемены - дело всей общины
              </div>
              <div className="sermons-list-item__date">14 июля 2020 г.</div>
            </Link>
            <Link className="sermons-list-item" to="/sermoons/1">
              <img
                className="sermons-list-item__image"
                src={bgImg}
                alt="sermon"
              />
              <div className="sermons-list-item__title">
                Перемены - дело всей общины
              </div>
              <div className="sermons-list-item__date">14 июля 2020 г.</div>
            </Link>
            <Link className="sermons-list-item" to="/sermoons/1">
              <img
                className="sermons-list-item__image"
                src={bgImg}
                alt="sermon"
              />
              <div className="sermons-list-item__title">
                Перемены - дело всей общины
              </div>
              <div className="sermons-list-item__date">14 июля 2020 г.</div>
            </Link>
          </div>
        </div>

        <Paginations />
      </div>
    </div>
  );
};

export default SermoonPage;
