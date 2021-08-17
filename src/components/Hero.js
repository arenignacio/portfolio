import Style from 'styled-components';
import ScrollingText from './ScrollingText';

import bgImg from '../img/kharl-anthony-paica-JudW4mMx6zk-unsplash.jpg';

console.log(bgImg);

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
   box-shadow: inset 0 0 0 50vw rgba(0,0,0,0.3);
   `;

const Text = Style.div`
   font-family: 'Fredericka the Great', cursive;
   line-height: 3rem;
   display: flex;
   color: white;
   font-size: ${({ size = '4rem' }) => size};
   margin: 0px, 20px;

   @media screen (max-width: 700) {
      display: flex;
      flex-direction: column;
   }
`;

const Hero = ({ size }) => {
	const textArr = ['Hello', 'Kamusta', 'Hola', 'Salut', 'Ciao'];

	return (
		<Container>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100vw',
				}}
			>
				Hello
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
				<Text>
					<ScrollingText
						textArr={textArr}
						size={size}
						length={textArr.length}
					/>
					<span>{`, I'm Aren`}</span>
				</Text>

				<Text size="2rem">React Web Developer</Text>
			</div>

			<div>Test</div>
		</Container>
	);
};

export default Hero;

/*attributions 
Photo by <a href="https://unsplash.com/@kharlpaica?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kharl Anthony Paica</a> on <a href="https://unsplash.com/s/photos/baguio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
*/
