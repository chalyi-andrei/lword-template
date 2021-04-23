import './Sermons.scss';
import bgImg from '../../img/background-sermon.png';

const SermoonPage = () => {
	return (
		<div class="container sermon-page">
			<div class="wrapper">
				<div class="content-block">
					<div class="iframe-block">
						<iframe
							title="sadf"
							class="iframe-block__you-tube"
							src="https://youtu.be/Exfpg250HL0"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>

					<div class="bread-crumbs">
						<div class="bread-crumbs__item">
							Проповеди
							<svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1L5 5L1 9" />
							</svg>
						</div>
						<div class="bread-crumbs__item">
							Благодать
							<svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1L5 5L1 9" />
							</svg>
						</div>
						<div class="bread-crumbs__item">
							Воспитательная сила Благодати
							<svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1L5 5L1 9" />
							</svg>
						</div>
					</div>

					<div class="sermon-title">Воспитательная сила Благодати</div>
					<div class="sermon-description">
						Возможно, мысль об обретении Божьей благодати для вас нова, и вы не совсем понимаете, о чем я
						веду речь. Мы приобретаем ту силу, которую Бог приготовил нам во Христе. Можно использовать
						такую аналогию: мы берем деньги с неиссякаемого банковского счета - со счета благодати Божьей.
						Для этого Бог даровал нам четыре средства: молитву, Свое Слово, подчинение Своему промыслу и
						служение собратьев-верующих...
					</div>
					<div class="action-block">
						<div class="action-block__item--next">Читать далее</div>
						<div class="action-block__item">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<circle cx="19.2861" cy="5" r="2.5" />
								<circle cx="5" cy="12.1431" r="2.5" />
								<circle cx="19.2852" cy="20.2856" r="2.5" />
								<path d="M16.6431 5.92871L7.35742 10.9287" />
								<path d="M16.6431 18.4287L7.35742 13.4287" />
							</svg>
							Поделиться
						</div>
						<div class="action-block__item">
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<line
									x1="12.5"
									y1="2.5"
									x2="12.5"
									y2="15.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path d="M21 19.5V21.5H4V19.5" />
								<path d="M6.5 11L12.5 16L18.5 11" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							Скачать конспект
						</div>
					</div>

					<div class="sound-cloud-block">
						<svg
							width="246"
							height="28"
							viewBox="0 0 246 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0.395181 16.8794L0 20.4539L0.395181 24.0284C0.395181 24.2269 0.592771 24.2269 0.592771 24.2269C0.790361 24.2269 0.790361 24.0284 0.790361 24.0284L1.38313 20.4539L0.790361 16.8794C0.790361 16.6809 0.592771 16.6808 0.592771 16.6808C0.592771 16.6808 0.395181 16.6809 0.395181 16.8794ZM2.76627 14.695L2.17349 20.4539L2.76627 26.2128C2.76627 26.4113 2.96386 26.4113 2.96386 26.4113C3.16145 26.4113 3.16145 26.2128 3.16145 26.2128L3.95181 20.4539L3.16145 14.695C3.16145 14.4965 2.96386 14.4965 2.96386 14.4965L2.76627 14.695ZM10.2747 13.9007L9.87952 20.4539L10.2747 27.4043C10.2747 27.6028 10.4723 27.8014 10.6699 27.8014C10.8675 27.8014 11.0651 27.6028 11.0651 27.4043L11.8554 20.4539L11.2627 13.9007C11.2627 13.7021 11.0651 13.5035 10.8675 13.5035C10.4723 13.5035 10.2747 13.7021 10.2747 13.9007ZM5.33494 13.5035L4.74217 20.4539L5.33494 27.0071C5.33494 27.2057 5.53253 27.4043 5.73012 27.4043C5.73012 27.4043 5.92771 27.2057 5.92771 27.0071L6.52048 20.4539L5.92771 13.5035C5.92771 13.305 5.73012 13.1064 5.53253 13.1064C5.53253 13.305 5.33494 13.305 5.33494 13.5035ZM7.70602 13.305L7.11325 20.4539L7.70602 27.2057C7.70602 27.4043 7.90361 27.6028 8.1012 27.6028C8.29879 27.6028 8.49639 27.4043 8.49639 27.2057L9.08916 20.4539L8.49639 13.305C8.49639 13.1064 8.29879 12.9078 8.1012 12.9078C7.90361 12.9078 7.90361 13.1064 7.70602 13.305ZM12.8434 9.7305L12.2506 20.4539L12.8434 27.4043C12.8434 27.6028 13.041 27.8014 13.2386 27.8014C13.6337 27.8014 13.8313 27.6028 13.8313 27.4043L14.4241 20.4539L13.8313 9.7305C13.8313 9.53191 13.6337 9.33333 13.4361 9.33333C13.041 9.33333 12.8434 9.53191 12.8434 9.7305ZM15.412 7.34752L15.0169 20.4539L15.412 27.4043C15.412 27.8014 15.6096 28 16.0048 28C16.2024 28 16.5976 27.8014 16.5976 27.4043L17.1904 20.4539L16.5976 7.34752C16.5976 6.95035 16.4 6.75177 16.0048 6.75177C15.6096 6.75177 15.412 6.95035 15.412 7.34752ZM137.325 6.55319V14.0993V18.0709C137.128 17.6738 136.535 16.6809 136.14 16.0851L129.817 6.55319H126.458V24.6241H130.014V16.6808V12.7092C130.212 13.1064 130.805 14.0993 131.2 14.695L137.72 24.6241H140.882V6.55319H137.325ZM149.181 10.1277H151.157C154.911 10.1277 156.492 11.9149 156.492 15.6879C156.492 19.0638 154.713 21.2482 150.959 21.2482H149.181V10.1277ZM145.624 24.6241H150.959C155.504 24.6241 160.246 22.0426 160.246 15.6879C160.246 9.13475 156.492 6.75177 151.354 6.75177H145.624V6.55319V24.6241ZM180.993 6.55319V24.6241H191.86V21.0496H184.747V6.55319H180.993ZM235.133 10.1277H237.108C240.863 10.1277 242.443 11.9149 242.443 15.6879C242.443 19.0638 240.665 21.2482 236.911 21.2482H235.133V10.1277ZM231.576 24.6241H236.911C240.863 24.6241 245.012 22.6383 246 17.8723V13.305C245.21 8.53901 241.851 6.75177 237.306 6.75177H231.576V6.55319V24.6241ZM72.1205 11.7163C72.1205 15.2908 74.4916 16.2837 77.653 17.078C81.012 17.8723 81.6048 18.2695 81.6048 19.461C81.6048 20.8511 80.6169 21.4468 78.4434 21.4468C76.6651 21.4468 75.0843 20.8511 73.8988 19.461L71.3301 21.844C72.7132 23.8298 75.2819 25.2199 78.2458 25.2199C83.1855 25.2199 85.359 22.8369 85.359 19.461C85.359 15.4894 82.1976 14.4965 79.4313 13.9007C76.6651 13.305 75.8747 12.9078 75.8747 11.7163C75.8747 10.922 76.4675 10.1277 78.4434 10.1277C80.0241 10.1277 81.4072 10.7234 82.5928 11.9149L85.1614 9.33333C83.3831 7.5461 81.4072 6.55319 78.641 6.55319C78.4434 6.55319 78.2458 6.55319 78.0482 6.55319C74.6892 6.55319 72.1205 8.53901 72.1205 11.7163ZM91.8795 15.6879C91.8795 12.5106 93.0651 9.92908 96.0289 9.92908C98.9928 9.92908 100.178 12.5106 100.178 15.6879C100.178 18.8652 98.9928 21.4468 96.0289 21.4468C93.0651 21.4468 91.8795 18.8652 91.8795 15.6879ZM88.1253 15.6879C88.1253 21.2482 91.0892 25.0213 95.8313 25.0213C100.771 25.0213 103.735 21.2482 103.735 15.6879C103.735 10.1277 100.771 6.35461 95.8313 6.35461C91.0892 6.35461 88.1253 10.1277 88.1253 15.6879ZM118.357 6.35461V16.6808C118.357 19.6596 116.973 21.4468 114.602 21.4468C112.231 21.4468 110.848 19.6596 110.848 16.6808V6.55319H107.292V16.6808C107.292 21.844 110.255 24.8227 114.602 24.8227C119.147 24.8227 121.913 21.844 121.913 16.4823V6.35461H118.357ZM163.21 15.6879C163.21 21.4468 166.371 25.0213 171.113 25.0213C174.472 25.0213 176.448 23.4326 177.831 20.8511L174.867 19.0638C173.88 20.6525 172.892 21.4468 171.311 21.4468C168.545 21.4468 166.964 19.0638 166.964 15.6879C166.964 12.3121 168.545 9.92908 171.113 9.92908C172.694 9.92908 173.682 10.7234 174.472 11.9149L177.831 10.3262C176.646 7.94326 174.67 6.35461 171.311 6.35461C166.569 6.35461 163.21 10.1277 163.21 15.6879ZM197.195 15.6879C197.195 12.5106 198.381 9.92908 201.345 9.92908C204.308 9.92908 205.494 12.5106 205.494 15.6879C205.494 18.8652 204.308 21.4468 201.345 21.4468C198.381 21.4468 197.195 18.8652 197.195 15.6879ZM193.441 15.6879C193.441 21.2482 196.405 25.0213 201.147 25.0213C206.087 25.0213 208.853 21.2482 208.853 15.6879C208.853 10.1277 205.889 6.35461 201.147 6.35461C196.405 6.35461 193.441 10.1277 193.441 15.6879ZM223.475 6.35461V16.6808C223.475 19.6596 222.092 21.4468 219.72 21.4468C217.349 21.4468 215.966 19.6596 215.966 16.6808V6.55319H212.41V16.6808C212.41 21.844 215.373 24.8227 219.72 24.8227C224.265 24.8227 227.031 21.844 227.031 16.4823V6.35461H223.475ZM25.8843 6.75177L25.4892 20.4539L25.8843 27.0071C25.8843 27.4043 26.2795 27.8014 26.6747 27.8014C27.0699 27.8014 27.4651 27.4043 27.4651 27.0071L27.8602 20.4539L27.4651 6.55319C27.4651 6.15603 27.0699 5.75887 26.6747 5.75887C26.0819 5.95745 25.8843 6.15603 25.8843 6.75177ZM17.9807 6.15603L17.5855 20.4539L17.9807 27.2057C17.9807 27.6028 18.1783 27.8014 18.5735 27.8014C18.9687 27.8014 19.1663 27.6028 19.1663 27.2057L19.5614 20.4539L19.1663 6.15603C19.1663 5.75886 18.9687 5.56028 18.5735 5.56028C18.1783 5.56028 17.9807 5.95745 17.9807 6.15603ZM23.1181 6.15603L22.7229 20.4539L23.1181 27.2057C23.1181 27.6028 23.5133 28 23.9084 28C24.3036 28 24.6988 27.6028 24.6988 27.2057L25.094 20.4539L24.6988 6.15603C24.6988 5.75886 24.3036 5.3617 23.9084 5.3617C23.5133 5.3617 23.1181 5.75886 23.1181 6.15603ZM20.5494 5.75887L20.1542 20.4539L20.5494 27.2057C20.5494 27.6028 20.747 27.8014 21.1422 27.8014C21.5373 27.8014 21.7349 27.6028 21.7349 27.2057L22.1301 20.4539L21.7349 5.75887C21.7349 5.3617 21.3398 5.16312 21.1422 5.16312C20.9446 5.16312 20.5494 5.3617 20.5494 5.75887ZM28.453 3.97163L28.0578 20.4539L28.453 27.0071C28.453 27.4043 28.8482 27.8014 29.2434 27.8014C29.6386 27.8014 30.0337 27.4043 30.0337 27.0071L30.4289 20.4539L30.0337 3.97163C30.0337 3.57447 29.6386 3.1773 29.2434 3.1773C28.8482 3.1773 28.453 3.57447 28.453 3.97163ZM31.2193 2.58156L30.8241 20.4539L31.2193 27.0071C31.2193 27.4043 31.6145 27.8014 32.0096 27.8014C32.4048 27.8014 32.8 27.4043 32.8 27.0071L33.1952 20.4539L32.8 2.58156C32.8 2.1844 32.4048 1.78723 32.0096 1.78723H31.812C31.4169 1.78723 31.2193 2.1844 31.2193 2.58156ZM34.3807 0.794326C33.788 0.992908 33.5904 1.19149 33.5904 1.78723V27.0071C33.5904 27.4043 33.9855 27.8014 34.3807 28H56.3133C60.6602 28 64.2169 24.4255 64.2169 20.0567C64.2169 15.6879 60.6602 12.1135 56.3133 12.1135C55.3253 12.1135 54.1398 12.3121 53.3494 12.7092C52.7566 5.56028 46.8289 0 39.5181 0C39.1229 0 38.9253 0 38.5301 0C37.147 0 35.7639 0.397163 34.3807 0.794326Z" />
						</svg>
					</div>

					<div class="author-block">
						<div class="author-block__avatar"></div>
						<div class="author-block__name">Андрей Резуненко</div>
					</div>

					<div class="nav-block">
						<div class="nav-block__page page--prev">
							<svg width="13" height="20" viewBox="0 0 13 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 18L3 10L11 2" stroke-width="3" />
							</svg>
							<span class="title">Предыдущая</span>
						</div>
						<div class="nav-block__page page--next">
							<span class="title">Следующая</span>
							<svg width="13" height="20" viewBox="0 0 13 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M2 2L10 10L2 18" stroke-width="3" />
							</svg>
						</div>
					</div>
				</div>

				<div class="divide-line"></div>
				<div class="similar-sermons-block">
					<div class="similar-sermons-block__title">Похожие проповеди</div>

					<div class="sermons-list">
						<div class="sermons-list-item">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</div>
						<div class="sermons-list-item">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</div>
						<div class="sermons-list-item">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</div>
						<div class="sermons-list-item">
							<img class="sermons-list-item__image" src={bgImg} alt="sermon" />
							<div class="sermons-list-item__title">Перемены - дело всей общины</div>
							<div class="sermons-list-item__date">14 июля 2020 г.</div>
						</div>
					</div>

					<div class="return-to-sermons-list">
						<span class="title">К списку проповедей</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SermoonPage;
