import Style from 'styled-components';

const Container = Style.div`
   height: ${(height) => height};
`;

const Text = Style.div`
  
       &::before {
            content: "Hello";
            ${({ animationLength }) =>
					animationLength
						? `animation: animate infinite 
					${animationLength}s;`
						: ''}
            padding-left: 10px;
        }
  
        @keyframes animate {
  
            ${(textArr) => textArr}
        }
      
`;

const ScrollingText = ({ textArr, size, length = 0 }) => {
	let keyFramesText;

	textArr.forEach(
		(text, idx) =>
			(keyFramesText += ` ${
				(idx / textArr.length) * 100
			}% {content: "${text}"}`)
	);

	console.log(length);

	return (
		<Container height={size}>
			<Text textArr={keyFramesText} animationLength={length}></Text>
		</Container>
	);
};

export default ScrollingText;
