import style from 'styled-components';

const Container = style.a.attrs(({ href }) => ({ href }))`
   display: flex;
   justify-content: center;
   width: auto;
   padding: 10px 15px;
   border: 1px solid white;
   border-radius: 5px;
   color: white;

   &:active, &:focus {
      color: white;
   }
   span {
      margin-left: 5px;
   }

   
  
   
   `;

const Button = ({ href, name, icon }) => {
	return (
		<Container href={href}>
			<img src={icon} alt={name} width="16px" />
			<span>{name}</span>
		</Container>
	);
};

export default Button;
