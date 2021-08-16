import React from 'react';
import Style from 'styled-components';
import { Button } from 'semantic-ui-react';

const Container = Style.div`
   display: flex;
   border: 1px solid black;
   height: 30px;
`;

const Header = () => {
	return (
		<Container>
			<Button
				style={{ backgroundColor: 'papaya' }}
				content="Like"
				icon="like"
			/>
		</Container>
	);
};

export default Header;
