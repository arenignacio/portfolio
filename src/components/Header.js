import React from 'react';
import Style from 'styled-components';
import { Button } from 'semantic-ui-react';

const Container = Style.div`
   display: flex;
   border: 1px solid black;
   height: 30px;
   width: 100vw;
   position: fixed;
`;

const Header = () => {
	return (
		<Container>
			<Button
				style={{ backgroundColor: 'royalblue' }}
				content="Like"
				icon="like"
			/>
		</Container>
	);
};

export default Header;
