import React from 'react';
import style from 'styled-components';

//components
import Header from './components/Header';
import Content from './components/Content';

const OuterContainer = style.div`
	display: flex;
	justify-content: center;
	width: 100%;
	background: rgba(140, 213, 103, 0.6);
	
`;

const InnerContainer = style.div`
	display: flex;
	flex-direction: column;
	width: 92%;
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
					background="rgba(32, 154, 206, 0.76)"
					content={
						<p>
							Hello, my name is Aren and I am a React Web Developer. I
							discovered my passion for programming after my first
							programming class which at the
						</p>
					}
				></Content>
			</InnerContainer>
		</OuterContainer>
	);
};

export default App;
