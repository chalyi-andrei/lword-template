import "./FilterByTopic.scss";
import Tabs from "../../components/Tabs/Tabs";

const FilterByTopic = () => {
  return (
    <div className="topic-page">
      <div className="topic-block">
        <Tabs />
        <div className="wrapper">
          <div className="topic-list">
            <div className="topic-list__item">
              <span className="item-title">Бог</span>
              <span className="item-sub-title">Благодать</span>
              <span className="item-sub-title">Божья воля</span>
              <span className="item-sub-title">Суверенность</span>
              <span className="item-sub-title">Любовь</span>
            </div>
            <div className="topic-list__item">
              <span className="item-title">Духовный рост</span>
              <span className="item-sub-title">Благодать</span>
              <span className="item-sub-title">Божья воля</span>
              <span className="item-sub-title">Суверенность</span>
              <span className="item-sub-title">Любовь</span>
              <span className="item-sub-title">Божья воля</span>
              <span className="item-sub-title">Суверенность</span>
              <span className="item-sub-title">Любовь</span>
            </div>
            <div className="topic-list__item">
              <span className="item-title">Церковь</span>
              <span className="item-sub-title">Благодать</span>
              <span className="item-sub-title">Божья воля</span>
              <span className="item-sub-title">Суверенность</span>
              <span className="item-sub-title">Любовь</span>
            </div>
            <div className="topic-list__item">
              <span className="item-title">Иисус Христос</span>
              <span className="item-sub-title">Благодать</span>
              <span className="item-sub-title">Божья воля</span>
              <span className="item-sub-title">Суверенность</span>
              <span className="item-sub-title">Любовь</span>
              <span className="item-sub-title">Суверенность</span>
              <span className="item-sub-title">Любовь</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByTopic;
