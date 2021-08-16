import Style from 'styled-components';
import ScrollingText from './ScrollingText';

import bgImg from '../img/kharl-anthony-paica-JudW4mMx6zk-unsplash.jpg';

console.log(bgImg);

const Container = Style.div`
display:flex;
flex-direction: column;
   height: 100vh;
   width: 100vw;
   border: 1px black solid;
   background: center / cover no-repeat url(${bgImg});
   box-shadow: inset 0 0 0 50vw rgba(0,0,0,0.3);
padding: 10rem 5rem;
   `;

const Text = Style.div`
line-height: 2rem;
  display: flex;
  color: white;
  font-size: ${({ size = '4rem' }) => size};
`;

const Hero = ({ size }) => {
	const textArr = ['Hello', 'Kamusta', 'Hola', 'Salut', 'Ciao'];

	return (
		<Container>
			<Text>
				<ScrollingText
					textArr={textArr}
					size={size}
					length={textArr.length}
				/>
				{`, I'm Aren`}
			</Text>
			<Text size="2rem">Progressive Web Developer</Text>
		</Container>
	);
};

export default Hero;

/*attributions 
Photo by <a href="https://unsplash.com/@kharlpaica?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kharl Anthony Paica</a> on <a href="https://unsplash.com/s/photos/baguio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
*/
