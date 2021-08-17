import React from 'react';

//components
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Cards';

const App = () => {
	return (
		<div style={{ scrollBehavior: 'smooth' }}>
			<Header></Header>
			<Hero href="#projects" size="4rem"></Hero>
			<div
				style={{
					background: 'rgba(150, 150, 150, 0.6)',
					height: '100vh',
					width: '100vw',
				}}
			>
				<div
					id="projects"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
						width: '100vw',
					}}
				>
					<div
						style={{
							display: 'flex',
							width: '80%',
							justifyContent: 'space-evenly',
						}}
					>
						<Card height="30" width="20"></Card>
						<Card height="30" width="20"></Card>
						<Card height="30" width="20"></Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
