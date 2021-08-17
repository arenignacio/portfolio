import Style from 'styled-components';

import ScrollingText from './ScrollingText';
import BouncyArrow from './BouncyArrow';

import bgImg from '../img/kharl-anthony-paica-JudW4mMx6zk-unsplash.jpg';

const Container = Style.div`
   display:flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   height: 100vh;
   width: 100vw;
   border: 1px black solid;
   background: no-repeat url(${bgImg});
   background-size: 100% 100%;
   box-shadow: inset 0 0 0 50vw rgba(0,0,50,0.5);
   `;

const Text = Style.div`
   font-family: 'Fredericka the Great', cursive;
   line-height: 5rem;
   display: flex;
	justify-content: center;
	align-items: center;
   color: white;
   font-size: ${({ type }) => {
		return type === 'heading' ? '8rem' : '2rem';
	}};
   margin: 0px, 20px;

   @media (max-width: 700px) {
		line-height: 2rem;
		font-size: ${({ type }) => {
			return type === 'heading' ? '2.5rem' : '1.5rem';
		}}
   }

`;

const quoteStyle = {
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	width: '100vw',
	color: 'white',
	fontFamily: 'serif',

	letterSpacing: '0.5px',
};

const Hero = ({ size, href }) => {
	const textArr = ['Hello', 'Kamusta', 'Hola', 'Salut', 'Ciao'];

	return (
		<Container>
			<div style={quoteStyle}>
				<div style={{ fontSize: '1.7rem', margin: '0px 10px' }}>
					<div>
						"What do you mean Web Debeloper? Is that eben a real job?"
					</div>
					<div>
						<em>-Mom</em>
					</div>
				</div>
				<div></div>
				<div></div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100vw',
				}}
			>
				<Text type="heading">
					<ScrollingText
						textArr={textArr}
						size={size}
						length={textArr.length}
					/>
					<span
						style={{ background: 'hsla(200, 50%, 50%, 0.5)' }}
					>{`, I'm Aren`}</span>
				</Text>

				<Text type="subtext" size="2rem">
					React{' '}
					<span style={{ background: 'hsla(260, 50%, 50%, 0.5)' }}>
						Web
					</span>{' '}
					Developer
				</Text>
			</div>
			<div style={quoteStyle}>
				<div></div>
				<div></div>
				<div style={{ fontSize: '2rem' }}>
					<div>"Daddy, I'm hungry."</div>
					<div style={{ textAlign: 'right' }}>
						<em>-Euxine</em>
					</div>
				</div>
			</div>{' '}
			<BouncyArrow href={href}></BouncyArrow>
		</Container>
	);
};

export default Hero;

/*attributions 
Photo by <a href="https://unsplash.com/@kharlpaica?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kharl Anthony Paica</a> on <a href="https://unsplash.com/s/photos/baguio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
*/
