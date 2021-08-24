import style from 'styled-components';

const Container = style.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 25px;
   
   color: rgba(255, 255, 255, 0.7);

   h1 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.16);
      padding-bottom: 20px;
    
      font-family: Poppins, sans-serif;
   }


   ${({ background }) => {
		return `background: ${background}`;
	}}
`;

const Content = ({ title, background, content }) => {
	return (
		<Container background={background}>
			<h1>{title}</h1>
			{content}
		</Container>
	);
};

export default Content;
