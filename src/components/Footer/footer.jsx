import './footer.scss';

const Footer = () => (
	<footer class="footer">
		<div class="footer-container">
			<div class="footer-content">
				<p class="footer-content__title">Живое слово</p>
				<p class="footer-content__info">Харьковская баптистская церковь</p>
				<p class="footer-content__info">«Живое слово»</p>
				<p class="footer-content__info content-info__margin">© 2020</p>
			</div>
			<div class="footer-content">
				<p class="footer-content__title">Богослужения</p>
				<p class="footer-content__info">Воскресенье в 11:00</p>
				<address class="footer-content__info">Харьков, ул. Космическая 21 А</address>
			</div>
			<div class="footer-content">
				<p class="footer-content__title">Контакты</p>
				<p class="footer-content__info">+380952136160</p>
				<p class="footer-content__info">
					<a class="content-info__link" href="mailto:livingword.kh@gmail.com">
						livingword.kh@gmail.com
					</a>
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
