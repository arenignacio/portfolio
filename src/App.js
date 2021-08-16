import React from 'react';

//components
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
	return (
		<div>
			<Header></Header>
			<Hero size="4rem"></Hero>
			<div style={{ height: '800px' }}></div>
		</div>
	);
};

export default App;
