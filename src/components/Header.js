import React from 'react';
import Style from 'styled-components';

import img from '../img/avatar2.jpg';

const Container = Style.header`
   display: flex;
	flex-direction: column;
   justify-content: center;
   align-items: center;
	box-sizing: border-box;
	width: 100%;
	padding: 35px 10px;

	@media (min-width: 600px) {
		padding: 75px;
	}

	h1 {
		color: rgba(144,147,150,0.9);
		font-size: 2.5rem;
	}

	p {
		color: rgba(144,147,150,0.7);
		font-size: 1.3rem;
	}
`;

const Profile = Style.div`
	background: center / 100% no-repeat url(${img});
	height: 118px;
	width: 118px;
	border-radius: 50%;
	box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.2)
`;

const Header = () => {
	return (
		<Container>
			<Profile></Profile>
			<h1>Aren Ignacio</h1>
			<p>React Web Developer</p>
		</Container>
	);
};

export default Header;
