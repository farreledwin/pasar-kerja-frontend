import React from 'react';
import Logo from '../../assets/logo-mini-transparent.png';
import './header-type-2.styles.scss';
import { Link } from 'react-router-dom';
const borderWhatJobStyle = {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0'
};

const borderWhereJobStyle = {
	borderRadius: '0'
};
const displayModify = {
	display: 'flex'
};
const HeaderType2 = () => (
	<div className="header__logo">
		<Link to="/"><img src={Logo} />
		</Link>
		<div className="header__searchbar">
			<div className="header__searchbar__inputjob">
				<div className="form-group">
					<input
						type="text"
						style={borderWhatJobStyle}
						className="form-control padding-add"
						placeholder="&#xf002;   Cari tipe pekerjaan"
					/>
				</div>
				<div className="form-group" style={displayModify}>
					<input
						type="text"
						style={borderWhereJobStyle}
						className="form-control padding-add"
						placeholder="&#xf3c5;   Cari lokasi?"
					/>
					<div className="form-group background-change">
						<a href="">
							<p class="search-btn">&#xf002;</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default HeaderType2;
