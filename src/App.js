import React from 'react';
import style from 'styled-components';

//components
import Header from './components/Header';
import Content from './components/Content';
import Button from './components/Button';

//assets
import facebook from './img/facebook.svg';

const OuterContainer = style.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: rgba(140, 213, 103, 0.6);
	
`;

const InnerContainer = style.div`
	display: flex;
	flex-direction: column;
	width: 92%;
	max-width: 600px;
	margin: 15px 0px;

	border: 1px solid rgba(212, 212, 212, 0.5);
	border-radius: 10px 10px 0px 0px ;
	background: white;

	
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
					content={
						<ul style={{ padding: '0px' }}>
							<li>
								Reverse Polish Calculator
								<p>
									Scientific Calculator that converts problems into
									reverse polish notation before solving it
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
						<Button name="Facebook " icon={facebook} href="test"></Button>
					}
				></Content>
			</InnerContainer>
		</OuterContainer>
	);
};

export default App;
