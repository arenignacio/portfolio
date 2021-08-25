import React from 'react';
import style from 'styled-components';

//components
import Header from './components/Header';
import Content from './components/Content';
import Button from './components/Button';

//assets
import github from './img/logo-github.svg';
import arrowForward from './img/arrow-forward-outline.svg';
import linkedIn from './img/logo-linkedin.svg';

const OuterContainer = style.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-image: linear-gradient(to top right, rgb(101, 115, 255), rgb(109, 120, 241), rgb(117, 125, 227), rgb(125, 131, 212), rgb(133, 136, 198), rgb(141, 141, 184), rgb(123, 154, 188), rgb(106, 166, 192), rgb(88, 179, 196), rgb(70, 191, 199), rgb(53, 204, 203), rgb(35, 216, 207));
	
`;

const InnerContainer = style.div`
	display: flex;
	flex-direction: column;
	width: 92%;
	max-width: 600px;
	margin: 15px 0px;
	padding: 0px;

	border-radius: 10px 10px 0px 0px ;
	background: white;

	@media (min-width: 600px) {
		margin: 70px;
	}

	
`;

const App = () => {
	return (
		<OuterContainer>
			<InnerContainer>
				<Header></Header>
				<Content
					title="About"
					background="rgba(32, 154, 206, 0.6)"
					content={
						<p>
							Hello, my name is Aren and I am a React Web Developer. I
							help make responsive webpages and applications using tools
							such as React, Redux, JavaScript, CSS, and HTML.
						</p>
					}
				></Content>
				<Content
					title="Projects"
					background="rgba(32, 154, 206, 0.8)"
					listImage={arrowForward}
					content={
						<ul style={{ padding: '0px' }}>
							<li>
								Reverse Polish Calculator
								<p>
									Scientific Calculator that use the shunting yard
									algorithm to convert problems into reverse polish
									notation before solving it
								</p>
							</li>
							<li>Etch-a-sketch</li>
							<li>Book Shelf Manager</li>
						</ul>
					}
				></Content>
				<Content
					title="Contact"
					background="rgba(0, 110, 255, 1);"
					content={
						<div style={{ display: 'flex', flexDirection: 'row' }}>
							<Button
								name="Github "
								icon={github}
								href="https://github.com/arenignacio"
							></Button>
							<Button
								name="LinkedIn "
								icon={linkedIn}
								href="https://www.linkedin.com/in/aren-ignacio-715407151/"
							></Button>
						</div>
					}
				></Content>
			</InnerContainer>
		</OuterContainer>
	);
};

export default App;
