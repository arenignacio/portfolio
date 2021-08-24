import style from 'styled-components';

const Container = style.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 25px;

   box-sizing: border-box;
   border-top: 1px solid rgba(0, 0, 0, 0.16);
   
   font-family: Roboto, serif;
   letter-spacing: 0.7px;
   color: rgba(255, 255, 255, 0.9);


   h3 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.16);
      padding-bottom: 20px;
    
      font-family: Roboto, sans-serif;
   }

   li {
      list-style: none;
      margin-bottom: 15px;

   }

   @media (min-width: 600px) {
      flex-direction: row;
      h3 {
         border-right: 1px solid rgba(0, 0, 0, 0.16);
         border-bottom: none;
         padding-right: 20px;
         min-width: 20%;
      }

      span {
         padding-left: 20px;
      }
   }



   ${({ background }) => {
		return `background: ${background}`;
	}}
`;

const Content = ({ title, background, content, listImage }) => {
	return (
		<Container background={background} listImage={listImage || ''}>
			<h3>{title}</h3>
			<span>{content}</span>
		</Container>
	);
};

export default Content;
