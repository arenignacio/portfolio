import Style from 'styled-components';

const Container = Style.div.attrs(() => ({ loading: 'lazy' }))`
   height: ${({ height }) => height}rem;
   width:${({ width }) => width}rem;
   border: 1px solid black;
   background: wheat;
`;

const Card = ({ height, width }) => {
	return (
		<Container height={height} width={width}>
			<div
				style={{
					height: '70%',
					borderBottom: '1px solid black',
					background: 'white',
				}}
			></div>
			<p style={{ margin: '0px 5px' }}>
				<h1>test</h1>
				<p>This is a paragraph</p>
			</p>
		</Container>
	);
};

export default Card;
