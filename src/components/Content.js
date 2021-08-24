import style from 'styled-components';

const Container = style.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 25px;
   color: rgba(255, 255, 255, 0.9);
   letter-spacing: 0.7px;
   border-top: 1px solid rgba(0, 0, 0, 0.16);
   font-family: Roboto, serif;

   h3 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.16);
      padding-bottom: 20px;
    
      font-family: Roboto, sans-serif;
   }

   li {
      list-style: none;
      margin-bottom: 15px;

      &::before {
         content: 'x ';
      }
   }



   ${({ background }) => {
		return `background: ${background}`;
	}}
`;

const Content = ({ title, background, content }) => {
	return (
		<Container background={background}>
			<h3>{title}</h3>
			{content}
		</Container>
	);
};

export default Content;
