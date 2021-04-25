import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-content__title">Живое слово</p>
        <p className="footer-content__info">Харьковская баптистская церковь</p>
        <p className="footer-content__info">«Живое слово»</p>
        <p className="footer-content__info content-info__margin">© 2020</p>
      </div>
      <div className="footer-content">
        <p className="footer-content__title">Богослужения</p>
        <p className="footer-content__info">Воскресенье в 11:00</p>
        <address className="footer-content__info">
          Харьков, ул. Космическая 21 А
        </address>
      </div>
      <div className="footer-content">
        <p className="footer-content__title">Контакты</p>
        <p className="footer-content__info">+380952136160</p>
        <p className="footer-content__info">
          <a
            className="content-info__link"
            href="mailto:livingword.kh@gmail.com"
          >
            livingword.kh@gmail.com
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
