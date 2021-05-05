import "./FilterByTopic.scss";
import Tabs from "../../components/Tabs/Tabs";

const FilterByTopic = () => {
  return (
    <>
      <div className="topic-page">
        <div className="topic-block">
          <Tabs />
          <div className="wrapper g-container">
            <div className="topic-list topic-grid-container">
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Бог</span>
                  <label className="toggle-container" for="toggle-topic-name">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Благодать
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Божья воля
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Суверенность
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Любовь
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name2"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Иисус Христос</span>
                  <label className="toggle-container" for="toggle-topic-name2">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title ">
                      Божественность Христа
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Величие
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Рождество
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Жертва
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Пасха
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Воскресение
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name3"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Святой Дух</span>
                  <label className="toggle-container" for="toggle-topic-name3">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Служение Святого Духа
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Роль Святого Духа
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name4"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Грех</span>
                  <label className="toggle-container" for="toggle-topic-name4">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Сила и Последствия Греха
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Строгость
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name5"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Путь Спасения</span>
                  <label className="toggle-container" for="toggle-topic-name5">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Спасение
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Евангелие
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Милость
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name6"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Духовный рост</span>
                  <label className="toggle-container" for="toggle-topic-name6">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Терпение
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Слово
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Молитва
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Испытания
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Стойкость святых
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Вера
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Неверие
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Страдания
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name7"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Характер христианина</span>
                  <label className="toggle-container" for="toggle-topic-name7">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Прощение
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Святая жизнь
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Праведность
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Лицемерие
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Благодарность
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Христианская жизнь
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name8"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Семья</span>
                  <label className="toggle-container" for="toggle-topic-name8">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Муж
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Жена
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Воспитание детей
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-nameC"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Церковь</span>
                  <label className="toggle-container" for="toggle-topic-nameC">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Божий народ
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Пастырь
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Отношения
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Единство
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Религия
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      История церкви
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name10"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Служение</span>
                  <label className="toggle-container" for="toggle-topic-name10">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Благовестие
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Гостеприимство
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Духовные дары
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Проповедь
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Духовное лидерство
                    </a>
                  </div>
                </div>
              </div>
              <div className="topic-list__item topic-grid-item">
                <input
                  id="toggle-topic-name11"
                  className="toggle"
                  type="checkbox"
                />
                <div className=" item-accordion">
                  <span className="item-title">Будущее</span>
                  <label className="toggle-container" for="toggle-topic-name11">
                    <span className="button-toggle"></span>
                    <span className="button-toggle__clone"></span>
                  </label>
                  <div className="topic-list-part">
                    <a href="/topic#" className="item-sub-title active">
                      Последнее время
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Осуждение
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Суд
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Небеса
                    </a>
                    <a href="/topic#" className="item-sub-title active">
                      Ад
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByTopic;
